package com.procisinc.inventorysystem.controller;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.procisinc.inventorysystem.model.Location;
import com.procisinc.inventorysystem.service.LocationService;


@RestController
@RequestMapping("/api")
public class LocationController {
	
	@Autowired
	LocationService locationService;
	
	@GetMapping("/locations")
	Collection<Location> getAllLocations() {
		return locationService.getAllLocation();
	}
	
	
	@GetMapping("/location/{id}")
	ResponseEntity<?> getLocationById(@PathVariable Long id) {
		return locationService.getLocationById(id);
	}
	
	@PostMapping("/location")
	ResponseEntity<Location> createNewLocation(@Valid @RequestBody Location loc) {
		return locationService.addNewLocation(loc);
	}

}
