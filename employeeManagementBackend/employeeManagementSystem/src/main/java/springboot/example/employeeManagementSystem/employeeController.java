package springboot.example.employeeManagementSystem;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
@RequestMapping("/api/employees")
public class employeeController {

    // BUILD CRUD REST API

    // @Autowired private EmployeeService employeeService
    // Injects the EmployeeService to access business logic and data operations.
   @Autowired
    private EmployeeService employeeService;

   // CREATE EMPLOYEE
   // accepts an employee object in the request body and saves it
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Employee savedEmployee = employeeService.addEmployee(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED); // customize the HTTP response, including the body and status code
    }

    // GET SINGLE EMPLOYEE
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id) { // PathVariable - extract values from the URI of a request
        Employee employee = employeeService.getEmployee(id); // Will throw exception if not found
        return ResponseEntity.ok(employee); // Return 200 OK HttpStatus
    }



    @GetMapping // New endpoint for all employees
    public ResponseEntity<List<Employee>> allEmployees() {
        List<Employee> employees = employeeService.allEmployees();
        return ResponseEntity.ok(employees); // Return 200 OK with the list of employees
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        Employee updatedEmployee = employeeService.updateEmployee(employee, id);
        return ResponseEntity.ok(updatedEmployee);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id); // returns a confirmation message with a 200 OK status.
        return ResponseEntity.ok("Employee with ID " + id + " has been successfully deleted."); 
    }


}
