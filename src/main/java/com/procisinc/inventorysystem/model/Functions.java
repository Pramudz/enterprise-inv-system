package com.procisinc.inventorysystem.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "functions")
public class Functions {

	@Id
	@Column(name = "func_id")
	private String funcid;
	@Column(name = "func_name")
	private String funcname;
	@Column(name = "isnode")
	private boolean isnode;
	@Column(name = "parntid")
	private String parntid;
//	 @ManyToOne(cascade = CascadeType.ALL)
//	 @JoinColumn(name = "main_role_function", nullable = true, referencedColumnName = "func_id")
//	 private Functions mainRoleFunction;

}
