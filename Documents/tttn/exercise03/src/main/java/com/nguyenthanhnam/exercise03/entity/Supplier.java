package com.nguyenthanhnam.exercise03.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;
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
@Table(name = "suppliers")
public class Supplier extends DateTime {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;


    @Column(name = "supplier_name", nullable = false)
    private String supplierName;

    @Column(name = "company", nullable = false)
    private String company;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address_line1", nullable = false)
    private String addressLine1;

    @Column(name = "address_line2")
    private String addressLine2;

    @ManyToOne
    @JoinColumn(name = "country_id", referencedColumnName = "id", nullable = false)
    private Country country;

    @Column(name = "city")
    private String city;

    @Column(name = "note")
    private String note;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private StaffAccount createdBy;

    @ManyToOne
    @JoinColumn(name = "updated_by")
    private StaffAccount updatedBy;

    // Constructors, Getters, and Setters
}
