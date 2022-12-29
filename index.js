// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer");
const { type } = require('os');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "what is the title of the Project",
    name: "title"
},

{
    type: "input",
    message: "what is the project about? give detailed description",
    name: "description"
}, {
    type: "list",
    name: "license",
    message: "What license will you project use?",
    choices: ["MIT", "Apache","Boost","Monzilla","IBM", "No License"]
}
   { type: "list",
     message:"table of content",
     name: "table of content",
     choices: ["Introduction","installation","Usages","Credit","collaboration","License"]
   }
   {type:"input",
     message:"What does the user need to install in order to run the app?",
     name:"nodejs"
    }
{
  type:"input,",
     message:"How is the app used? provide instructions",
     name:"terminal"
   }
{   type:"input",
     message:"who was involved with this project?",
     name:"N/A"
}
{
     message:"What commands are needed to test this app?",
     name:"node.js"
}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(stuffUserSaid=> {
        console.log(stuffUserSaid)
    
        

 }

// Function call to initialize app
//init();


//function init() {
   // inquirer.prompt(questions).then(stuffUserSaid=> {
      //  console.log(stuffUserSaid)
      //  let template = `<!DOCTYPE html>
      //  <html lang="en">
       // <head>
           // <meta charset="UTF-8">
           // <meta http-equiv="X-UA-Compatible" content="IE=edge">
           // <meta name="viewport" content="width=device-width, initial-scale=1.0">
           // <title>Document</title>
       /// </head>
        //<body>
           // <h1>Hello World </h1>
       // </body>
       // </html>`
       // fs.writeFile("poop.html",template,err=>{
         //   if (err) {
              //  console.log(err)
            //} else{
               // console.log("Success!")
            