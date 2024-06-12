package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Supplier;
import com.nguyenthanhnam.exercise03.service.SupplierService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/suppliers")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @GetMapping
    public ResponseEntity<List<Supplier>> getAllSuppliers() {
        List<Supplier> suppliers = supplierService.getAllSuppliers();
        return ResponseEntity.ok(suppliers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable("id") UUID supplierId) {
        Supplier supplier = supplierService.getSupplierById(supplierId);
        if (supplier != null) {
            return ResponseEntity.ok(supplier);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Supplier> addSupplier(@RequestBody Supplier supplier) {
        Supplier addedSupplier = supplierService.addSupplier(supplier);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedSupplier);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Supplier> updateSupplier(@PathVariable("id") UUID supplierId,
                                                  @RequestBody Supplier updatedSupplier) {
        Supplier supplier = supplierService.updateSupplier(supplierId, updatedSupplier);
        if (supplier != null) {
            return ResponseEntity.ok(supplier);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSupplier(@PathVariable("id") UUID supplierId) {
        supplierService.deleteSupplier(supplierId);
        return ResponseEntity.noContent().build();
    }
}
