package com.HBS2.Repository3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.HBS2.Model.Admin;

public interface Repo3 extends JpaRepository<Admin, Integer>{
	 @Query(value = "SELECT * FROM admin WHERE admin_email=?",nativeQuery = true)
		Admin findbyemail(String aMail1);

}
