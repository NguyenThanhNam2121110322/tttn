package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.Sale;

public interface SaleService {
    Sale addSale(Sale sale);

    Sale getSaleById(UUID saleId);

    List<Sale> getAllSales();

    Sale updateSale(UUID saleId, Sale updatedSale);

    void deleteSale(UUID saleId);
}
