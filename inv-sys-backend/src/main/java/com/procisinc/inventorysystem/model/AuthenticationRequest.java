package com.procisinc.inventorysystem.model;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AuthenticationRequest {

	private String username;
	private String password;
		
}
