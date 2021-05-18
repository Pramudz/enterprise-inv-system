package com.procisinc.inventorysystem.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@Table(name ="rolefunctions")
public class RoleFunctions {


	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name ="func_id")
	 private Integer id;
	 	
	 @ManyToMany(mappedBy = "roleFunctions" , cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	 private Set<Role> rolelist;
	 
	 @Column(name ="role_function_name" , nullable =false, unique = true)
	 private String roleFunction;
	 
	 @ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name = "main_role_function", nullable = true, referencedColumnName = "func_id")
	 private RoleFunctions mainRoleFunction;
	 
	 @Column(name ="role_access")
	 private Boolean roleAcess;
	
	
}
