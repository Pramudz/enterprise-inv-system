package com.procisinc.inventorysystem.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name="roles")
public class Roles {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long roleId;
	
	private String roleName;
	
	@ManyToMany(mappedBy = "role", cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	private Set<Users> users;
	
	@ManyToMany(cascade = {CascadeType.MERGE , CascadeType.PERSIST})
	@JoinTable(joinColumns = {@JoinColumn(referencedColumnName = "roleId" , nullable = false)} , 
	inverseJoinColumns = {@JoinColumn(referencedColumnName = "funtionId" , nullable = false)}
	)
	private Set<RoleFunctions> roleFunction;
	
	
	
}
