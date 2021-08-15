package com.procisinc.inventorysystem.service;


import java.net.URI;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.procisinc.inventorysystem.model.Location;
import com.procisinc.inventorysystem.repository.LocationRepository;

@Service
public class LocationService {

	
	@Autowired
	LocationRepository locationRepo;
	
	
	public  Collection<Location> getAllLocation() {
		return locationRepo.findAll();
	}
	

	public ResponseEntity<?> getLocationById(Long id) {
		Optional<Location> location = locationRepo.findById(id);
		
		return location.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		
	}
	
	
	@Transactional
	public ResponseEntity<Location> addNewLocation(Location loc) {
		try {
			Location result = locationRepo.save(loc);
			return ResponseEntity.created(new URI("/api/user/"+ result.getId())).body(result);
		} catch(Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			return null;
		}
	}
	
}
