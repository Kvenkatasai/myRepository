package com.HBS2.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.HBS2.Model.Customer;



public interface Repo extends JpaRepository<Customer , Integer>{
    @Query(value = "SELECT * FROM customer WHERE customer_email=?",nativeQuery = true)
	Customer findbyemail(String cMail1);

	

	
	

}
