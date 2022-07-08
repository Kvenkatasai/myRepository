package com.HBS2.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Customer {
	@Id
	@Column(unique = true,nullable = false)
	 @GeneratedValue(strategy = GenerationType.AUTO)
	private int CustomerId;
	private String customerName;
	private String customerPhone;
	private String customerEmail;
	private String customerPassword;
	private double customerAadharNo;
	private int customerWalletMoney;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(int customerId, String customerName, String customerPhone, String customerEmail,
			String customerPassword, int customerAadharNo, int customerWalletMoney) {
		super();
		CustomerId = customerId;
		this.customerName = customerName;
		this.customerPhone = customerPhone;
		this.customerEmail = customerEmail;
		this.customerPassword = customerPassword;
		this.customerAadharNo = customerAadharNo;
		this.customerWalletMoney = customerWalletMoney;
	}
	public int getCustomerId() {
		return CustomerId;
	}
	public void setCustomerId(int customerId) {
		CustomerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerPhone() {
		return customerPhone;
	}
	public void setCustomerPhone(String customerPhone) {
		this.customerPhone = customerPhone;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	public String getCustomerPassword() {
		return customerPassword;
	}
	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}
	public double getCustomerAadharNo() {
		return customerAadharNo;
	}
	public void setCustomerAadharNo(double customerAadharNo) {
		this.customerAadharNo = customerAadharNo;
	}
	public int getCustomerWalletMoney() {
		return customerWalletMoney;
	}
	public void setCustomerWalletMoney(int customerWalletMoney) {
		this.customerWalletMoney = customerWalletMoney;
	}
}