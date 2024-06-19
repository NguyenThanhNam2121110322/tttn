import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from "react-router-dom";
import baseURL from '../api/BaseUrl';
import axios from 'axios';

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {

    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.reload();

  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

    useEffect(() => {

    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');

    if (storedFirstName) setFirstName(storedFirstName);
    if (storedLastName) setLastName(storedLastName);

  }, []);
  useEffect(() => {
    // Check if the user is logged in

    const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isUserLoggedIn);
    const username = localStorage.getItem('username');
    setUsername(username)


  }, [location.pathname]);



  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/tim-kiem/${searchValue}`);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
  };



  useEffect(() => {
    // Gọi API để lấy danh sách category khi component được render
    axios.get(baseURL + `categories`)
      .then(response => {
        console.log("category", response.data)
        // Xử lý dữ liệu trả về từ API
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const getSubCategories = (parentId) => {
    return categories.filter(subCategory => subCategory.parentId && subCategory.parentId.id === parentId);
  };


  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };




  return (

    <header>
      <>





        {/* Topbar Start */}
        <div className="container-fluid">
          <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="d-inline-flex align-items-center">
                <a className="text-dark" href="">
                  FAQs
                </a>
                <span className="text-muted px-2">|</span>
                <a className="text-dark" href="">
                  Help
                </a>
                <span className="text-muted px-2">|</span>
                <a className="text-dark" href="">
                  Support
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-dark px-2" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-dark pl-2" href="">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
              <a href="/" className="text-decoration-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </a>
            </div>
            <div className="col-lg-6 col-6 text-left">
            <form onSubmit={handleSearch}>
                <div className="input-group">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for products"
                    value={searchValue}
                    onChange={handleSearchChange}
                  />

                  <div className="input-group-append">
                    <button className="input-group-text bg-transparent text-primary" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
              <a href="" className="btn border">
                <i className="fas fa-heart text-primary" />
                <span className="badge">0</span>
              </a>
              <a href="/gio-hang" className="btn border">
                <i className="fas fa-shopping-cart text-primary" />
                <span className="badge">0</span>
              </a>
            </div>
          </div>
        </div>
        {/* Topbar End */}
      </>

      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block" style={{ position: "relative" }}>
            <button
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              onClick={handleToggleCollapse}
              style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >
              <h6 className="m-0">Categories</h6>
              <i className={`fa fa-angle-${isCollapsed ? 'down' : 'up'} text-dark`} />
            </button>

            <nav
              className={`collapse ${isCollapsed ? '' : 'show'} navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0`}
              id="navbar-vertical"
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: 410 }}
              >




                {categories.map(category => {
                  if (!category.parentId) {
                    const subcategories = getSubCategories(category.id);
                    return (
                      <Dropdown key={category.id}>
                        <Dropdown.Toggle variant="white" id="dropdown-basic" className="nav-item nav-link">
                          {category.categoryName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {subcategories.map(subcategory => (

                         
                              <Dropdown.Item key={subcategory.id}>
                                   <Link to={`/danh-muc/${subcategory.categoryName}`}>{subcategory.categoryName}</Link>
                              </Dropdown.Item>
                     
                          ))}
                        </Dropdown.Menu>

                      </Dropdown>
                    );
                  }
                })}


              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">
                    Home
                  </a>
                  <Link to={"/tat-ca-san-pham"} className="nav-item nav-link">
                    Shop
                  </Link>
                  <a href="detail.html" className="nav-item nav-link">
                    Shop Detail
                  </a>
                  <Dropdown className="nav-item dropdown">
                    <Dropdown.Toggle
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu rounded-0 m-0">
                      <Dropdown.Item href="cart.html" className="dropdown-item">
                        Shopping Cart
                      </Dropdown.Item>
                      <Dropdown.Item href="checkout.html" className="dropdown-item">
                        Checkout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>




                  <a href="contact.html" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0">

                  {isLoggedIn && (
                    <>
                      <a className="nav-item nav-link">Xin chào: {firstName} {lastName}</a>
                      <a href="" onClick={handleLogout} className="nav-item nav-link">
                        Logout
                      </a>

                    </>
                  )}
                  {!isLoggedIn && (
                    <a href="dang-nhap" className="nav-item nav-link">
                      Login
                    </a>
                  )}

                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>

    </header>

  )
}

export default Header