package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.CartItem;

public interface CartItemService {
    CartItem addCartItem(CartItem cartItem);

    CartItem getCartItemById(UUID cartItemId);

    List<CartItem> getAllCartItems();

    CartItem updateCartItem(UUID cartItemId, CartItem updatedCartItem);

    void deleteCartItem(UUID cartItemId);
}
