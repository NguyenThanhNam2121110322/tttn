package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.ShippingZone;
import com.nguyenthanhnam.exercise03.service.ShippingZoneService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/shipping-zones")
public class ShippingZoneController {

    @Autowired
    private ShippingZoneService shippingZoneService;

    @GetMapping
    public ResponseEntity<List<ShippingZone>> getAllShippingZones() {
        List<ShippingZone> shippingZones = shippingZoneService.getAllShippingZones();
        return ResponseEntity.ok(shippingZones);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShippingZone> getShippingZoneById(@PathVariable("id") Long shippingZoneId) {
        ShippingZone shippingZone = shippingZoneService.getShippingZoneById(shippingZoneId);
        if (shippingZone != null) {
            return ResponseEntity.ok(shippingZone);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<ShippingZone> addShippingZone(@RequestBody ShippingZone shippingZone) {
        ShippingZone addedShippingZone = shippingZoneService.addShippingZone(shippingZone);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedShippingZone);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShippingZone> updateShippingZone(@PathVariable("id") Long shippingZoneId,
                                                  @RequestBody ShippingZone updatedShippingZone) {
        ShippingZone shippingZone = shippingZoneService.updateShippingZone(shippingZoneId, updatedShippingZone);
        if (shippingZone != null) {
            return ResponseEntity.ok(shippingZone);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShippingZone(@PathVariable("id") Long shippingZoneId) {
        shippingZoneService.deleteShippingZone(shippingZoneId);
        return ResponseEntity.noContent().build();
    }
}
