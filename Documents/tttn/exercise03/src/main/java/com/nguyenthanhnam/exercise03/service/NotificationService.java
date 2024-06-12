package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.Notification;

public interface NotificationService {
    Notification addNotification(Notification notification);

    Notification getNotificationById(UUID notificationId);

    List<Notification> getAllNotifications();

    Notification updateNotification(UUID notificationId, Notification updatedNotification);

    void deleteNotification(UUID notificationId);
}
