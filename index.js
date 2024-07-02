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
