package com.nguyenthanhnam.exercise03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nguyenthanhnam.exercise03.entity.Sale;

import java.util.UUID;

@Repository
public interface SaleRepository extends JpaRepository<Sale, UUID> {
}
