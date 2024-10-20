import axios from "axios";

// Uses Axios to send HTTP requests for
// different operations (listing, creating, retrieving, updating, and deleting employees).

// base URL for the employee API
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

//Fetches the list of all employees.
// Uses axios.get to send a GET request to the base URL.
export const listEmployees = async () => {
  try {
    return await axios.get(REST_API_BASE_URL);
  } catch (error) {
    throw new Error("Failed to fetch employees");
  }
};

// Sends a POST request to the base URL with the employee object as the request body.
export const createEmployee = async (employee) => {
  try {
    return await axios.post(REST_API_BASE_URL, employee);
  } catch (error) {
    throw new Error("Failed to create employee");
  }
};

export const getEmployee = async (id) => {
  try {
    return await axios.get(`${REST_API_BASE_URL}/${id}`);
  } catch (error) {
    throw new Error("Failed to fetch employee");
  }
};

export const updateEmployee = async (id, employee) => {
  try {
    return await axios.put(`${REST_API_BASE_URL}/${id}`, employee);
  } catch (error) {
    throw new Error("Failed to update employee");
  }
};

// New function to delete an employee
export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${REST_API_BASE_URL}/${id}`);
  } catch (error) {
    throw new Error("Failed to delete employee");
  }
};
