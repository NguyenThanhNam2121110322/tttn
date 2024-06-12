import axios from 'axios';

const API_URL = "http://localhost:8080/api";
export const IMAGE_URL = "http://localhost:8080/upload/";

export async function callApi(endpoint, method = 'GET', body) {
  try {
    return await axios({
      method,
      url: `${API_URL}/${endpoint}`,
      data: body,
    });
  } catch (e) {
    console.log(e);
  }
}

export function getAllProducts(endpoint) {
  return callApi(endpoint, "GET");
}

export function getProductById(endpoint, id) {
  return callApi(`${endpoint}/${id}`, "GET");
}

export function addProduct(endpoint, data) {
  return callApi(endpoint, "POST", data);
}

export function editProduct(endpoint, data) {
  return callApi(endpoint, "PUT", data);
}

export function deleteProductById(endpoint,id) {
  return callApi(`${endpoint}/${id}`, "DELETE");
}



export function getAllCategories(endpoint) {
  return callApi(endpoint, "GET");
}
export function addCategory(endpoint, data) {
    return callApi(endpoint, "POST", data);
  }

  export function deleteCategoryById(endpoint,id) {
    return callApi(`${endpoint}/${id}`, "DELETE");
  }

  export function getCategoryById(endpoint, id) {
    return callApi(`${endpoint}/${id}`, "GET");
  }
  
  export function editCategory(endpoint, data) {
    return callApi(endpoint, "PUT", data);
  }
  