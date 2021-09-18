package com.procisinc.inventorysystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.procisinc.inventorysystem.model.Role;

@Component
public interface RolesRepository extends JpaRepository<Role, Integer> {

	
	
}
