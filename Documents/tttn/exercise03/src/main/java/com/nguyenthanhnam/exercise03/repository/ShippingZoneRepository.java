package com.nguyenthanhnam.exercise03.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhnam.exercise03.entity.ShippingZone;

import java.util.UUID;

public interface ShippingZoneRepository extends JpaRepository<ShippingZone, Long> {
    // Bạn có thể thêm các phương thức truy vấn tùy chỉnh nếu cần
}
