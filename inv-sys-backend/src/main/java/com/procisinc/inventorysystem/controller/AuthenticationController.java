package com.procisinc.inventorysystem.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.procisinc.inventorysystem.model.AuthenticationRequest;
import com.procisinc.inventorysystem.model.AuthenticationResponse;
import com.procisinc.inventorysystem.model.Users;
import com.procisinc.inventorysystem.service.UserService;
import com.procisinc.inventorysystem.util.JwtUtil;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

	
	@Autowired
	private UserService userService;
		
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	@PostMapping("/auth/login")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
		System.out.println("yes");
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),authenticationRequest.getPassword())
					);		
		}
		catch(BadCredentialsException e) {
			throw new Exception("Incorrect Username or Password" , e);
		}
		
		final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());
		
		final String jwt = jwtUtil.generateToken(userDetails.getUsername());
		
		
		return ResponseEntity.ok(new AuthenticationResponse(jwt , userDetails.getUsername()));
		
	}
	
	
}
