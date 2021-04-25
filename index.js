// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// Defining the prompt function
const {prompt} = inquirer;
const generateMarkdown = require('./utils/generateMarkdown.js');

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message: 'Please enter the description of your project'
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps to install your project ?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'please explain the usage of your app'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'enter the licenses',
        choices: ['MIT','apache-2.0','gpl-2.0']
        
    },
    {
        type: 'input',
        name: 'username',
        message:'If you would like to contact me you can reach me from this link.'
    }

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if(err) {
            throw err;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers => {

    const response = generateMarkdown(answers)
    writeToFile('README.md',response);
   
    console.log('Readme.md is being generated...')
    })
}

// Function call to initialize app
init();



 