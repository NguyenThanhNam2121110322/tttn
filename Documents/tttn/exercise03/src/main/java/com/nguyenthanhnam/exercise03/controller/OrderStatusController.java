package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.OrderStatus;
import com.nguyenthanhnam.exercise03.service.OrderStatusService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/order-statuses")
public class OrderStatusController {

    @Autowired
    private OrderStatusService orderStatusService;

    @GetMapping
    public ResponseEntity<List<OrderStatus>> getAllOrderStatuses() {
        List<OrderStatus> orderStatuses = orderStatusService.getAllOrderStatuses();
        return ResponseEntity.ok(orderStatuses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderStatus> getOrderStatusById(@PathVariable("id") UUID orderStatusId) {
        OrderStatus orderStatus = orderStatusService.getOrderStatusById(orderStatusId);
        if (orderStatus != null) {
            return ResponseEntity.ok(orderStatus);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<OrderStatus> addOrderStatus(@RequestBody OrderStatus orderStatus) {
        OrderStatus addedOrderStatus = orderStatusService.addOrderStatus(orderStatus);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedOrderStatus);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderStatus> updateOrderStatus(@PathVariable("id") UUID orderStatusId,
            @RequestBody OrderStatus updatedOrderStatus) {
        OrderStatus orderStatus = orderStatusService.updateOrderStatus(orderStatusId, updatedOrderStatus);
        if (orderStatus != null) {
            return ResponseEntity.ok(orderStatus);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderStatus(@PathVariable("id") UUID orderStatusId) {
        orderStatusService.deleteOrderStatus(orderStatusId);
        return ResponseEntity.noContent().build();
    }
}
