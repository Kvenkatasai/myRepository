package com.HBS2.Model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HotelBooking {
	@Id
	@Column(unique = true,nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private  int bookingId;
    private String customerName;
    private int customerPhone;
    private String customerAadhar;
    private String hotelName;
    private Date arrivalDate;
    private int NoOfDays;
	public HotelBooking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public HotelBooking(int bookingId, String customerName, int customerPhone, String customerAadhar, String hotelName,
			Date arrivalDate, int noOfDays) {
		super();
		this.bookingId = bookingId;
		this.customerName = customerName;
		this.customerPhone = customerPhone;
		this.customerAadhar = customerAadhar;
		this.hotelName = hotelName;
		this.arrivalDate = arrivalDate;
		NoOfDays = noOfDays;
	}
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	@Column
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	@Column
	public int getCustomerPhone() {
		return customerPhone;
	}
	public void setCustomerPhone(int customerPhone) {
		this.customerPhone = customerPhone;
	}
	@Column
	public String getCustomerAadhar() {
		return customerAadhar;
	}
	public void setCustomerAadhar(String customerAadhar) {
		this.customerAadhar = customerAadhar;
	}
	@Column
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	@Column
	public Date getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(Date arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	@Column
	public int getNoOfDays() {
		return NoOfDays;
	}
	public void setNoOfDays(int noOfDays) {
		NoOfDays = noOfDays;
	}
}
