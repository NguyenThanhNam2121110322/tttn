package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Sale;
import com.nguyenthanhnam.exercise03.repository.SaleRepository;
import com.nguyenthanhnam.exercise03.service.SaleService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SaleServiceImpl implements SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Override
    public Sale addSale(Sale sale) {
        return saleRepository.save(sale);
    }

    @Override
    public Sale getSaleById(UUID saleId) {
        Optional<Sale> optionalSale = saleRepository.findById(saleId);
        return optionalSale.orElse(null);
    }

    @Override
    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }

    @Override
    public Sale updateSale(UUID saleId, Sale updatedSale) {
        Sale existingSale = saleRepository.findById(saleId).orElse(null);

        if (existingSale != null) {
            existingSale.setProduct(updatedSale.getProduct());
            existingSale.setPrice(updatedSale.getPrice());
            existingSale.setQuantity(updatedSale.getQuantity());
            // You may need to handle other relationships here
            return saleRepository.save(existingSale);
        }

        return null;
    }

    @Override
    public void deleteSale(UUID saleId) {
        saleRepository.deleteById(saleId);
    }
}
