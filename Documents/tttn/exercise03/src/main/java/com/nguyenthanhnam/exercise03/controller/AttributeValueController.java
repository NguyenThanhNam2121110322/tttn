package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.AttributeValue;
import com.nguyenthanhnam.exercise03.service.AttributeValueService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/attribute-values")
public class AttributeValueController {

    @Autowired
    private AttributeValueService attributeValueService;

    @GetMapping
    public ResponseEntity<List<AttributeValue>> getAllAttributeValues() {
        List<AttributeValue> attributeValues = attributeValueService.getAllAttributeValues();
        return ResponseEntity.ok(attributeValues);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AttributeValue> getAttributeValueById(@PathVariable("id") UUID attributeValueId) {
        AttributeValue attributeValue = attributeValueService.getAttributeValueById(attributeValueId);
        if (attributeValue != null) {
            return ResponseEntity.ok(attributeValue);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<AttributeValue> addAttributeValue(@RequestBody AttributeValue attributeValue) {
        AttributeValue addedAttributeValue = attributeValueService.addAttributeValue(attributeValue);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedAttributeValue);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AttributeValue> updateAttributeValue(@PathVariable("id") UUID attributeValueId,
            @RequestBody AttributeValue updatedAttributeValue) {
        AttributeValue attributeValue = attributeValueService.updateAttributeValue(attributeValueId,
                updatedAttributeValue);
        if (attributeValue != null) {
            return ResponseEntity.ok(attributeValue);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAttributeValue(@PathVariable("id") UUID attributeValueId) {
        attributeValueService.deleteAttributeValue(attributeValueId);
        return ResponseEntity.noContent().build();
    }
}
