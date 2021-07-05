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

import com.procisinc.inventorysystem.model.Functions;
import com.procisinc.inventorysystem.repository.RoleFuncRepository;

@RestController
@RequestMapping("api/")
public class RoleFunctionsController {

	
	@Autowired
	RoleFuncRepository roleFuncRepository;
	
	
	@GetMapping("/rolefunctions")
	Collection<Functions> getRoleFunctions(){	
		return roleFuncRepository.findAll();
	}
	
	@GetMapping("/rolefunction/{id}")
	ResponseEntity<Functions> getRoleFunction(@PathVariable Integer id) {
		Optional<Functions> result = roleFuncRepository.findById(id);
		return  result.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping("/rolefunction")
	ResponseEntity<Functions> saveRoleFunction(@Valid @RequestBody Functions roleFunctions) throws URISyntaxException {
		Functions result = roleFuncRepository.save(roleFunctions);
			
			return ResponseEntity.created(new URI("/api/rolefunction" + result.getFuncid())).body(result);
		
	}
}
