import React, { useEffect, useState } from 'react'
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { Link, useParams } from 'react-router-dom';

function TrandyProducts() {
  const [products, setProducts] = useState([]);
  const ImgUrl = "http://localhost:8080/upload/"
  const { searchValue } = useParams();

  console.log("searchValue",searchValue)

  useEffect(() => {
  
    // Gọi API để lấy danh sách category khi component được render
    axios.get(baseURL+`products`)
      .then(response => {
        console.log("produtc",response.data)
        // Xử lý dữ liệu trả về từ API
        setProducts(response.data);
      })
      
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const searchProducts = () => {
    // Kiểm tra nếu giá trị tìm kiếm là rỗng, hiển thị tất cả sản phẩm
    if (!searchValue) {
      return products;
    }
  
    // Tìm kiếm các sản phẩm có productName chứa giá trị tìm kiếm
    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    return filteredProducts;
  };

  return (
    <>
      {/* Products Start */}
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Products Search</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
      {searchProducts().map((product)=>(
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={ImgUrl + product.galleries[0].imagePath} alt="" />

              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.productName}</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to={`/chi-tiet-san-pham/${product.id}`}>
                  <a href="" className="btn btn-sm text-dark p-0">

                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                </Link>
                <a href="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Products End */}
    </>


  )
}

export default TrandyProducts