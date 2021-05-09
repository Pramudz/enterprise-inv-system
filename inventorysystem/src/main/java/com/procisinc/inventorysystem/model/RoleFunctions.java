package com.procisinc.inventorysystem.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

public class RoleFunctions {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long funtionId;
	
	private String functionName;
	
	@ManyToMany(mappedBy = "roleFunction" , cascade = {CascadeType.MERGE , CascadeType.PERSIST})
	private Set<Roles> roles;
	
	@ManyToOne
	@JoinColumn(nullable = true , referencedColumnName = "funtionId")
	private RoleFunctions mainRoleFuntion;
	
	
}
