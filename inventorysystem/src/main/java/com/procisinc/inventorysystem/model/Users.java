package com.procisinc.inventorysystem.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;

public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;

	
	private String firstName;

	
	private String lastName;

	@Column(name = "user_name", unique = true)
	private String userName;

	private java.sql.Date date;


	private String address;


	private int contactNum;

	@Column(unique = true , nullable = true)
	private String userEmail;

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	@JoinTable(joinColumns = {
	@JoinColumn(referencedColumnName = "userId" , nullable = false) },
	inverseJoinColumns = {@JoinColumn(referencedColumnName = "roleId", nullable = false) })
	private Set<Roles> role;

	
	private String password;


	private java.sql.Date lastLogin;

	private boolean activeStatus;
	
	private boolean loginStatus = false;

}
