package com.procisinc.inventorysystem.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.procisinc.inventorysystem.model.Role;
import com.procisinc.inventorysystem.repository.RolesRepository;


@RestController
@RequestMapping("/api")
public class RoleController {
	
	@Autowired
	private RolesRepository rolesRepository;
	

	@GetMapping("/roles")
	Collection<Role> getRoles() {
		return rolesRepository.findAll();
	}
	
	@GetMapping("/role/{id}")
	ResponseEntity<?> getRole(@PathVariable Integer id) {
		Optional<Role> role = rolesRepository.findById(id);
		return role.map(response -> ResponseEntity.ok().body(response)).
				orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping("/role")
	ResponseEntity<Role> createRole(@Valid @RequestBody Role role) throws URISyntaxException {
		
		Role result = rolesRepository.save(role);
		
		return ResponseEntity.created(new URI("/api/role/"+ result.getRoleId())).body(result);
	
	
}
}