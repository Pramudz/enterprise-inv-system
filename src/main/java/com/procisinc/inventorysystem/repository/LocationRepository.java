package com.procisinc.inventorysystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.procisinc.inventorysystem.model.Location;

@Component
public interface LocationRepository extends JpaRepository<Location, Long> {

}
