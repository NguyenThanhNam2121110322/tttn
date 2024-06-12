package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.OrderStatus;

public interface OrderStatusService {
    OrderStatus addOrderStatus(OrderStatus orderStatus);

    OrderStatus getOrderStatusById(UUID orderStatusId);

    List<OrderStatus> getAllOrderStatuses();

    OrderStatus updateOrderStatus(UUID orderStatusId, OrderStatus updatedOrderStatus);

    void deleteOrderStatus(UUID orderStatusId);
}
