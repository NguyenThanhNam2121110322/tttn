package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.Variant;

public interface VariantService {
    Variant addVariant(Variant variant);

    List<Variant> getAllVariants();

    void deleteVariant(UUID variantId);
}
