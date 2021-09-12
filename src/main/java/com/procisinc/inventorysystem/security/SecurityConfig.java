package com.procisinc.inventorysystem.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.procisinc.inventorysystem.service.UserService;
import com.procisinc.inventorysystem.util.JwtAuthenticationFilter;
import com.procisinc.inventorysystem.util.JwtUtil;
import com.procisinc.inventorysystem.util.RestAuthenticationEntryPoint;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserService myUserDetailService;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private RestAuthenticationEntryPoint restAuthenticationEntryPoint;

	// Authentication --> Roles
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// in memory authentication
		auth.inMemoryAuthentication().withUser("Pramud").password(passwordEncoder().encode("pramud@123"))
				.authorities("USER", "ADMIN");

		// database Authorization
		auth.userDetailsService(myUserDetailService).passwordEncoder(passwordEncoder());
	}

	// in order to make the response and request of JWT Token
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {

		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// http.authorizeRequests().anyRequest().authenticated().and().httpBasic();

		// http.cors();

		// http.authorizeRequests().antMatchers("/user").hasAnyRole("Supervisor","Admin","User").and().formLogin();

		// previous method for basic authentication using JDBC

		/*
		 * http .csrf().disable() .authorizeRequests()
		 * .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
		 * .anyRequest().authenticated() .and() //.formLogin().and() .httpBasic();
		 * 
		 */

		http.csrf().disable().exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint).and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests()
				.antMatchers("/api/auth/login").permitAll().antMatchers(HttpMethod.OPTIONS,"/**").permitAll().antMatchers("/api/users").permitAll().anyRequest()
				.authenticated();

		http.addFilterBefore(new JwtAuthenticationFilter(myUserDetailService, jwtUtil),
				UsernamePasswordAuthenticationFilter.class);

	}

	/*
	 * //No Password Encoding "Text Only password Encoder"
	 * 
	 * @Bean public PasswordEncoder passwordEncorder() { return
	 * NoOpPasswordEncoder.getInstance(); }
	 */

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
