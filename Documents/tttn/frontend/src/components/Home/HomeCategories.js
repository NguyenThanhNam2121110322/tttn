import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import baseURL from '../../api/BaseUrl';
import axios from 'axios';
import { IMAGE_URL } from '../../api/apiService';

function HomeCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      {/* Categories Start */}
      <div className="row px-xl-5 pb-3">
        {categories.slice(0, 6).map(category => (
          <div className="col-lg-4 col-md-6 pb-1" key={category.id}>
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
                <img className="img-fluid"   src={IMAGE_URL + 'categories/' + category.imagePath} alt={category.imagePath} />
              </a>
              <h5 className="font-weight-semi-bold m-0">{category.categoryName}</h5>
            </div>
          </div>
        ))}
      </div>
      {/* Categories End */}
    </>
  );
}

export default HomeCategories;