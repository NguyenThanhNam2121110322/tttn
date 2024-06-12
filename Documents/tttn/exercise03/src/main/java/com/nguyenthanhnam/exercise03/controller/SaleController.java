package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Sale;
import com.nguyenthanhnam.exercise03.service.SaleService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping
    public ResponseEntity<List<Sale>> getAllSales() {
        List<Sale> sales = saleService.getAllSales();
        return ResponseEntity.ok(sales);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sale> getSaleById(@PathVariable("id") UUID saleId) {
        Sale sale = saleService.getSaleById(saleId);
        if (sale != null) {
            return ResponseEntity.ok(sale);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Sale> addSale(@RequestBody Sale sale) {
        Sale addedSale = saleService.addSale(sale);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedSale);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sale> updateSale(@PathVariable("id") UUID saleId, @RequestBody Sale updatedSale) {
        Sale sale = saleService.updateSale(saleId, updatedSale);
        if (sale != null) {
            return ResponseEntity.ok(sale);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSale(@PathVariable("id") UUID saleId) {
        saleService.deleteSale(saleId);
        return ResponseEntity.noContent().build();
    }
}
