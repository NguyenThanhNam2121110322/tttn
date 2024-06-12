package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.OrderStatus;
import com.nguyenthanhnam.exercise03.repository.OrderStatusRepository;
import com.nguyenthanhnam.exercise03.service.OrderStatusService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderStatusServiceImpl implements OrderStatusService {

    @Autowired
    private OrderStatusRepository orderStatusRepository;

    @Override
    public OrderStatus addOrderStatus(OrderStatus orderStatus) {
        return orderStatusRepository.save(orderStatus);
    }

    @Override
    public OrderStatus getOrderStatusById(UUID orderStatusId) {
        Optional<OrderStatus> optionalOrderStatus = orderStatusRepository.findById(orderStatusId);
        return optionalOrderStatus.orElse(null);
    }

    @Override
    public List<OrderStatus> getAllOrderStatuses() {
        return orderStatusRepository.findAll();
    }

    @Override
    public OrderStatus updateOrderStatus(UUID orderStatusId, OrderStatus updatedOrderStatus) {
        OrderStatus existingOrderStatus = orderStatusRepository.findById(orderStatusId).orElse(null);

        if (existingOrderStatus != null) {
            existingOrderStatus.setName(updatedOrderStatus.getName());
            existingOrderStatus.setColor(updatedOrderStatus.getColor());
            existingOrderStatus.setPrivacy(updatedOrderStatus.getPrivacy());
            existingOrderStatus.setCreatedBy(updatedOrderStatus.getCreatedBy());
            existingOrderStatus.setUpdatedBy(updatedOrderStatus.getUpdatedBy());
            return orderStatusRepository.save(existingOrderStatus);
        }

        return null;
    }

    @Override
    public void deleteOrderStatus(UUID orderStatusId) {
        orderStatusRepository.deleteById(orderStatusId);
    }
}
