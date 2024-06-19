package com.nguyenthanhnam.exercise03.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "product_id")
    private UUID productId;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Product product;
    

    @Column(name = "order_id")
    private UUID orderId;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Order order;

    @Column(name = "price", columnDefinition = "numeric")
    private BigDecimal price;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "shipping_id")
    private Integer shippingId;

    // @ManyToOne
    // @JoinColumn(name = "shipping_id", referencedColumnName = "id", insertable =
    // false, updatable = false)
    // private Shipping shipping;
    @Column(name = "customer_id")
    private UUID customerId;
}