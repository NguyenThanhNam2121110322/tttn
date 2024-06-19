import React, { useEffect, useState } from 'react'
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Product_ByCat() {
    const [products, setProducts] = useState([]);
    
    const { slug } = useParams();
    const ImgUrl = "http://localhost:8080/upload/";
    // useEffect(() => {
    //   axios.get(`http://localhost:8080/api/products/category/${slug}`)
    //     .then(response => {
    //       if (response.data.length === 0) {
    //         // Xử lý trường hợp danh mục không có sản phẩm
    //         console.log("Danh mục không có sản phẩm");
    //       } else {
    //         console.log("product", response.data);
    //         setProducts(response.data);
    //       }
    //     })
    //     .catch(error => {
    //       console.error('Error fetching categories:', error);
    //     });
    // }, [slug]);

    useEffect(() => {
      axios.get(`http://localhost:8080/api/products/category/${slug}`)
        .then(response => {
          if (Array.isArray(response.data)) {
            console.log("product", response.data)
            setProducts(response.data);
          } else {
            setProducts([]);
            console.log("No products found in the category");
          }
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }, [slug]);
  
  
  
  return (
    <>
<>
  {/* Shop Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-3 col-md-12">
        {/* Price Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Price
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-1"
              />
              <label className="custom-control-label" htmlFor="price-1">
                $0 - $100
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-2"
              />
              <label className="custom-control-label" htmlFor="price-2">
                $100 - $200
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-3"
              />
              <label className="custom-control-label" htmlFor="price-3">
                $200 - $300
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-4"
              />
              <label className="custom-control-label" htmlFor="price-4">
                $300 - $400
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-5"
              />
              <label className="custom-control-label" htmlFor="price-5">
                $400 - $500
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Price End */}
        {/* Color Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="color-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Color
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-1"
              />
              <label className="custom-control-label" htmlFor="color-1">
                Black
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-2"
              />
              <label className="custom-control-label" htmlFor="color-2">
                White
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-3"
              />
              <label className="custom-control-label" htmlFor="color-3">
                Red
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-4"
              />
              <label className="custom-control-label" htmlFor="color-4">
                Blue
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-5"
              />
              <label className="custom-control-label" htmlFor="color-5">
                Green
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Color End */}
        {/* Size Start */}
        <div className="mb-5">
          <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="size-all"
              />
              <label className="custom-control-label" htmlFor="size-all">
                All Size
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-1"
              />
              <label className="custom-control-label" htmlFor="size-1">
                XS
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-2"
              />
              <label className="custom-control-label" htmlFor="size-2">
                S
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-3"
              />
              <label className="custom-control-label" htmlFor="size-3">
                M
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-4"
              />
              <label className="custom-control-label" htmlFor="size-4">
                L
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-5"
              />
              <label className="custom-control-label" htmlFor="size-5">
                XL
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
      {/* Shop Product Start */}
      <div className="col-lg-9 col-md-12">
        <div className="row pb-3">
          <div className="col-12 pb-1">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </form>
              <div className="dropdown ml-4">
                <button
                  className="btn border dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="triggerId"
                >
                  <a className="dropdown-item" href="#">
                    Latest
                  </a>
                  <a className="dropdown-item" href="#">
                    Popularity
                  </a>
                  <a className="dropdown-item" href="#">
                    Best Rating
                  </a>
                </div>
              </div>
            </div>
          </div>
          {products.map(product => (
  <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 pb-1">
    <div className="card product-item border-0 mb-4">
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img className="img-fluid w-100" src={ImgUrl + product.galleries[0].imagePath} alt={product.productName} />
      </div>

      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="text-truncate mb-3">{product.productName}</h6>
        <h6 className="text-truncate mb-3">{product.imagePath}</h6>
        <div className="d-flex justify-content-center">
          <h6>${product.regularPrice}</h6>
          {product.discountPrice && (
            <h6 className="text-muted ml-2">
              <del>${product.discountPrice}</del>
            </h6>
          )}
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light border">
      <Link to={`/chi-tiet-san-pham/${product.id}`}>
        <a href="#" className="btn btn-sm text-dark p-0">
          <i className="fas fa-eye text-primary mr-1" />
          View Detail
        </a>
        </Link>
        <a href="#" className="btn btn-sm text-dark p-0">
          <i className="fas fa-shopping-cart text-primary mr-1" />
          Add To Cart
        </a>
      </div>
    </div>
  </div>
))}
      
          <div className="col-12 pb-1">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center mb-3">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Shop Product End */}
    </div>
  </div>
  {/* Shop End */}
</>

   
    </>
  )
}

export default Product_ByCat