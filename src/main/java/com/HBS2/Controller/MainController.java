package com.HBS2.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HBS2.Model.Admin;
import com.HBS2.Model.Customer;
import com.HBS2.Model.Hotel;
import com.HBS2.Model.HotelBooking;
import com.HBS2.Model.Receptionist;
import com.HBS2.Service.Service1;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
	@Autowired
	private Service1 s;
	
	@RequestMapping(path="/welcome")
	public String welcome() {
		return "welcome to spring boot";
	}
	
	@PostMapping(path="/posting")
	
	public String addDetailes(@RequestBody Customer customer) {
		 s.addDetailes(customer) ;
		 return "Hiii"+"  " +customer.getCustomerName()+"  "+"Your Registration Is Successfully Completed";
	}
	@PostMapping(path="/hbpost")
	public String addBookingDetailes(@RequestBody HotelBooking hb) {
		 s.addBookingDetailes(hb) ;
		 return "Hiii Your Booking Is Successfully Completed";
	}
	
	
   @PostMapping(path="/aposting")
   public String addadminDetailes(@RequestBody Admin admin) {
		 s.addDetailes(admin) ;
		 return "Hiii"+"  " +admin.getAdminName()+"  "+"Your Registration Is Successfully Completed";
	}
	
	@PostMapping(path="/rposting")
	public String addRDetailes(@RequestBody Receptionist recep) {
		 s.addRDetailes(recep) ;
		 return "Hiii"+"  " +recep.getReceptionistName()+"  "+"Your Registration Is Successfully Completed";
	}
	@GetMapping(path="/get")
	public List<Customer> getDetailes() {
		
		return s.getDetailes();
	}
	@GetMapping(path="/hget")
	public List<Hotel> getAllHotels() {
		return s.getAllHotels();
	}
	@GetMapping(path="/bhget")
	public List<HotelBooking> getBookingDetailes() {
		return s.getBookingDetailes();
	}
	
	@PostMapping(path="/login")
	public int login(@RequestBody Customer cust) {
		int x=s.login(cust);
		if(x==1) {
			return 1;
		}
		else {
			return 0;
		}
	}	
	@PostMapping(path="/alogin")
	public int adminlogin(@RequestBody Admin admin) {
		int x=s.adminlogin(admin);
		if(x==1) {
			return 1;
		}
		else {
			return 0;
		}
		
	}
	
	@PostMapping(path="/rlogin")
	public int adminlogin(@RequestBody Receptionist recep) {
		int x=s.recepLogin(recep);
		if(x==1) {
			return 1;
		}
		else {
			return 0;
		}
		
	}
	
	@PostMapping(path="/hposting")
	public String addHotel(@RequestBody Hotel hotel) {
		s.addHotel(hotel);
		return "Successfully added Hotel"+" "+hotel.getHotelName();
	}
	@DeleteMapping(path="/delete/{id}")
	public List<Customer> deleteCustomer(@PathVariable int id) {
		return s.deletCustomer(id);
	}
	@DeleteMapping(path="hdelete/{id}")
	public String deleteHotels(@PathVariable int id) {
		return s.deleteHotels(id);
	}
	@DeleteMapping(path="bdelete/{id}")
	public String cancelBooking(@PathVariable int id) {
		return s.cancelBooking(id);
	}
	
	@PutMapping(path="/put")
	public Customer update( @RequestBody Customer cust) {
		return s.update(cust);
	}
	
	@PutMapping(path="/hput")
	public String update( @RequestBody Hotel hotel) {
		return s.update(hotel);
	}
	

}
