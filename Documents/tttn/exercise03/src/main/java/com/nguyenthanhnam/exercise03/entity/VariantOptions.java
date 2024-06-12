package com.nguyenthanhnam.exercise03.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "variant_options")
public class VariantOptions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;


    @Column(name = "title", nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    private Gallery gallery;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Product product;

    @Column(name = "sale_price", nullable = false)
    private BigDecimal salePrice;

    @Column(name = "compare_price", nullable = false)
    private BigDecimal comparePrice;

    @Column(name = "buying_price")
    private BigDecimal buyingPrice;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "sku")
    private String sku;

    @Column(name = "active", nullable = false)
    private boolean active;
}
