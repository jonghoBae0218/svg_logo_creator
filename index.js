// Get dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square } = require('./lib/shapes');


// Question prompt
const questions = [
    {
      type: 'input',
      name: 'logoText',
      message: 'Give logo characters(Up to 3): ',
      
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Give text color(color or hexadecimal): ',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Give shape of for installation',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Give shape color',
    },
  ];


  function init(){
    inquirer
    .prompt(questions)
    .then((answers) =>{
        writeToFile('logo.svg', answers);
    })
  }

  // Function that writes file
  function writeToFile(fileName, answers){
    fs.writeFile(fileName, formatSVG(answers), (err) => 
        err? console.error(err) : console.log('Generated logo.svg')
    );
  }

    // Helper method to writing files.
    function formatSVG(answers){
        let returnFile =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> \n`;
        let shapeObject;
        switch(answers.shape){
            case 'Triangle':
                shapeObject = new Triangle();
                break;
    
            case 'Circle':
                shapeObject = new Circle();
                break;
    
            case 'Square':
                shapeObject = new Square();
                break;
        }
        shapeObject.setColor(answers.shapeColor);
        returnFile += shapeObject.render();
    
        returnFile += "\n" + addText(answers.shape, answers.logoText, answers.textColor);
    
    
        returnFile += '\n</svg>';
        return returnFile;
      }


   // Initiate function.
   init();