package com.nguyenthanhnam.exercise03.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.Category;
import com.nguyenthanhnam.exercise03.entity.Gallery;
import com.nguyenthanhnam.exercise03.entity.Tag;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private UUID id;
    private String productName;
    private BigDecimal regularPrice;
    private BigDecimal discountPrice;
    private BigDecimal comparePrice;
    private String productDescription;
    private String shortDescription;
    private String productNote;
    private Boolean published;
    private BigDecimal productWeight;
    private String SKU;
    private int quantity;
    private Set<Category> categories = new HashSet<>();
    private Set<Tag> tags = new HashSet<>();
    private Set<Gallery> galleries  = new HashSet<>();
}
