package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.ShippingRate;
import com.nguyenthanhnam.exercise03.service.ShippingRateService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/shipping-rates")
public class ShippingRateController {

    @Autowired
    private ShippingRateService shippingRateService;

    @GetMapping
    public ResponseEntity<List<ShippingRate>> getAllShippingRates() {
        List<ShippingRate> shippingRates = shippingRateService.getAllShippingRates();
        return ResponseEntity.ok(shippingRates);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShippingRate> getShippingRateById(@PathVariable("id") UUID shippingRateId) {
        ShippingRate shippingRate = shippingRateService.getShippingRateById(shippingRateId);
        if (shippingRate != null) {
            return ResponseEntity.ok(shippingRate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<ShippingRate> addShippingRate(@RequestBody ShippingRate shippingRate) {
        ShippingRate addedShippingRate = shippingRateService.addShippingRate(shippingRate);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedShippingRate);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShippingRate> updateShippingRate(@PathVariable("id") UUID shippingRateId,
                                                  @RequestBody ShippingRate updatedShippingRate) {
        ShippingRate shippingRate = shippingRateService.updateShippingRate(shippingRateId, updatedShippingRate);
        if (shippingRate != null) {
            return ResponseEntity.ok(shippingRate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShippingRate(@PathVariable("id") UUID shippingRateId) {
        shippingRateService.deleteShippingRate(shippingRateId);
        return ResponseEntity.noContent().build();
    }
}
