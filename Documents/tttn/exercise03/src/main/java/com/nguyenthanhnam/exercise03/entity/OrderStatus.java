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
@Table(name = "order_statuses")
public class OrderStatus extends DateTime {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "status_name")
    private String name;

    @Column(name = "color")
    private String color;

    @Column(name = "privacy", columnDefinition = "TEXT")
    private String privacy;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private StaffAccount createdBy;

    @ManyToOne
    @JoinColumn(name = "updated_by")
    private StaffAccount updatedBy;

    @OneToMany(mappedBy = "status")
    private Set<Order> orders;
}
