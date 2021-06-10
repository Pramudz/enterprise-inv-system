package com.procisinc.inventorysystem.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.procisinc.inventorysystem.model.Users;
import com.procisinc.inventorysystem.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {

	
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping("/users")
	Collection<Users> getAllUsers() {
		return userRepository.findAll();
	}
	
	
	@GetMapping("/user/{id}")
	ResponseEntity<?> getUser(@PathVariable Integer id) {
		Optional<Users> user = userRepository.findById(id);
		return user.map(response -> ResponseEntity.ok().body(response)).
				orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	
	@PostMapping("/user")
	ResponseEntity<Users> creatUser(@Valid @RequestBody Users user) throws URISyntaxException {
		Users result = userRepository.save(user);
		return ResponseEntity.created(new URI("/api/user/"+ result.getId())).body(result);
	}
	
	
}
