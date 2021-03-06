package com.procisinc.inventorysystem.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;


@Entity
@Data
@NoArgsConstructor
@Table(name="users")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Users implements Serializable , UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int id;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "user_name", unique = true)
	private String username;

	@Column(name = "dob")
	private java.sql.Date date;

	@Column(name = "city")
	private String city;

	@Column(name = "contact_num")
	private int contactNum;

	@Column(name = "user_email", unique = true , nullable = true)
	private String userEmail;
	
	@ManyToOne
	@JoinColumn(name="location_id")
	private Location location;

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	@JoinTable(name = "user_role", joinColumns = {
			@JoinColumn(referencedColumnName = "user_id" , nullable = false) }, inverseJoinColumns = {
					@JoinColumn(referencedColumnName = "role_id", nullable = false) })
	private List<Role> role;

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

	@Transient
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return role;
	}

	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	
	@Override
	public boolean isEnabled() {
		return true;
	}
}
