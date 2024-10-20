package springboot.example.employeeManagementSystem;


//  handle cases where an employee cannot be found 
public class EmployeeNotFoundException extends RuntimeException{
    public EmployeeNotFoundException(Long employeeId) {
        super("Employee not found with ID: " + employeeId);
    }
}
