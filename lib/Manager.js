//Child Class[Manager] inherits properties and method from the parent class[EMployee]

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, role, officeNumber){
        //to inherit the properties from parent class use super 
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        //Overriding the parent method from 'Employee' to 'Manager'
        return this.officeNumber;
    } 
}

// var newManager = new Manager("Starbuck", 1, "coffee@bean.com",34); 
// console.log(newManager.getRole()); 

module.exports = Manager; 