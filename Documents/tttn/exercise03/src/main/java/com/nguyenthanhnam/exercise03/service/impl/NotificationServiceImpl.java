package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Notification;
import com.nguyenthanhnam.exercise03.repository.NotificationRepository;
import com.nguyenthanhnam.exercise03.service.NotificationService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public Notification getNotificationById(UUID notificationId) {
        Optional<Notification> optionalNotification = notificationRepository.findById(notificationId);
        return optionalNotification.orElse(null);
    }

    @Override
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    @Override
    public Notification updateNotification(UUID notificationId, Notification updatedNotification) {
        Notification existingNotification = notificationRepository.findById(notificationId).orElse(null);

        if (existingNotification != null) {
            existingNotification.setAccount(updatedNotification.getAccount());
            existingNotification.setTitle(updatedNotification.getTitle());
            existingNotification.setDescription(updatedNotification.getDescription());
            existingNotification.setSeen(updatedNotification.isSeen());
            existingNotification.setCreatedAt(updatedNotification.getCreatedAt());
            existingNotification.setReceiveTime(updatedNotification.getReceiveTime());
            existingNotification.setNotificationExpiryDate(updatedNotification.getNotificationExpiryDate());
            return notificationRepository.save(existingNotification);
        }

        return null;
    }

    @Override
    public void deleteNotification(UUID notificationId) {
        notificationRepository.deleteById(notificationId);
    }
}
