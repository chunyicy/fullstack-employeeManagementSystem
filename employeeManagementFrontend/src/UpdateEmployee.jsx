import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee, updateEmployee } from "./EmployeeService";

// UpdateEmployee component is designed for updating employee details
const UpdateEmployee = () => {
  // useParams is used to extract the employee ID from the URL
  const { id } = useParams(); // Get the employee ID from the URL parameters
  const navigate = useNavigate();

  const [employee_name, setName] = useState("");
  const [employee_department, setDepartment] = useState("");
  const [employee_email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // getEmployee and updateEmployee are imported from EmployeeService for fetching and updating employee data.
  // useEffect runs when the component mounts or when the id changes
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployee(id);
        const employee = response.data;
        setName(employee.employee_name);
        setDepartment(employee.employee_department);
        setEmail(employee.employee_email);
      } catch (error) {
        console.error("Error fetching employee:", error);
        setErrorMessage("Error fetching employee details.");
      }
    };

    fetchEmployee();
  }, [id]); //the effect will re-run if the id changes, allowing
  // you to fetch a different employee's data when navigating to another employee's update page

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();

    if (!employee_name || !employee_department || !employee_email) {
      setErrorMessage("All fields are required.");
      return;
    }

    const updatedEmployee = {
      employee_name,
      employee_department,
      employee_email,
    };

    try {
      await updateEmployee(id, updatedEmployee);
      navigate("/employees");
    } catch (error) {
      console.error("Error updating employee:", error);
      setErrorMessage("Error updating employee. Please try again.");
    }
  };

  return (
    <div className="mt-20 w-3/4 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-24">Update Employee</h1>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <form
        className="w-2/4 bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4"
        onSubmit={handleUpdateEmployee}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={employee_name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="department"
          >
            Department
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="department"
            type="text"
            value={employee_department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={employee_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;
