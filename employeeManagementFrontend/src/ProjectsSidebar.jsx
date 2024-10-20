import React from "react";
import { useNavigate } from "react-router-dom";
import AddEmployee from "./AddEmployee";

// this component allows users to return to the home page or navigate to the form for adding a new employee.
const ProjectsSidebar = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleAddEmployeeForm = () => {
    navigate("/employee/add"); // Navigate to the add project route
  };

  const handleBackHome = () => {
    navigate("/"); // Navigate back to the home page
  };

  // A button to add a new employee, which triggers the handleAddEmployeeForm function on click.

  return (
    <aside className="w-1/4 bg-gray-800 text-stone-50 px-8 py-10 md:w-72 rounded-r-xl">
      <div className="flex justify-end  mb-20">
        <button className="underline" onClick={handleBackHome}>
          Back Home
        </button>
      </div>
      <h2 className="mb-10 font-bold uppercase md:text-xl text-stone-200 ">
        Employees Management System
      </h2>
      <div>
        <button
          className="px-4 py-3 rounded-md bg-slate-400"
          onClick={handleAddEmployeeForm}
        >
          + Add Employee
        </button>
      </div>
    </aside>
  );
};

export default ProjectsSidebar;
