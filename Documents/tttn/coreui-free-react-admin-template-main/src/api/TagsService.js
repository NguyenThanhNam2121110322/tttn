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


export function getAllTags(endpoint, data) {
  return callApi(endpoint, "GET", data);
}
export function getTagsById(endpoint, id) {
  return callApi(`${endpoint}/${id}`, "GET");
}
export function editTags(endpoint, data) {
  return callApi(endpoint, "PUT", data);
}
export function addTags(endpoint, data) {
  return callApi(endpoint, "POST", data);
}
export function deleteTagsById(endpoint, id) {
  return callApi(`${endpoint}/${id}`, "DELETE");
}