package com.nguyenthanhnam.exercise03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nguyenthanhnam.exercise03.entity.AttributeValue;

import java.util.UUID;

@Repository
public interface AttributeValueRepository extends JpaRepository<AttributeValue, UUID> {
}
