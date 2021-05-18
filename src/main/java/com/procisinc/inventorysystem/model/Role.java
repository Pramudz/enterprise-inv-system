package com.procisinc.inventorysystem.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
@Table(name="role")
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "role_id")
	private int roleId;

	@ManyToMany(mappedBy = "role", cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	private Set<Users> users;

	
	@Column(name = "role_name", nullable = false , unique = true)
	private String roleName;

	@Column(name = "role_desc", nullable = true)
	private String roleDesc;
	
	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	@JoinTable(name="role_and_functions" , joinColumns = {
			@JoinColumn(referencedColumnName = "role_id" , nullable = false) }, inverseJoinColumns = {
					@JoinColumn(referencedColumnName  ="func_id" , nullable = false)
	})
	private Set<RoleFunctions> roleFunctions;
	
	
	
}
