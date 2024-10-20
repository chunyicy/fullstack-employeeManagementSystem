package springboot.example.employeeManagementSystem;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service

public class employeeServiceImpl implements EmployeeService {


    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee getEmployee(Long employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new EmployeeNotFoundException(employeeId)); // Throw exception if not found
    }

    @Override
    public List<Employee> allEmployees() {
        return employeeRepository.findAll(); // Fetch all employees
    }

    @Override
    public Employee updateEmployee(Employee employee, Long employeeId) {
        Employee existingEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new EmployeeNotFoundException(employeeId));

        // Update fields
        existingEmployee.setEmployee_name(employee.getEmployee_name());
        existingEmployee.setEmployee_department(employee.getEmployee_department());
        existingEmployee.setEmployee_email(employee.getEmployee_email());

        // Save and return the updated employee
        return employeeRepository.save(existingEmployee);
    }


    @Override
    public void deleteEmployee(Long employeeId) {
        Employee existingEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new EmployeeNotFoundException( employeeId ));

        employeeRepository.delete(existingEmployee);
    }
}
