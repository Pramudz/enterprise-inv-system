package com.procisinc.inventorysystem.controller;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "*")
public class UserController {

	
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping("/users")
	Collection<Users> getAllUsers() {
		return userRepository.findAll();
	}
	
	
	@PostMapping("/saveuser")
	public Users saveUser(@RequestBody Users entity) {
		
		return userRepository.save(entity);
	}
	
	@GetMapping("/users/{id}")
	public Users getUser(@PathVariable Integer id) {
		return userRepository.findById(id).orElse(null);
	}	
	
	
}
