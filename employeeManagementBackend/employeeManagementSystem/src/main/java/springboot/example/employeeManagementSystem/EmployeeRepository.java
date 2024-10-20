package springboot.example.employeeManagementSystem;

import org.springframework.data.jpa.repository.JpaRepository;


// interface inherits a set of predefined methods for interacting with the database.
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
