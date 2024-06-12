package com.nguyenthanhnam.exercise03.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "coupons")
public class Coupon extends DateTime {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "code", length = 50)
    private String code;

    @Column(name = "discount_value", columnDefinition = "numeric")
    private BigDecimal discountValue;

    @Column(name = "discount_type", length = 50)
    private String discountType;

    @Column(name = "times_used")
    private int timesUsed;

    @Column(name = "max_usage")
    private Integer maxUsage;

    @Column(name = "coupon_start_date")
    private LocalDate couponStartDate;

    @Column(name = "coupon_end_date")
    private LocalDate couponEndDate;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private StaffAccount createdBy;

    @ManyToOne
    @JoinColumn(name = "updated_by")
    private StaffAccount updatedBy;
    @ManyToMany(mappedBy = "coupons")
    private Set<Product> products;
    @OneToMany(mappedBy = "coupon")
    private Set<Order> order = new HashSet<>();

}
