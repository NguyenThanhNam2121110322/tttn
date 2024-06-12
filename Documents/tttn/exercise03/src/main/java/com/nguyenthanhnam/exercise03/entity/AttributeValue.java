package com.nguyenthanhnam.exercise03.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "attribute_values")
public class AttributeValue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "attribute_id")
    private UUID attributeId;

    @ManyToOne
    @JoinColumn(name = "attribute_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Attribute attribute;

    @Column(name = "attribute_value")
    private String attributeValue;

    @Column(name = "color")
    private String color;

    ///////5
    @ManyToMany
    @JoinTable(
            name = "variant_attribute_values",
            joinColumns = @JoinColumn(name = "variant_attribute_value_id"),
            inverseJoinColumns = @JoinColumn(name = "attribute_value_id"))
    private Set<Variant> variants;

}
