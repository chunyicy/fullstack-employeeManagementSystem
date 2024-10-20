package springboot.example.employeeManagementSystem;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


// using lombok to automatically generate getter and setter methods
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity // marks this class as a JPA entity
@Table(name = "employees")
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    // indicate fields should be mapped to columns in the database table
    
    @Column
    private String employee_name;

    @Column
    private String employee_department;

    @Column
    private String employee_email;


}
