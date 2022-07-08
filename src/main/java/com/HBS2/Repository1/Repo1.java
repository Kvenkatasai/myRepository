package com.HBS2.Repository1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.HBS2.Model.Admin;
import com.HBS2.Model.Receptionist;

public interface Repo1 extends JpaRepository<Receptionist, Integer>{
	@Query(value = "SELECT * FROM receptionist WHERE receptionist_email=?",nativeQuery = true)
	Receptionist findbyemail(String rMail1);
}
