package com.procisinc.inventorysystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.procisinc.inventorysystem.model.Users;

@Component
public interface UserRepository extends JpaRepository<Users, Integer> {

	
	List<Users> findAll();
	
	Users findByUserName(String userName);
}
