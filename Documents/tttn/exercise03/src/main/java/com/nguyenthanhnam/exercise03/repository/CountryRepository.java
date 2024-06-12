package com.nguyenthanhnam.exercise03.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhnam.exercise03.entity.Country;

import java.util.UUID;

public interface CountryRepository extends JpaRepository<Country, Long> {
    // Bạn có thể thêm các phương thức truy vấn tùy chỉnh nếu cần
}
