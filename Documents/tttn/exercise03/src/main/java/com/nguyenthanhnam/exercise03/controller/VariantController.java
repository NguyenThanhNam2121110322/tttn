package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Variant;
import com.nguyenthanhnam.exercise03.service.VariantService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/variants")
public class VariantController {

    @Autowired
    private VariantService variantService;

    @GetMapping
    public ResponseEntity<List<Variant>> getAllVariants() {
        List<Variant> variants = variantService.getAllVariants();
        return ResponseEntity.ok(variants);
    }

    @PostMapping
    public ResponseEntity<Variant> addVariant(@RequestBody Variant variant) {
        Variant addedVariant = variantService.addVariant(variant);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedVariant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVariant(@PathVariable("id") UUID variantId) {
        variantService.deleteVariant(variantId);
        return ResponseEntity.noContent().build();
    }
}
