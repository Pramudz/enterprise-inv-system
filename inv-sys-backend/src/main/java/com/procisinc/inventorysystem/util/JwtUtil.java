package com.procisinc.inventorysystem.util;

import java.util.Date;
import java.util.function.Function;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@Service
public class JwtUtil {

	@Value("${jwt.auth.app}")
	private String appName;

	@Value("${jwt.auth.secret_key}")
	private String secretKey;

	@Value("${jwt.auth.expires_in}")
	private int expiresIn;

	private SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS256;

	private Claims getAllClaimsFromToken(String token) {
		Claims claims;
		try {
			claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
		} catch (Exception e) {
			claims = null;
		}

		return claims;
	}

	public String getUserNameFromToken(String token) {
		String username;
		try {
			final Claims claims = this.getAllClaimsFromToken(token);
			username = claims.getSubject();
		} catch (Exception e) {
			username = null;
		}
		return username;
	}

	public String generateToken(String username) {

		return Jwts.builder().setIssuer(appName).setSubject(username).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(generateExpirationDate()).signWith(SIGNATURE_ALGORITHM, secretKey).compact();
	}

	private Date generateExpirationDate() {
		return new Date(System.currentTimeMillis() + 100 * 60 * 60 * 10);
	}

	public Date getExpirationDate(String token) {
		Date expireDate;
		try {
			final Claims claims = this.getAllClaimsFromToken(token);
			expireDate = claims.getExpiration();
		} catch (Exception e) {
			expireDate = null;
		}
		return expireDate;
	}
	
	public Date getIssuedDateFromToken(String token) {
		Date issuedAt;
		try {
			final Claims claims = this.getAllClaimsFromToken(token);
			issuedAt = claims.getIssuedAt();
		} catch(Exception e) {
			issuedAt = null;
		}
		return issuedAt;
	}
	

	public Boolean isTokenExpired(String token) {
		Date expireDate = getExpirationDate(token);
		return expireDate.before(new Date(System.currentTimeMillis()));
	}

	public Boolean validateToken(String token, UserDetails userDetails) {
		final String username = getUserNameFromToken(token);
		return (username != null && username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
	
	public String getToken(HttpServletRequest request) {
		String authHeader = getAuthHeaderFromHeader(request);
		
		if(authHeader != null && authHeader.startsWith("Bearer ")) {
			return authHeader.substring(7);
		}
		else {
			return null;
		}
	}

	public String getAuthHeaderFromHeader(HttpServletRequest request) {
		return request.getHeader("Authorization");
	}
}
