package com.HBS2.Repository4;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HBS2.Model.HotelBooking;

public interface Repo4 extends JpaRepository<HotelBooking, Integer> {

}
