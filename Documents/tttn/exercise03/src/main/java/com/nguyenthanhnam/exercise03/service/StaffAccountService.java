package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.Customer;
import com.nguyenthanhnam.exercise03.entity.StaffAccount;

public interface StaffAccountService {
    StaffAccount addStaffAccount(StaffAccount staffAccount);

    StaffAccount getStaffAccountById(UUID staffAccountId);

    List<StaffAccount> getAllStaffAccounts();

    StaffAccount updateStaffAccount(UUID staffAccountId, StaffAccount updatedStaffAccount);

    void deleteStaffAccount(UUID staffAccountId);

    StaffAccount getStaffByEmail(String email);
}
