package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.StaffAccount;
import com.nguyenthanhnam.exercise03.repository.StaffAccountRepository;
import com.nguyenthanhnam.exercise03.service.StaffAccountService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StaffAccountServiceImpl implements StaffAccountService {

    @Autowired
    private StaffAccountRepository staffAccountRepository;

    @Override
    public StaffAccount addStaffAccount(StaffAccount staffAccount) {
        return staffAccountRepository.save(staffAccount);
    }

    @Override
    public StaffAccount getStaffAccountById(UUID staffAccountId) {
        Optional<StaffAccount> optionalStaffAccount = staffAccountRepository.findById(staffAccountId);
        return optionalStaffAccount.orElse(null);
    }

    @Override
    public List<StaffAccount> getAllStaffAccounts() {
        return staffAccountRepository.findAll();
    }

    @Override
    public StaffAccount updateStaffAccount(UUID staffAccountId, StaffAccount updatedStaffAccount) {
        StaffAccount existingStaffAccount = staffAccountRepository.findById(staffAccountId).orElse(null);

        if (existingStaffAccount != null) {
            existingStaffAccount.setFirstName(updatedStaffAccount.getFirstName());
            existingStaffAccount.setLastName(updatedStaffAccount.getLastName());
            // Set other attributes as needed
            return staffAccountRepository.save(existingStaffAccount);
        }

        return null;
    }

    @Override
    public void deleteStaffAccount(UUID staffAccountId) {
        staffAccountRepository.deleteById(staffAccountId);
    }
}
