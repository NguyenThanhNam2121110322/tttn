package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Shipping;
import com.nguyenthanhnam.exercise03.service.ShippingService;

import java.util.List;

@RestController
@RequestMapping("api/shippings")
public class ShippingController {

    @Autowired
    private ShippingService shippingService;

    @GetMapping
    public ResponseEntity<List<Shipping>> getAllShippings() {
        List<Shipping> shippings = shippingService.getAllShippings();
        return ResponseEntity.ok(shippings);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shipping> getShippingById(@PathVariable("id") int shippingId) {
        Shipping shipping = shippingService.getShippingById(shippingId);
        if (shipping != null) {
            return ResponseEntity.ok(shipping);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Shipping> addShipping(@RequestBody Shipping shipping) {
        Shipping addedShipping = shippingService.addShipping(shipping);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedShipping);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shipping> updateShipping(@PathVariable("id") int shippingId,
            @RequestBody Shipping updatedShipping) {
        Shipping shipping = shippingService.updateShipping(shippingId, updatedShipping);
        if (shipping != null) {
            return ResponseEntity.ok(shipping);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShipping(@PathVariable("id") int shippingId) {
        shippingService.deleteShipping(shippingId);
        return ResponseEntity.noContent().build();
    }
}
