package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Coupon;
import com.nguyenthanhnam.exercise03.repository.CouponRepository;
import com.nguyenthanhnam.exercise03.service.CouponService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CouponServiceImpl implements CouponService {

    @Autowired
    private CouponRepository couponRepository;

    @Override
    public Coupon addCoupon(Coupon coupon) {
        return couponRepository.save(coupon);
    }

    @Override
    public Coupon getCouponById(UUID couponId) {
        Optional<Coupon> optionalCoupon = couponRepository.findById(couponId);
        return optionalCoupon.orElse(null);
    }

    @Override
    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }

    @Override
    public Coupon updateCoupon(UUID couponId, Coupon updatedCoupon) {
        Coupon existingCoupon = couponRepository.findById(couponId).orElse(null);

        if (existingCoupon != null) {
            existingCoupon.setCode(updatedCoupon.getCode());
            existingCoupon.setDiscountValue(updatedCoupon.getDiscountValue());
            existingCoupon.setDiscountType(updatedCoupon.getDiscountType());
            existingCoupon.setTimesUsed(updatedCoupon.getTimesUsed());
            existingCoupon.setMaxUsage(updatedCoupon.getMaxUsage());
            existingCoupon.setCouponStartDate(updatedCoupon.getCouponStartDate());
            existingCoupon.setCouponEndDate(updatedCoupon.getCouponEndDate());
            // You may need to handle productCoupons and orders here
            return couponRepository.save(existingCoupon);
        }

        return null;
    }

    @Override
    public void deleteCoupon(UUID couponId) {
        couponRepository.deleteById(couponId);
    }
}
