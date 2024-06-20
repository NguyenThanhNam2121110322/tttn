import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { Link, useParams } from 'react-router-dom';

function TrandyProducts() {
  const [products, setProducts] = useState([]);
  const ImgUrl = 'http://localhost:8080/upload/';
  const { searchValue } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch products from the API
    axios.get(baseURL + 'products')
      .then(response => {
        setProducts(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.filter(product =>
    product.productName.toLowerCase().includes(searchValue?.toLowerCase() || '')
  ).slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPages = 2;
    const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    const endPage = Math.min(totalPages, startPage + maxPages - 1);
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          <a className="page-link" href="#">{i}</a>
        </li>
      );
    }
    return pageNumbers;
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
        {currentItems.map((product) => (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={product.id}>
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

      <div className="col-12 pb-1">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center mb-3">
            {renderPageNumbers()}
          </ul>
        </nav>
      </div>
      {/* Products End */}
    </>
  );
}

export default TrandyProducts;