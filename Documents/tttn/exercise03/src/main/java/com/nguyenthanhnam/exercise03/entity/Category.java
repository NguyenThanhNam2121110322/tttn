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
@Table(name = "categories")
public class Category extends DateTime {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Category parentId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "category_description")
    private String categoryDescription;

    @Column(name = "icon")
    private String icon;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "active")
    private Boolean active;


    // @ManyToOne
    // @JoinColumn(name = "created_by") 
    // private StaffAccount createdBy;

    // @ManyToOne
    // @JoinColumn(name = "updated_by") 
    // private StaffAccount updatedBy;

}
