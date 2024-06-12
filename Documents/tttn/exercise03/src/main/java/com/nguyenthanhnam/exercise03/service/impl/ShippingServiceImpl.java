package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Shipping;
import com.nguyenthanhnam.exercise03.repository.ShippingRepository;
import com.nguyenthanhnam.exercise03.service.ShippingService;

import java.util.List;
import java.util.Optional;

@Service
public class ShippingServiceImpl implements ShippingService {

    @Autowired
    private ShippingRepository shippingRepository;

    @Override
    public Shipping addShipping(Shipping shipping) {
        return shippingRepository.save(shipping);
    }

    @Override
    public Shipping getShippingById(int shippingId) {
        Optional<Shipping> optionalShipping = shippingRepository.findById(shippingId);
        return optionalShipping.orElse(null);
    }

    @Override
    public List<Shipping> getAllShippings() {
        return shippingRepository.findAll();
    }

    @Override
    public Shipping updateShipping(int shippingId, Shipping updatedShipping) {
        Shipping existingShipping = shippingRepository.findById(shippingId).orElse(null);

        if (existingShipping != null) {
            existingShipping.setName(updatedShipping.getName());
            existingShipping.setActive(updatedShipping.isActive());
            existingShipping.setIconPath(updatedShipping.getIconPath());
            // You may need to handle other relationships here
            return shippingRepository.save(existingShipping);
        }

        return null;
    }

    @Override
    public void deleteShipping(int shippingId) {
        shippingRepository.deleteById(shippingId);
    }
}
