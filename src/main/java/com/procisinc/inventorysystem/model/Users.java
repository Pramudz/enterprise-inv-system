package com.procisinc.inventorysystem.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;


@Entity
@Data
@NoArgsConstructor
@Table(name="users")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int user_id;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "user_name", unique = true)
	private String userName;

	@Column(name = "dob")
	private java.sql.Date date;

	@Column(name = "city")
	private String city;

	@Column(name = "contact_num")
	private int contactNum;

	@Column(name = "user_email", unique = true , nullable = true)
	private String userEmail;

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	@JoinTable(name = "user_role", joinColumns = {
			@JoinColumn(referencedColumnName = "user_id" , nullable = false) }, inverseJoinColumns = {
					@JoinColumn(referencedColumnName = "role_id", nullable = false) })
	private Set<Role> role;

	@Column(name = "password", nullable = true)
	private String password;

	@Column(name = "last_login")
	private java.sql.Date lastLogin;

	@Column(name = "status")
	private Boolean activeStat;
	
	@Column(name = "loginStatus",nullable = true)
	private Boolean loginStatus = false;
	
	@Column(name = "gender",nullable = true)
	private String gender;
}
