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
      // Validation to make sure I get 1~3 characters
      validate: function(input) {
        const length = input.trim().length;
        if (length === 0) {
          return 'Please enter at least 1 character.';
        } else if (length > 3) {
          return 'Please enter no more than 3 characters.';
        }
        return true;
      }
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

      // Helper method to add text.
  function addText(shape, text, color){
    // y values are determined based on logo shape.
    yVal = shape ==='Triangle' ? 160: shape==='Cicle' ? 125 :115;
    return `<text x="150" y="${yVal}" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`

  }



   // Initiate function.
   init();