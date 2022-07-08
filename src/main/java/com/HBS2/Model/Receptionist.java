package com.HBS2.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Receptionist {
	@Id
	@Column(unique = true,nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int receptionistId;
	private String receptionistName;
	private int receptionistPhone;
	private String receptionistEmail;
	private String receptionistPassword;
	public Receptionist(int receptionistId, String receptionistName, int receptionistPhone, String receptionistEmail,
			String receptionistPassword) {
		super();
		this.receptionistId = receptionistId;
		this.receptionistName = receptionistName;
		this.receptionistPhone = receptionistPhone;
		this.receptionistEmail = receptionistEmail;
		this.receptionistPassword = receptionistPassword;
	}
	public Receptionist() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getReceptionistId() {
		return receptionistId;
	}
	public void setReceptionistId(int receptionistId) {
		this.receptionistId = receptionistId;
	}
	@Column
	public String getReceptionistName() {
		return receptionistName;
	}
	public void setReceptionistName(String receptionistName) {
		this.receptionistName = receptionistName;
	}
	@Column
	public int getReceptionistPhone() {
		return receptionistPhone;
	}
	public void setReceptionistPhone(int receptionistPhone) {
		this.receptionistPhone = receptionistPhone;
	}
	@Column
	public String getReceptionistEmail() {
		return receptionistEmail;
	}
	public void setReceptionistEmail(String receptionistEmail) {
		this.receptionistEmail = receptionistEmail;
	}
	@Column
	public String getReceptionistPassword() {
		return receptionistPassword;
	}
	public void setReceptionistPassword(String receptionistPassword) {
		this.receptionistPassword = receptionistPassword;
	}
	
	
	

}
