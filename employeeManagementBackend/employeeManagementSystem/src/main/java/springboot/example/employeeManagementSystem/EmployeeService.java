package springboot.example.employeeManagementSystem;

import java.util.List;



// defines methods for managing employee data, such as adding, retrieving, updating, and deleting employees
// separates the business logic from data access, allowing different implementations

public interface EmployeeService {


    Employee addEmployee(Employee employee);

    Employee getEmployee(Long employeeId);

    List<Employee> allEmployees();

    Employee updateEmployee(Employee employee, Long employeeId);

    void deleteEmployee(Long employeeId);
}
