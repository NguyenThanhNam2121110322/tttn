package com.nguyenthanhnam.exercise03.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "shipping_zones")
public class ShippingZone extends DateTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "display_name", nullable = false)
    private String displayName;

    @Column(name = "active", nullable = false)
    private boolean active;

    @Column(name = "free_shipping", nullable = false)
    private boolean freeShipping;

    @Column(name = "rate_type", nullable = false)
    private String rateType;



    @ManyToOne
    @JoinColumn(name = "created_by")
    private StaffAccount createdBy;

    @ManyToOne
    @JoinColumn(name = "updated_by")
    private StaffAccount updatedBy;
    ////5
         @ManyToMany
        @JoinTable(name = "shipping_country_zones", joinColumns = @JoinColumn(name = "shipping_zone_id"), inverseJoinColumns = @JoinColumn(name = "country_id"))
        private Set<Country> countries = new HashSet<>();

    // Constructors, Getters, and Setters
}
