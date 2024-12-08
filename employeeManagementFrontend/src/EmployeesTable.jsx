// import React, { useEffect, useState } from "react";
// import { listEmployees } from "./EmployeeService";
// import { useNavigate } from "react-router-dom";
// import { deleteEmployee } from "./EmployeeService";

// // this component managing a list of employees, allowing users to view, update, and delete employee records.
// // useEffect and useState, these hooks are used for managing state and side effects.
// // Router Hook, useNavigate allowing navigation to different routes programmatically.
// const EmployeesTable = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   // listEmployees and deleteEmployee functions handle API calls related to employee data
//   // calls listEmployees() to fetch the employee data from the server
//   useEffect(() => {
//     listEmployees()
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); // useEffect runs once after the component mounts (because of the empty dependency array []

//   function updateEmployee(id) {
//     navigate(`/employee/update/${id}`);
//   }

//   const handleDeleteEmployee = async (id) => {
//     if (window.confirm("Are you sure you want to delete this employee?")) {
//       try {
//         await deleteEmployee(id); // Call the delete function
//         setEmployees(employees.filter((employee) => employee.id !== id)); // Update the state
//         // navigate("/employees");
//       } catch (error) {
//         console.error("Error deleting employee:", error);
//       }
//     }
//   };

//   return (
//     <div className="mt-24 w-3/4 ">
//       <table className="table-auto w-full">
//         <thead className="bg-gray-700 text-stone-50">
//           <tr>
//             <th className=" p-3 text-sm text-left ">ID</th>
//             <th className=" p-3 text-sm text-left">Name</th>
//             <th className=" p-3 text-sm text-left">Department</th>
//             <th className=" p-3 text-sm text-left">Email</th>
//             <th className=" p-3 text-sm text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr className="" key={employee.id}>
//               <td className="p-4 text-sm text-gray-900 border border-slate-300">
//                 {employee.id}
//               </td>
//               <td className="p-4 text-sm text-gray-900 border border-slate-300">
//                 {employee.employee_name}
//               </td>
//               <td className="p-4 text-sm text-gray-900 border border-slate-300">
//                 {employee.employee_department}
//               </td>
//               <td className="p-4 text-sm text-gray-900 border border-slate-300">
//                 {employee.employee_email}
//               </td>
//               <td className="p-4 text-sm text-gray-900 border border-slate-300">
//                 <div className="flex justify-around ">
//                   <button onClick={() => updateEmployee(employee.id)}>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//                       />
//                     </svg>
//                   </button>
//                   <button onClick={() => handleDeleteEmployee(employee.id)}>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeesTable;

// copy version again
import React, { useEffect, useState } from "react";
import { listEmployees } from "./EmployeeService";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "./EmployeeService";

// this component managing a list of employees, allowing users to view, update, and delete employee records.
// useEffect and useState, these hooks are used for managing state and side effects.
// Router Hook, useNavigate allowing navigation to different routes programmatically.
const EmployeesTable = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  // listEmployees and deleteEmployee functions handle API calls related to employee data
  // calls listEmployees() to fetch the employee data from the server
  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // useEffect runs once after the component mounts (because of the empty dependency array []

  function updateEmployee(id) {
    navigate(`/employee/update/${id}`);
  }

  const handleDeleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await deleteEmployee(id); // Call the delete function
        setEmployees(employees.filter((employee) => employee.id !== id)); // Update the state
        // navigate("/employees");
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  return (
    <div className="mt-24 w-3/4 ">
      <table className="table-auto w-full">
        <thead className="bg-gray-700 text-stone-50">
          <tr>
            <th className=" p-3 text-sm text-left ">ID</th>
            <th className=" p-3 text-sm text-left">Name</th>
            <th className=" p-3 text-sm text-left">Department</th>
            <th className=" p-3 text-sm text-left">Email</th>
            <th className=" p-3 text-sm text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr className="" key={employee.id}>
              <td className="p-4 text-sm text-gray-900 border border-slate-300">
                {employee.id}
              </td>
              <td className="p-4 text-sm text-gray-900 border border-slate-300">
                {employee.employee_name}
              </td>
              <td className="p-4 text-sm text-gray-900 border border-slate-300">
                {employee.employee_department}
              </td>
              <td className="p-4 text-sm text-gray-900 border border-slate-300">
                {employee.employee_email}
              </td>
              <td className="p-4 text-sm text-gray-900 border border-slate-300">
                <div className="flex justify-around ">
                  <button onClick={() => updateEmployee(employee.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button onClick={() => handleDeleteEmployee(employee.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;

