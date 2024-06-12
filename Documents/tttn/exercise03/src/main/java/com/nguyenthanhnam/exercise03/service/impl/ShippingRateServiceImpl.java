package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.ShippingRate;
import com.nguyenthanhnam.exercise03.repository.ShippingRateRepository;
import com.nguyenthanhnam.exercise03.service.ShippingRateService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ShippingRateServiceImpl implements ShippingRateService {

    @Autowired
    private ShippingRateRepository shippingRateRepository;

    @Override
    public ShippingRate addShippingRate(ShippingRate shippingRate) {
        // Đảm bảo rằng id của đối tượng ShippingRate là null trước khi lưu vào cơ sở dữ liệu
        shippingRate.setId(null);
        return shippingRateRepository.save(shippingRate);
    }

    @Override
    public ShippingRate getShippingRateById(UUID shippingRateId) {
        Optional<ShippingRate> optionalShippingRate = shippingRateRepository.findById(shippingRateId);
        return optionalShippingRate.orElse(null);
    }

    @Override
    public List<ShippingRate> getAllShippingRates() {
        return shippingRateRepository.findAll();
    }

    @Override
    public ShippingRate updateShippingRate(UUID shippingRateId, ShippingRate updatedShippingRate) {
        ShippingRate existingShippingRate = shippingRateRepository.findById(shippingRateId).orElse(null);

        if (existingShippingRate != null) {
            existingShippingRate.setShippingZone(updatedShippingRate.getShippingZone());
            existingShippingRate.setWeightUnit(updatedShippingRate.getWeightUnit());
            existingShippingRate.setMinValue(updatedShippingRate.getMinValue());
            existingShippingRate.setMaxValue(updatedShippingRate.getMaxValue());
            existingShippingRate.setNoMax(updatedShippingRate.isNoMax());
            existingShippingRate.setPrice(updatedShippingRate.getPrice());
            // Cập nhật các trường khác nếu cần

            return shippingRateRepository.save(existingShippingRate);
        }

        return null;
    }

    @Override
    public void deleteShippingRate(UUID shippingRateId) {
        shippingRateRepository.deleteById(shippingRateId);
    }
}
