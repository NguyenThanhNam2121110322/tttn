import React, { useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



function Cart() {

    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId)
    }
    const handleUpdateQuantity = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
    };

    const [quantity, setQuantity] = useState(1)

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
          setQuantity(item.quantity - 1);
          handleUpdateQuantity(item.id, item.quantity - 1);
          updateTotalPrice(item, item.quantity - 1);
        }
      };
      
      const handleIncrement = (item) => {
        setQuantity(item.quantity + 1);
        handleUpdateQuantity(item.id, item.quantity + 1);
        updateTotalPrice(item, item.quantity + 1);
      };

    const ImgUrl = "http://localhost:8080/upload/"

    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = (updatedUniqueProducts) => {
        const newTotalPrice = Object.values(updatedUniqueProducts).reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        setTotalPrice(newTotalPrice);
      };
    
    useEffect(() => {
        const initialTotalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotalPrice(initialTotalPrice);
      }, [cartItems]);

      const [uniqueProducts, setUniqueProducts] = useState({});

      useEffect(() => {
        const initialUniqueProducts = {};
        cartItems.forEach((item) => {
          if (initialUniqueProducts[item.id]) {
            initialUniqueProducts[item.id].quantity += item.quantity;
          } else {
            initialUniqueProducts[item.id] = { ...item };
          }
        });
        setUniqueProducts(initialUniqueProducts);
      
        const initialTotalPrice = Object.values(initialUniqueProducts).reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        setTotalPrice(initialTotalPrice);
      }, [cartItems]);

      const navigate = useNavigate();

      const handleCheckout = () => {
        // Check if the user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            navigate("/thanh-toan");
        } else {
            alert("Vui lòng đăng nhập trước khi thanh toán");
            navigate("/dang-nhap");
        }
    };

    return (
        <>
            {/* <!-- Cart Start --> */}


            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-8 table-responsive mb-5">
                        <table class="table table-bordered text-center mb-0">
                            <thead class="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                                {Object.values(uniqueProducts).map((item, index) => (
                                    <tr >
                                        <td class="align-middle"><img src={ImgUrl + item.image} alt="" style={{ width: "50px" }} /> {item.name}</td>
                                        <td class="align-middle">{item.price} VND</td>
                                        <td class="align-middle">
                                            <div class="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                <div class="input-group-btn">
                                                    <button class="btn btn-sm btn-primary btn-minus" onClick={() => handleDecrement(item)}>
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" class="form-control form-control-sm bg-secondary text-center" value={item.quantity} />
                                                <div class="input-group-btn">
                                                    <button class="btn btn-sm btn-primary btn-plus" onClick={() => handleIncrement(item)}>
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td class="align-middle"><button class="btn btn-sm btn-primary" onClick={() => handleRemoveFromCart(item.id)}><i class="fa fa-times"></i></button></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <form class="mb-5" action="">
                            <div class="input-group">
                                <input type="text" class="form-control p-4" placeholder="Coupon Code" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
    
                            <div class="card-footer border-secondary bg-transparent">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5 class="font-weight-bold">Total</h5>
                                    <h5 class="font-weight-bold">{totalPrice} VND</h5>
                                </div>
                                <button class="btn btn-block btn-primary my-3 py-3" onClick={handleCheckout}>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Cart End --> */}
        </>
    )
}

export default Cart