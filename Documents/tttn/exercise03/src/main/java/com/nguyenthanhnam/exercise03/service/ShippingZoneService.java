package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.ShippingZone;

public interface ShippingZoneService {
    ShippingZone addShippingZone(ShippingZone shippingZone);
    
    ShippingZone getShippingZoneById(Long shippingZoneId);
    
    List<ShippingZone> getAllShippingZones();
    
    ShippingZone updateShippingZone(Long shippingZoneId, ShippingZone updatedShippingZone);
    
    void deleteShippingZone(Long shippingZoneId);
}
    