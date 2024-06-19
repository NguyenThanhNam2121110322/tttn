    package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Customer;
import com.nguyenthanhnam.exercise03.repository.CustomerRepository;
import com.nguyenthanhnam.exercise03.service.CustomerService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer addCustomer(Customer customer) {
        Customer existingCustomer = customerRepository.findByEmail(customer.getEmail());
        if (existingCustomer != null) {
            // Nếu email đã tồn tại, trả về null hoặc ném ra một exception
            return null;
        }
    
        // Nếu email chưa tồn tại, lưu khách hàng mới và trả về
        return customerRepository.save(customer);
    }

    @Override
    public Customer getCustomerById(UUID customerId) {
        Optional<Customer> optionalCustomer = customerRepository.findById(customerId);
        return optionalCustomer.orElse(null);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer updateCustomer(UUID customerId, Customer updatedCustomer) {
        Customer existingCustomer = customerRepository.findById(customerId).orElse(null);

        if (existingCustomer != null) {
            existingCustomer.setFirstName(updatedCustomer.getFirstName());
            existingCustomer.setLastName(updatedCustomer.getLastName());
            existingCustomer.setPhone(updatedCustomer.getPhone());
            existingCustomer.setEmail(updatedCustomer.getEmail());
            existingCustomer.setPasswordHash(updatedCustomer.getPasswordHash());
            existingCustomer.setActive(updatedCustomer.isActive());
            existingCustomer.setRegisteredAt(updatedCustomer.getRegisteredAt());
            // You may need to handle addresses, carts, and orders here
            return customerRepository.save(existingCustomer);
        }

        return null;
    }

    @Override
    public void deleteCustomer(UUID customerId) {
        customerRepository.deleteById(customerId);
    }


    @Override
    public Customer getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }


}