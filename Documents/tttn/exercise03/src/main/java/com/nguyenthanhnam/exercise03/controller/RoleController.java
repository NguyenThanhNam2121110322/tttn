package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Role;
import com.nguyenthanhnam.exercise03.service.RoleService;

import java.util.List;

@RestController
@RequestMapping("api/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles() {
        List<Role> roles = roleService.getAllRoles();
        return ResponseEntity.ok(roles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable("id") Integer roleId) {
        Role role = roleService.getRoleById(roleId);
        if (role != null) {
            return ResponseEntity.ok(role);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Role> addRole(@RequestBody Role role) {
        Role addedRole = roleService.addRole(role);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedRole);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Role> updateRole(@PathVariable("id") Integer roleId, @RequestBody Role updatedRole) {
        Role role = roleService.updateRole(roleId, updatedRole);
        if (role != null) {
            return ResponseEntity.ok(role);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRole(@PathVariable("id") Integer roleId) {
        roleService.deleteRole(roleId);
        return ResponseEntity.noContent().build();
    }
}
