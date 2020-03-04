const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const generate = require ('./utils/generateMarkdown')

const questions = [
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
    default: 'username'
},
{
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    default: 'Title'
},
{
    type: 'input',
    message: 'Add a description for your project.',
    name: 'description',
    default: 'Description'
},
{
    type: 'input',
    message: 'What command to install the dependencies?',
    name: 'installation',
    default: 'Installation'
},
{
    type: 'input',
    message: 'What command to run the testing?',
    name: 'tests',
},
{
    type: 'input',
    message: 'What should the user know to use this page.',
    name: 'usage',
    default: 'Usage'
},
{
    type: 'input',
    message: 'How would the user be able to contribute?',
    name: 'contributing',
},
{
    type: 'input',
    message: 'License',
    name: 'license',
    default: 'MIT'
},
];

function writeToFile(data) {
    console.log(generate)
    generate(data).then(newData=>{
        console.log(newData)
    })

        fs.writeFile("README.md", JSON.stringify(data), function (err){
            if (err) throw (err)
        })

}

function init() {
  console.log(questions)
  inquirer.prompt(questions).then(data => {
    //   console.log(data)

        writeToFile(data)
  })






}

init();

