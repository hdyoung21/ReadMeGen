const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
//  require some other file/function, to which you pass in answers object
const generateReadmeSyntax = require('./readmeTemplate');

const readmeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your repository\'s title?',
        validate: (title) => {
            if(!title) {
                console.log('Please enter a non-blank repo title!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Under what license are you distributing this app?',
        choices: ['MIT License', 'Some other license', 'None'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.'
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do you install it?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this?'
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Contact for additional information'
    }
]


inquirer
  .prompt(readmeQuestions)
  .then((answers) => {
    console.log('My answers object is', answers);
    // once you have all your answers, pass them into the imported function generateReadmeSyntax
    const finalReadMeContent = generateReadmeSyntax(answers);
    console.log('Final content is ', finalReadMeContent);
    // once you capture the returned README content in a variable,
    // pass it into the fs writeFile method as the data argument
    fs.writeFile('something here', data, )
    fs.writeFile(path.join(__dirname, 'README.md'), finalReadMeContent, err => { 
      if(err) throw err;
      console.log('Writing to file is complete and successful. have a look');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

