
const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
        type: 'input',
        message: 'What do you want to call your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please description your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What are the instructions for this project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How can you use this project?',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Select the license you are covered by?',
        choices: ['Apache License 2.0', 'GNU General Public License 3.0', 'MIT License'],
        name: 'license'
    },
];
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,
        `# ${data.title}
![](https://img.shields.io/badge/license-${data.license}-green?style=for-the-badge&logo=github)
## Description
${data.description}

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contributing](#Contributing)

[Questions](#Questions)

## Installation
${data.installation}
## Usage
${data.usage}

## License
This project is covered under the ${data.license}

## Questions
If you have any additional questions, contact me by email or GitHub.

Email: ${data.email}

GitHub: https://github.com/${data.github}`,
        (err) => err ? console.error(err) : console.log("Thanks you for your information, your README has been generated!")
    );
}
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(answers.title, answers);
    });
}
init();