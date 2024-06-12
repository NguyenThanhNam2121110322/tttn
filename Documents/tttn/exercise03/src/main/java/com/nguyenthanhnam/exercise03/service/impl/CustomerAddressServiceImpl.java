package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.CustomerAddress;
import com.nguyenthanhnam.exercise03.repository.CustomerAddressRepository;
import com.nguyenthanhnam.exercise03.service.CustomerAddressService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerAddressServiceImpl implements CustomerAddressService {

    @Autowired
    private CustomerAddressRepository customerAddressRepository;

    @Override
    public CustomerAddress addCustomerAddress(CustomerAddress customerAddress) {
        return customerAddressRepository.save(customerAddress);
    }

    @Override
    public CustomerAddress getCustomerAddressById(UUID customerAddressId) {
        Optional<CustomerAddress> optionalCustomerAddress = customerAddressRepository.findById(customerAddressId);
        return optionalCustomerAddress.orElse(null);
    }

    @Override
    public List<CustomerAddress> getAllCustomerAddresses() {
        return customerAddressRepository.findAll();
    }

    @Override
    public CustomerAddress updateCustomerAddress(UUID customerAddressId, CustomerAddress updatedCustomerAddress) {
        CustomerAddress existingCustomerAddress = customerAddressRepository.findById(customerAddressId).orElse(null);

        if (existingCustomerAddress != null) {
            existingCustomerAddress.setCustomer(updatedCustomerAddress.getCustomer());
            existingCustomerAddress.setAddressLine1(updatedCustomerAddress.getAddressLine1());
            existingCustomerAddress.setAddressLine2(updatedCustomerAddress.getAddressLine2());
            existingCustomerAddress.setPostalCode(updatedCustomerAddress.getPostalCode());
            existingCustomerAddress.setCity(updatedCustomerAddress.getCity());
            existingCustomerAddress.setPhoneNumber(updatedCustomerAddress.getPhoneNumber());
            return customerAddressRepository.save(existingCustomerAddress);
        }

        return null;
    }

    @Override
    public void deleteCustomerAddress(UUID customerAddressId) {
        customerAddressRepository.deleteById(customerAddressId);
    }
}
