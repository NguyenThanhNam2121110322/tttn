package com.nguyenthanhnam.exercise03.entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "attributes")
public class Attribute extends DateTime {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "attribute_name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private StaffAccount createdBy;

    @ManyToOne
    @JoinColumn(name = "updated_by")
    private StaffAccount updatedBy;
    @ManyToMany(mappedBy = "attributes")
    private Set<Product> products;
    @OneToMany(mappedBy = "attribute")
    private Set<AttributeValue> attributes = new HashSet<>();

    

}
