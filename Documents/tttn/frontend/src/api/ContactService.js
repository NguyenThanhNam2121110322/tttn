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


export function getAllContacts(endpoint, data) {
  return callApi(endpoint, "GET", data);
}
export function getContactsById(endpoint, id) {
  return callApi(`${endpoint}/${id}`, "GET");
}
export function editContacts(endpoint, data) {
  return callApi(endpoint, "PUT", data);
}
export function addContacts(endpoint, data) {
  return callApi(endpoint, "POST", data);
}
export function deleteContactsById(endpoint, id) {
  return callApi(`${endpoint}/${id}`, "DELETE");
}