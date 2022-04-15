// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput(){


  return inquirer.prompt([
       {
           type: 'input',
           message: 'What is the title of your project?',
           name: 'title'
       },
       {
           type: 'input',
           message: 'Please provide a description of your project',
           name: 'description',
       },
       {
           type: 'input',
           message: 'How do I use this?',
           name: 'usage',
       },
       {
           type: 'input',
           message: 'How do I install this?',
           name: 'installation',
       },
       {
           type: 'list',
           message: 'Please select the licenses that are used for this project?',
           name: 'license',
           choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License","Eclipse Public License 1.0"]
       },
       {
           type: 'input',
           message: 'How can I contribute? ',
           name: 'contribute',
       },
       {
           type: 'input',
           message: 'What is your username?',
           name: 'username',
       },
       {
           type: 'input',
           message: 'What is your email?',
           name: 'email',
       }
   ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err)=> err ? console.error(err): console.log(`${fileName}.md has been granted.`))
}

// TODO: Create a function to initialize app
async function init() {
    let input = await userInput();
    writeToFile((input.fileName),(generateMarkdown(input)));
}

// Function call to initialize app
init();
