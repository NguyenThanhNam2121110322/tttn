package com.nguyenthanhnam.exercise03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nguyenthanhnam.exercise03.entity.Gallery;
import com.nguyenthanhnam.exercise03.entity.Product;

import java.util.List;
import java.util.UUID;

@Repository
public interface GalleryRepository extends JpaRepository<Gallery, UUID> {
    List<Gallery> findByProductId(UUID productId);
}
