import React from 'react'
import Home from '../pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Product_detail from '../components/Detail/Product_detail';
import Login from '../pages/User/Login';
import Header from './Header';
import Footer from './Footer';
import Register from '../pages/User/Register';
import Search from '../pages/Search/Search';
import Payment from '../pages/Payment/Payment';

function Main() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gio-hang" element={<Cart/>} />
          <Route path="/chi-tiet-san-pham/:id" element={<Product_detail/>} />
          <Route path="/dang-nhap" element={<Login/>} />
          <Route path="/dang-ky" element={<Register/>} />
          <Route path="/tim-kiem/:searchValue" element={<Search/>} />
          <Route path="/thanh-toan" element={<Payment/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Main