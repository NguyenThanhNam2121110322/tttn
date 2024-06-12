package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.CartItem;
import com.nguyenthanhnam.exercise03.repository.CartItemRepository;
import com.nguyenthanhnam.exercise03.service.CartItemService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Override
    public CartItem addCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @Override
    public CartItem getCartItemById(UUID cartItemId) {
        Optional<CartItem> optionalCartItem = cartItemRepository.findById(cartItemId);
        return optionalCartItem.orElse(null);
    }

    @Override
    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    @Override
    public CartItem updateCartItem(UUID cartItemId, CartItem updatedCartItem) {
        CartItem existingCartItem = cartItemRepository.findById(cartItemId).orElse(null);

        if (existingCartItem != null) {
            existingCartItem.setCart(updatedCartItem.getCart());
            existingCartItem.setProduct(updatedCartItem.getProduct());
            existingCartItem.setQuantity(updatedCartItem.getQuantity());
            return cartItemRepository.save(existingCartItem);
        }

        return null;
    }

    @Override
    public void deleteCartItem(UUID cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }
}
