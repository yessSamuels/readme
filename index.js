const inquirer = require('inquirer');
const fs = require("fs")

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title of Project?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'About Prject?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install this project?',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usageInformation',
    },
    {
      type: 'input',
      message: 'What are the guidelines for this project?',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'How do you report any issues?',
      name: 'issues',
    },
    {
      type: 'input',
      message: 'What are the license you are using?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your Email?',
      name: 'email',
    },


  ])
  .then((response) => {
    const title = response.title.split(" ").join("-");
    fs.appendFile('log.md', `## ${response.username}\n ${response.password}\n${response.confirm}`, (err) =>
  
  err ? console.error(err) : console.log('Commit logged!')
);
  });
