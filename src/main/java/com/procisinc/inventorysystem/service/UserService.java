package com.procisinc.inventorysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.procisinc.inventorysystem.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	
	
	
}
