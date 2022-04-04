


const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const teamArr = [];
console.log("Welcome to the team generator!");

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
                if (emailInput !== ""){
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
                if (officeNumberInput !== ""){
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
        let intern = new Intern(answer.name, answer.id, answer.email, "Intern", answer.school);
        teamArr.push(intern);
        createTeam();
    })
}

const writeToFile = data => {
    const generatedHTML = generateHTML(data);
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated.html', generatedHTML, err=> {
            if (err) {
                reject(err);
            }
            resolve ({
                ok: true,
                message: 'Team Generated!'
            });
        });
    });
};

function teamArrToHTML() {
    const cardArr = teamArr.map(o => {
        switch (o.role) {
            case 'Manager':
                return `
                <div class="col-md-6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='manager-card'>
                            <div class='card-header bg-dark text-light'> 
                                <h2><i class="fas fa-mug-hot"></i> Manager</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class=list-group-item"><h3>Name: ${o.getName()}</h3></li>
                                <li class=list-group-item">Id: ${o.getId()}</li>
                                <li class=list-group-item">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class=list-group-item">Office Number: ${o.getOffice()}</li>
                            </ul>
                        </div>
                    </div> 
                </div>
                `

            case 'Engineer':
                return `
                <div class="col-md=6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='engineer-card'>
                            <div class='card-header bg-dark text-light'>
                                <h2><i class="fas fa-glasses"></i> Engineer</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class=list-group-item"><h3>Name: ${o.getName()}</h3></li>
                                <li class=list-group-item">Id: ${o.getId()}</li>
                                <li class=list-group-item">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class=list-group-item">Github: <a href="https://github.com/${o.getGithub()}" target="_blank">${o.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                `

            case 'Intern':
                return `
                <div class="col-md-6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='intern-card'>
                            <div class='card-header bg-dark text-light'>
                                <h2><i class="fas fa-user-graduate"></i> Intern</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class=list-group-item"><h3>Name: ${o.getName()}<h3></li>
                                <li class=list-group-item">Id: ${o.getId()}</li>
                                <li class=list-group-item">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class=list-group-item">School: ${o.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            default:
                console.log('cardArr finished?')
                return results
        }
    });
    return cardArr;
}

const generateHTML = () => {
    const results = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet" />
    </head>
    
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
            </div>
        </header>
        <main class="container my-5">
            <div class="row">
                ${teamArrToHTML().join('')}
            </div>
        </main>
    </body>
    </html>
    `;

    return results;
}

function createTeam(){
    inquirer.prompt([
        {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "None"
        ]
        }
    ]).then(answer => {
        switch(answer.role){
            case "Manager":
                addManager();
                break;

            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            default:
                console.log(teamArr);
                writeToFile(teamArr); 
        }; 
    });

}

createTeam(); 