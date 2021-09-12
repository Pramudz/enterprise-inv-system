package com.procisinc.inventorysystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.procisinc.inventorysystem.repository.UserRepository;

@SpringBootApplication
public class InventorysystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventorysystemApplication.class, args);
	}

}
