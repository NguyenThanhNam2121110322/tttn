package com.nguyenthanhnam.exercise03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nguyenthanhnam.exercise03.entity.Shipping;

@Repository
public interface ShippingRepository extends JpaRepository<Shipping, Integer> {
}
