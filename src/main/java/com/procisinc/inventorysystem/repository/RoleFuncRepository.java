package com.procisinc.inventorysystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.procisinc.inventorysystem.model.Functions;


public interface RoleFuncRepository extends JpaRepository<Functions, Integer> {

}
