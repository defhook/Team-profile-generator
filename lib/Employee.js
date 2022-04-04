//Parent Class 
class Employee {

    constructor(name, id, email, role) {
        //setting up initial values 
        this.name = name; 
        this.email = email; 
        this.id = id;
        this.role = role;
    }

    getName() {
        return this.name; //return the employee name 
    }

    getId() {
        return this.id; 
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';// Returns 'Employee'
    }
}
/*
var newEmployee = new Employee("Alvin", 12, "test@gmail.com"); 
console.log(newEmployee); 
console.log(newEmployee.getName(), newEmployee.getEmail()); 
*/ 
module.exports = Employee; 