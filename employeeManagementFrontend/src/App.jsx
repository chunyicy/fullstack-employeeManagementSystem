import { useState } from "react";
import EmployeesTable from "./EmployeesTable";
import ProjectsSidebar from "./ProjectsSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";

function App() {
  return (
    <main className="h-screen  flex gap-10">
      {/* use React Router for navigation */}
      <BrowserRouter>
        <ProjectsSidebar />
        <Routes>
          {/* home page display list of employees deatials */}
          <Route path="/" element={<EmployeesTable />}></Route>
          <Route path="/employees" element={<EmployeesTable />}></Route>
          {/* leads to the AddEmployee component */}
          <Route path="/employee/add" element={<AddEmployee />}></Route>
          {/* leads to the UpdateEmployee component */}
          <Route
            path="/employee/update/:id"
            element={<UpdateEmployee />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
