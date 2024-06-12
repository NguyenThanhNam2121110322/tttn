package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Coupon;
import com.nguyenthanhnam.exercise03.service.CouponService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/coupons")
public class CouponController {

    @Autowired
    private CouponService couponService;

    @GetMapping
    public ResponseEntity<List<Coupon>> getAllCoupons() {
        List<Coupon> coupons = couponService.getAllCoupons();
        return ResponseEntity.ok(coupons);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Coupon> getCouponById(@PathVariable("id") UUID couponId) {
        Coupon coupon = couponService.getCouponById(couponId);
        if (coupon != null) {
            return ResponseEntity.ok(coupon);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Coupon> addCoupon(@RequestBody Coupon coupon) {
        Coupon addedCoupon = couponService.addCoupon(coupon);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedCoupon);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Coupon> updateCoupon(@PathVariable("id") UUID couponId, @RequestBody Coupon updatedCoupon) {
        Coupon coupon = couponService.updateCoupon(couponId, updatedCoupon);
        if (coupon != null) {
            return ResponseEntity.ok(coupon);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCoupon(@PathVariable("id") UUID couponId) {
        couponService.deleteCoupon(couponId);
        return ResponseEntity.noContent().build();
    }
}
