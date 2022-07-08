package com.HBS2.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hotel {
	@Id
	@Column(unique = true,nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int  hotelId;
	private String hotelName;
	private String hotelAddress;
	private String hotelType;
	public Hotel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Hotel(int hotelId, String hotelName, String hotelAddress, String hotelType) {
		super();
		this.hotelId = hotelId;
		this.hotelName = hotelName;
		this.hotelAddress = hotelAddress;
		this.hotelType = hotelType;
	}
	
	public int getHotelId() {
		return hotelId;
	}
	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}
	@Column
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	@Column
	public String getHotelAddress() {
		return hotelAddress;
	}
	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}
	@Column
	public String getHotelType() {
		return hotelType;
	}
	public void setHotelType(String hotelType) {
		this.hotelType = hotelType;
	}
}
