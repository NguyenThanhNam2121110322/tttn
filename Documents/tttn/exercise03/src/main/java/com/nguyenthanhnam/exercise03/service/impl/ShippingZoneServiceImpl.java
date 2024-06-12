package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.ShippingZone;
import com.nguyenthanhnam.exercise03.repository.ShippingZoneRepository;
import com.nguyenthanhnam.exercise03.service.ShippingZoneService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ShippingZoneServiceImpl implements ShippingZoneService {

    @Autowired
    private ShippingZoneRepository shippingZoneRepository;

    @Override
    public ShippingZone addShippingZone(ShippingZone shippingZone) {
        // Đảm bảo rằng id của đối tượng ShippingZone là null trước khi lưu vào cơ sở dữ liệu
        shippingZone.setId(null);
        return shippingZoneRepository.save(shippingZone);
    }

    @Override
    public ShippingZone getShippingZoneById(Long shippingZoneId) {
        Optional<ShippingZone> optionalShippingZone = shippingZoneRepository.findById(shippingZoneId);
        return optionalShippingZone.orElse(null);
    }

    @Override
    public List<ShippingZone> getAllShippingZones() {
        return shippingZoneRepository.findAll();
    }

    @Override
    public ShippingZone updateShippingZone(Long shippingZoneId, ShippingZone updatedShippingZone) {
        ShippingZone existingShippingZone = shippingZoneRepository.findById(shippingZoneId).orElse(null);

        if (existingShippingZone != null) {
            existingShippingZone.setName(updatedShippingZone.getName());
            existingShippingZone.setDisplayName(updatedShippingZone.getDisplayName());
            existingShippingZone.setActive(updatedShippingZone.isActive());
            existingShippingZone.setFreeShipping(updatedShippingZone.isFreeShipping());
            existingShippingZone.setRateType(updatedShippingZone.getRateType());
            // Cập nhật các trường khác nếu cần

            return shippingZoneRepository.save(existingShippingZone);
        }

        return null;
    }

    @Override
    public void deleteShippingZone(Long shippingZoneId) {
        shippingZoneRepository.deleteById(shippingZoneId);
    }
}
