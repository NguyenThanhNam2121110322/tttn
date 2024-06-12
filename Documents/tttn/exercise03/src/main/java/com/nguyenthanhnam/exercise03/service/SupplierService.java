package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.Supplier;

public interface SupplierService {
    Supplier addSupplier(Supplier supplier);
    
    Supplier getSupplierById(UUID supplierId);
    
    List<Supplier> getAllSuppliers();
    
    Supplier updateSupplier(UUID supplierId, Supplier updatedSupplier);
    
    void deleteSupplier(UUID supplierId);
}
