package com.procisinc.inventorysystem.controller;

import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.procisinc.inventorysystem.model.Users;
import com.procisinc.inventorysystem.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	
	@GetMapping("/users")
	Collection<Users> getAllUsers() {
		return userService.getAllUsers();
	}
	
	
	@GetMapping("/user/{id}")
	ResponseEntity<?> getUser(@PathVariable Integer id) {
		return userService.getUserById(id);
	}
	
	@PostMapping("/user")
	ResponseEntity<Users> creatUser(@Valid @RequestBody Users user) throws URISyntaxException {
		return userService.addNewUser(user);
	}
	
	
	
}
