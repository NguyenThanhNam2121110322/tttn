package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.CartItem;
import com.nguyenthanhnam.exercise03.service.CartItemService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/cart-items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @GetMapping
    public ResponseEntity<List<CartItem>> getAllCartItems() {
        List<CartItem> cartItems = cartItemService.getAllCartItems();
        return ResponseEntity.ok(cartItems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable("id") UUID cartItemId) {
        CartItem cartItem = cartItemService.getCartItemById(cartItemId);
        if (cartItem != null) {
            return ResponseEntity.ok(cartItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<CartItem> addCartItem(@RequestBody CartItem cartItem) {
        CartItem addedCartItem = cartItemService.addCartItem(cartItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedCartItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable("id") UUID cartItemId,
            @RequestBody CartItem updatedCartItem) {
        CartItem cartItem = cartItemService.updateCartItem(cartItemId, updatedCartItem);
        if (cartItem != null) {
            return ResponseEntity.ok(cartItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable("id") UUID cartItemId) {
        cartItemService.deleteCartItem(cartItemId);
        return ResponseEntity.noContent().build();
    }
}
