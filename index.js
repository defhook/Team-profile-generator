/* 
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

*/
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');

function startPrompt() {
    console.log("Welcome to team generator ");
    inquirer.prompt([
        {
            name: "managerName",
            type: "text",
            message: "What is the name of your manager ?"
        }, 
        {
            name: "managerID",
            type: "text",
            message: "What is the ID of your manager ?"
        },
        {
            name: "managerName",
            type: "text",
            message: "What is the name of your manager ?"
        }
        , {
            name: "managerName",
            type: "text",
            message: "What is the name of your manager ?"
        }
    ]).then(answer => {
        console.log(answer);
         var newManager = new Manager(answer.managerName, answer.managerID); 
         console.log(newManager); 

         //ask q fro enigneer, intern or generate html 
         //based onthe ans call different  
         
    })
}

function askEngineerQ(){
    inquirer.prompt([
        {
            name: "managerName",
            type: "text",
            message: "What is the name of your manager ?"
        }, 
        {
            name: "managerID",
            type: "text",
            message: "What is the ID of your manager ?"
        },
        {
            name: "managerName",
            type: "text",
            message: "What is the name of your manager ?"
        }
        , {
            name: "managerName",
            type: "text",
            message: "What is the name of your manager ?"
        }
    ]).then(answer => {
        console.log(answer);
         var newManager = new Manager(answer.managerName, answer.managerID); 
         console.log(newManager); 
    })
    
}
startPrompt(); 
