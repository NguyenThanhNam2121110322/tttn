package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.CustomerAddress;
import com.nguyenthanhnam.exercise03.service.CustomerAddressService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/customer-addresses")
public class CustomerAddressController {

    @Autowired
    private CustomerAddressService customerAddressService;

    @GetMapping
    public ResponseEntity<List<CustomerAddress>> getAllCustomerAddresses() {
        List<CustomerAddress> customerAddresses = customerAddressService.getAllCustomerAddresses();
        return ResponseEntity.ok(customerAddresses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerAddress> getCustomerAddressById(@PathVariable("id") UUID customerAddressId) {
        CustomerAddress customerAddress = customerAddressService.getCustomerAddressById(customerAddressId);
        if (customerAddress != null) {
            return ResponseEntity.ok(customerAddress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<CustomerAddress> addCustomerAddress(@RequestBody CustomerAddress customerAddress) {
        CustomerAddress addedCustomerAddress = customerAddressService.addCustomerAddress(customerAddress);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedCustomerAddress);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerAddress> updateCustomerAddress(@PathVariable("id") UUID customerAddressId,
            @RequestBody CustomerAddress updatedCustomerAddress) {
        CustomerAddress customerAddress = customerAddressService.updateCustomerAddress(customerAddressId,
                updatedCustomerAddress);
        if (customerAddress != null) {
            return ResponseEntity.ok(customerAddress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomerAddress(@PathVariable("id") UUID customerAddressId) {
        customerAddressService.deleteCustomerAddress(customerAddressId);
        return ResponseEntity.noContent().build();
    }
}
