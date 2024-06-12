package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.VariantOptions;
import com.nguyenthanhnam.exercise03.service.VariantOptionsService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/variant-options")
public class VariantOptionsController {

    @Autowired
    private VariantOptionsService variantOptionsService;

    @GetMapping
    public ResponseEntity<List<VariantOptions>> getAllVariantOptions() {
        List<VariantOptions> variantOptionsList = variantOptionsService.getAllVariantOptions();
        return ResponseEntity.ok(variantOptionsList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VariantOptions> getVariantOptionsById(@PathVariable("id") UUID variantOptionsId) {
        VariantOptions variantOptions = variantOptionsService.getVariantOptionsById(variantOptionsId);
        if (variantOptions != null) {
            return ResponseEntity.ok(variantOptions);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<VariantOptions> addVariantOptions(@RequestBody VariantOptions variantOptions) {
        VariantOptions addedVariantOptions = variantOptionsService.addVariantOptions(variantOptions);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedVariantOptions);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VariantOptions> updateVariantOptions(@PathVariable("id") UUID variantOptionsId,
                                                               @RequestBody VariantOptions updatedVariantOptions) {
        VariantOptions variantOptions = variantOptionsService.updateVariantOptions(variantOptionsId, updatedVariantOptions);
        if (variantOptions != null) {
            return ResponseEntity.ok(variantOptions);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVariantOptions(@PathVariable("id") UUID variantOptionsId) {
        variantOptionsService.deleteVariantOptions(variantOptionsId);
        return ResponseEntity.noContent().build();
    }
}
