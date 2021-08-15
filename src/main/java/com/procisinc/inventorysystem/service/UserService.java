package com.procisinc.inventorysystem.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.procisinc.inventorysystem.model.Users;
import com.procisinc.inventorysystem.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

	
	@Autowired
	private UserRepository userRepository;
	
	
	//get all users
	public Collection<Users> getAllUsers() {
		return userRepository.findAll();
	}
	
	
	// get user by id
	public ResponseEntity<?> getUserById(Integer id)  {
		Optional<Users> user = userRepository.findById(id);
		return user.map(response -> ResponseEntity.ok().body(response)).
				orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		
	}
	
	@Transactional
	public ResponseEntity<Users> addNewUser(Users user) throws URISyntaxException {
		
		try {
			Users result = userRepository.save(user);
			return ResponseEntity.created(new URI("/api/user/"+ result.getId())).body(result);
		} catch (Exception e) {
			
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			return null;
		}
		
	}


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		return new User("pramud","pramud@123", new ArrayList<>());
	}
	
}
