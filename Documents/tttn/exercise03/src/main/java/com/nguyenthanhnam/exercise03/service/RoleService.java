package com.nguyenthanhnam.exercise03.service;

import java.util.List;

import com.nguyenthanhnam.exercise03.entity.Role;

public interface RoleService {
    Role addRole(Role role);

    Role getRoleById(Integer roleId);

    List<Role> getAllRoles();

    Role updateRole(Integer roleId, Role updatedRole);

    void deleteRole(Integer roleId);
}
