/*
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

*/
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const teamArr = [];

function addManager () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: answer => {
                if (answer !== ""){
                    return true;
                } else {
                    console.log("Please provide a manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this manager's ID?",
            validate: answer => {
                if (answer !== ""){
                    return true;
                } else {
                    console.log("Please provide the manager's ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this manager's e-mail?",
            validate: emailInput => {
                if (answer !== ""){
                    return true;
                } else {
                    console.log("Please provide the manager's e-mail!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is this manager's office number?",
            validate: officeNumberInput => {
                if (answer !== ""){
                    return true;
                } else {
                    console.log("Please provide the manager's office number!")
                    return false;
                }
            }
        },
    ]).then(answer => {
        let manager = new Manager(answer.name, answer.id, answer.email, "Manager", answer.officeNumber);
        teamArr.push(manager);
        createTeam();
    })
}

function addEngineer () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== ""){
                    return true;
                } else {
                    console.log("Please provide an engineer's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the enginer's ID?",
            validate: answer => {
                if (answer !== ""){
                    return true;
                } else {
                    console.log("Please provide the engineer's ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's e-mail?",
            validate: emailInput => {
                if (emailInput !== ""){
                    return true;
                } else {
                    console.log("Please provide the engineer's e-mail!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput !== ""){
                    return true;
                } else {
                    console.log("Please provide the engineer's GitHub username!")
                    return false;
                }
            }
        },
    ]).then(answer => {
        let engineer = new Engineer(answer.name, answer.id, answer.email, "Engineer", answer.github);
        teamArr.push(engineer);
        createTeam();
    })
}

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern name?',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    } else {
                        console.log("Please provide the intern name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern ID?',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    } else {
                        console.log("Please provide the intern ID!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern e-mail?',
                validate: emailInput => {
                    if (emailInput !== "") {
                        return true;
                    } else {
                        console.log("Please provide the intern e-mail!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern school name?',
                validate: schoolInput => {
                    if (schoolInput !== "") {
                        return true;
                    } else {
                        console.log("Please provide the intern name!")
                        return false;
                    }
                }
            },
        ]).then(answer => {
            let intern = new Intern(answer.name, answer,id, answer.email, "Intern", answer.school);
            teamArr.push(intern);
            createTeam();
        })
    };
// function startPrompt() {
//     console.log("Welcome to the team generator ");
//     inquirer.prompt([
//         {
//             name: "list",
//             type: "role",
//             message: "What type of employee would you like to add?",
//             choices: [
//                 "Engineer",
//                 "Intern",
//                 "Manager",
//                 "None"
//             ]
//         }, 
        
// }


//startPrompt();
