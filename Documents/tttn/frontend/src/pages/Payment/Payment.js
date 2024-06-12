import { useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import axios from "axios";

function Payment() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {

        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');
        const storedEmail = localStorage.getItem('email');
        const storedPhone = localStorage.getItem('phone');
        const storedUser_id = localStorage.getItem("User_id")
       


        if (storedFirstName) setFirstName(storedFirstName);
        if (storedLastName) setLastName(storedLastName);
        if (storedEmail) setEmail(storedEmail);
        if (storedPhone) setPhone(storedPhone);
        if (storedUser_id) setCustomerId(storedUser_id);
        

    }, []);
    console.log("user_id:", localStorage.getItem("User_id"));

    const { cartItems, clearCart } = useContext(CartContext);

    useEffect(() => {
        // Lưu user id và quantity vào biến productId
        if (cartItems.length > 0) {
            setProductId(` ${cartItems[0].id}`);
            setQuantity(`  ${cartItems[0].quantity}`)
            setPrice(` ${cartItems[0].price}`);
        }

        // Các logic khác
    }, [cartItems]);

    // let totalPrice = 0;
    // cartItems.forEach(item => {
    //     totalPrice += item.price * item.quantity;
    // });
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const initialTotalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotalPrice(initialTotalPrice);
    }, [cartItems]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/order-items', {
                customerId,
                productId,
                quantity,
                price,
            });
            console.log(response.data);
            alert("Thanh toán thành công");
            clearCart(); // Gọi hàm clearCart để xóa tất cả dữ liệu trong CartContext
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Thanh toán không thành công");
        }
    };

    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><a href="">Home</a></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Checkout</p>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            {/* <!-- Checkout Start --> */}
            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-8">
                        <div class="mb-4">
                            <h4 class="font-weight-semi-bold mb-4">Billing Address</h4>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input class="form-control" type="text" value={firstName} />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input class="form-control" type="text" value={lastName} />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input class="form-control" type="text" value={email} />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Mobile No</label>
                                    <input class="form-control" type="text" value={phone} />
                                </div>
                            
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-lg-4">
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Order Total</h4>
                            </div>
                            <div class="card-body">
                                <h5 class="font-weight-medium mb-3">Products</h5>
                                {cartItems.map((item, index) => (
                                    <div key={index}>
                                        <p>Name: {item.name}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price}</p>
                                    </div>
                                ))}
                                
                                <hr class="mt-0" />
                            </div>
                            <div class="card-footer border-secondary bg-transparent">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5 class="font-weight-bold">Total</h5>
                                    <h5 class="font-weight-bold">${totalPrice}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Payment</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" name="payment" id="paypal" />
                                        <label class="custom-control-label" for="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" name="payment" id="directcheck" />
                                        <label class="custom-control-label" for="directcheck">Direct Check</label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" name="payment" id="banktransfer" />
                                        <label class="custom-control-label" for="banktransfer">Bank Transfer</label>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer border-secondary bg-transparent">
                                <button class="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" onClick={handleSubmit}>Thanh Toan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Checkout End --> */}
        </>
    )
}

export default Payment