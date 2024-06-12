package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Order;
import com.nguyenthanhnam.exercise03.repository.OrderRepository;
import com.nguyenthanhnam.exercise03.service.OrderService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(UUID orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        return optionalOrder.orElse(null);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order updateOrder(UUID orderId, Order updatedOrder) {
        Order existingOrder = orderRepository.findById(orderId).orElse(null);

        if (existingOrder != null) {
            existingOrder.setCoupon(updatedOrder.getCoupon());
            existingOrder.setCustomerId(updatedOrder.getCustomerId());
            existingOrder.setStatus(updatedOrder.getStatus());
            existingOrder.setApprovedAt(updatedOrder.getApprovedAt());
            existingOrder.setDeliveredCarrierAt(updatedOrder.getDeliveredCarrierAt());
            existingOrder.setDeliveredCustomerAt(updatedOrder.getDeliveredCustomerAt());
            existingOrder.setCreatedAt(updatedOrder.getCreatedAt());
            // You may need to handle items here
            return orderRepository.save(existingOrder);
        }

        return null;
    }

    @Override
    public void deleteOrder(UUID orderId) {
        orderRepository.deleteById(orderId);
    }
}
