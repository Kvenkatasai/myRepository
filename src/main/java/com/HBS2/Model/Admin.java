package com.HBS2.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
	@Id
	@Column(unique = true,nullable = false)
	 @GeneratedValue(strategy = GenerationType.AUTO)
	private int adminId;
	private String adminName;
	private String adminEmail;
	private String adminPassword;
	private int adminPhone;
	
    public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Admin(int adminId, String adminName, String adminEmail, String adminPassword, int adminPhone) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminPassword = adminPassword;
		this.adminPhone = adminPhone;
	}
	public int getAdminId() {
		return adminId;
	}
	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}
	@Column
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	@Column
	public String getAdminEmail() {
		return adminEmail;
	}
	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}
	@Column
	public String getAdminPassword() {
		return adminPassword;
	}
	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}
	@Column
	public int getAdminPhone() {
		return adminPhone;
	}
	public void setAdminPhone(int adminPhone) {
		this.adminPhone = adminPhone;
	}
	
   
}
