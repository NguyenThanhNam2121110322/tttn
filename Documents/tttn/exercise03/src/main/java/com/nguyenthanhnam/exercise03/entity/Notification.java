package com.nguyenthanhnam.exercise03.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "account_id")
    private UUID accountId;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id", insertable = false, updatable = false)
    private StaffAccount account;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "seen")
    private boolean seen;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "receive_time")
    private LocalDateTime receiveTime;

    @Column(name = "notification_expiry_date")
    private LocalDateTime notificationExpiryDate;
}
