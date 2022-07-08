package com.HBS2.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.HBS2.Model.Admin;
import com.HBS2.Model.Customer;
import com.HBS2.Model.Hotel;
import com.HBS2.Model.HotelBooking;
import com.HBS2.Model.Receptionist;
import com.HBS2.Repository.Repo;
import com.HBS2.Repository1.Repo1;
import com.HBS2.Repository2.Repo2;
import com.HBS2.Repository3.Repo3;
import com.HBS2.Repository4.Repo4;
@Service
public class Service1 {
	@Autowired
	private Repo r;
	@Autowired
	private Repo1 r1;
	@Autowired
	private Repo2 r2;
	@Autowired
	private Repo3 r3;
	@Autowired
	private Repo4 r4;
	

	public Customer addDetailes(Customer customer) {
		
		return r.save(customer);
		
	}
	
   public HotelBooking addBookingDetailes(HotelBooking hb) {
		return r4.save(hb);
		
	}
	
	public Admin addDetailes(Admin admin) {
		return r3.save(admin);
		
	}
	
   public Receptionist addRDetailes(Receptionist recep) {
		
		return r1.save(recep);
		
	}

	public List<Customer> getDetailes() {
		return r.findAll();
		
	}

	public int login( Customer cust) {
		int result=0;
		String cMail1=cust.getCustomerEmail();
		String cPass1=cust.getCustomerPassword();
		
		Customer c=r.findbyemail(cMail1);
		String pass=c.getCustomerPassword();
		boolean r2=cPass1.equals(pass);
		if(r2==true)
		{
			return result=1;
		}
		else { return result=0;}
		
		
	}
	public int adminlogin( Admin admin) {
		int result=0;
		String aMail1=admin.getAdminEmail();
		String aPass1=admin.getAdminPassword();
		
		Admin a=r3.findbyemail(aMail1);
		String pass=a.getAdminPassword();
		boolean r2=aPass1.equals(pass);
		if(r2==true)
		{
			return result=1;
		}
		else { return result=0;}
		
		
	}
	
public int recepLogin(Receptionist recep) {
	int result=0;
	String rMail1=recep.getReceptionistEmail();
	String rPass1=recep.getReceptionistPassword();
	
	Receptionist r=r1.findbyemail(rMail1);
	String pass=r.getReceptionistPassword();
	boolean r2=rPass1.equals(pass);
	if(r2==true)
	{
		return result=1;
	}
	else {
		return 0;
	}
	}
	
	public Hotel addHotel(Hotel hotel) {
		return r2.save(hotel);
		
	}
	public List<Customer> deletCustomer(int id) {
		 r.deleteById(id);
		 return r.findAll();
		
	}
    public String deleteHotels(int id) {
        r2.deleteById(id);
		 return "hotel removed Successfully";
		
	}
    
    public String cancelBooking(int id) {
		r4.deleteById(id);
		return "Your booking is Cancelled";
	}
	public Customer update(Customer cust) {
		return r.save(cust);
		
	}
	public List<Hotel> getAllHotels() {
		
		return r2.findAll();
	}
	public String update(Hotel hotel) {
		r2.save(hotel);
		return "Updated the Hotel Detailes Successfully" ;
	}

	public List<HotelBooking> getBookingDetailes() {
		return r4.findAll();
		
	}

	
	
	
	
}


