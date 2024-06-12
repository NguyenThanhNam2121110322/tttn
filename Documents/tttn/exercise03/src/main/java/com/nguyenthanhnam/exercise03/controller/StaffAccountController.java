package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.StaffAccount;
import com.nguyenthanhnam.exercise03.service.StaffAccountService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/staff-accounts")
public class StaffAccountController {

    @Autowired
    private StaffAccountService staffAccountService;

    @GetMapping
    public ResponseEntity<List<StaffAccount>> getAllStaffAccounts() {
        List<StaffAccount> staffAccounts = staffAccountService.getAllStaffAccounts();
        return ResponseEntity.ok(staffAccounts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StaffAccount> getStaffAccountById(@PathVariable("id") UUID staffAccountId) {
        StaffAccount staffAccount = staffAccountService.getStaffAccountById(staffAccountId);
        if (staffAccount != null) {
            return ResponseEntity.ok(staffAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<StaffAccount> addStaffAccount(@RequestBody StaffAccount staffAccount) {
        StaffAccount addedStaffAccount = staffAccountService.addStaffAccount(staffAccount);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedStaffAccount);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StaffAccount> updateStaffAccount(@PathVariable("id") UUID staffAccountId,
            @RequestBody StaffAccount updatedStaffAccount) {
        StaffAccount staffAccount = staffAccountService.updateStaffAccount(staffAccountId, updatedStaffAccount);
        if (staffAccount != null) {
            return ResponseEntity.ok(staffAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStaffAccount(@PathVariable("id") UUID staffAccountId) {
        staffAccountService.deleteStaffAccount(staffAccountId);
        return ResponseEntity.noContent().build();
    }
}
