package com.procisinc.inventorysystem.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import com.procisinc.inventorysystem.model.Users;

@Component
public interface UserRepository extends JpaRepository<Users, Integer> {

	@EntityGraph(attributePaths = { "role"})
	public List<Users> findAll();

	@Query("SELECT e FROM Users e JOIN FETCH e.role where e.username= ?1")
	public Optional<Users> findByUserName(String username);
}
