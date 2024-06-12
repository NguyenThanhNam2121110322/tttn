package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Attribute;
import com.nguyenthanhnam.exercise03.service.AttributeService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/attributes")
public class AttributeController {

    @Autowired
    private AttributeService attributeService;

    @GetMapping
    public ResponseEntity<List<Attribute>> getAllAttributes() {
        List<Attribute> attributes = attributeService.getAllAttributes();
        return ResponseEntity.ok(attributes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Attribute> getAttributeById(@PathVariable("id") UUID attributeId) {
        Attribute attribute = attributeService.getAttributeById(attributeId);
        if (attribute != null) {
            return ResponseEntity.ok(attribute);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Attribute> addAttribute(@RequestBody Attribute attribute) {
        Attribute addedAttribute = attributeService.addAttribute(attribute);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedAttribute);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Attribute> updateAttribute(@PathVariable("id") UUID attributeId,
            @RequestBody Attribute updatedAttribute) {
        Attribute attribute = attributeService.updateAttribute(attributeId, updatedAttribute);
        if (attribute != null) {
            return ResponseEntity.ok(attribute);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAttribute(@PathVariable("id") UUID attributeId) {
        attributeService.deleteAttribute(attributeId);
        return ResponseEntity.noContent().build();
    }
}
