//Child Class[Engineer] inherits properties and method from the parent class[EMployee]

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, role, github){
        //to inherit the properties from parent class use super 
        super(name, id, email, role);
        this.github = github;
    }

    getGithub () {
        return this.github 
    }

    getRole() {
        //Overriding the parent method from 'Employee' to 'Engineer'
        return 'Engineer';
    } 
}


module.exports = Engineer; 