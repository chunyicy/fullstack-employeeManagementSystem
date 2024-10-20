import React, { useState } from "react";
import ProjectsSidebar from "./ProjectsSidebar";
import { createEmployee } from "./EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee_name, setName] = useState("");
  const [employee_department, setDepartment] = useState("");
  const [employee_email, setEmail] = useState("");

  function handleEmployeeName(e) {
    setName(e.target.value);
  }
  function handleEmployeeDepartment(e) {
    setDepartment(e.target.value);
  }
  function handleEmployeeEmail(e) {
    setEmail(e.target.value);
  }

  const navigate = useNavigate(); // Get the navigate function

  const saveEmployee = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const employee = { employee_name, employee_department, employee_email };
    try {
      const response = await createEmployee(employee);
      console.log(response.data);
      // Optionally navigate to the employee list after saving
      navigate("/employees");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="mt-20 w-3/4  flex flex-col items-center ">
      <h1 className="text-xl font-bold mb-24">Add New Employee</h1>

      <form
        className="w-2/4  bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4"
        onSubmit={saveEmployee}
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
            onChange={handleEmployeeName}
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
            onChange={handleEmployeeDepartment}
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
            onChange={handleEmployeeEmail}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
