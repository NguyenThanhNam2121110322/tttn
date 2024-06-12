package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Supplier;
import com.nguyenthanhnam.exercise03.repository.SupplierRepository;
import com.nguyenthanhnam.exercise03.service.SupplierService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public Supplier addSupplier(Supplier supplier) {
        // Đảm bảo rằng id của đối tượng Supplier là null trước khi lưu vào cơ sở dữ liệu
        supplier.setId(null);
        return supplierRepository.save(supplier);
    }

    @Override
    public Supplier getSupplierById(UUID supplierId) {
        Optional<Supplier> optionalSupplier = supplierRepository.findById(supplierId);
        return optionalSupplier.orElse(null);
    }

    @Override
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    @Override
    public Supplier updateSupplier(UUID supplierId, Supplier updatedSupplier) {
        Supplier existingSupplier = supplierRepository.findById(supplierId).orElse(null);

        if (existingSupplier != null) {
            existingSupplier.setSupplierName(updatedSupplier.getSupplierName());
            existingSupplier.setCompany(updatedSupplier.getCompany());
            existingSupplier.setPhoneNumber(updatedSupplier.getPhoneNumber());
            existingSupplier.setAddressLine1(updatedSupplier.getAddressLine1());
            existingSupplier.setAddressLine2(updatedSupplier.getAddressLine2());
            existingSupplier.setCountry(updatedSupplier.getCountry());
            existingSupplier.setCity(updatedSupplier.getCity());
            existingSupplier.setNote(updatedSupplier.getNote());
            // Cập nhật các trường khác nếu cần

            return supplierRepository.save(existingSupplier);
        }

        return null;
    }

    @Override
    public void deleteSupplier(UUID supplierId) {
        supplierRepository.deleteById(supplierId);
    }
}
