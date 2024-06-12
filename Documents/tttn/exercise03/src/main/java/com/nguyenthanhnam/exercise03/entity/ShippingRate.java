package com.nguyenthanhnam.exercise03.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "shipping_rates")
public class ShippingRate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "shipping_zone_id", referencedColumnName = "id", nullable = false)
    private ShippingZone shippingZone;

    @Column(name = "weight_unit", nullable = false)
    private String weightUnit;

    @Column(name = "min_value", nullable = false)
    private BigDecimal minValue;

    @Column(name = "max_value")
    private BigDecimal maxValue;

    @Column(name = "no_max", nullable = false)
    private boolean noMax;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    // Constructors, Getters, and Setters
}
