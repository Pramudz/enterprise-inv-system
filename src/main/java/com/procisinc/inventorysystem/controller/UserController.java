package com.procisinc.inventorysystem.controller;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	
}
