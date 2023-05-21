const inquirer = require('inquirer')
const { generateInnerSVG } = require('./lib/generateSVG')
const fs = require('fs');

// Get user input
inquirer
    .prompt([
        {type: 'input',
        message: 'What text should go in the icon? (up to 3 letters)',
        name: 'logoText',
        // Make logo text completely uppercase
        filter: (ans) => {
            return ans.toUpperCase()
        } 
        },
        {type: 'input',
        message: 'What color should the text be?',
        name: 'textColor'
        },
        {type: 'list',
        message: 'What shape should the logo be?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
        },
        {type: 'input',
        message: 'What color should the shape be?',
        name: 'shapeColor'
        }
    ])
    .then(results => {
        // Get inner SVG shape and text
        let innerSVG = generateInnerSVG(results.logoText, results.textColor, results.shapeColor, results.shape)

        // Total SVG text; strange indentation to help with file indentation & formatting
        let totalSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${innerSVG}
</svg>`
        fs.writeFile('./examples/logo.svg', totalSVG, err => {
            err? console.error(err) : console.log("\nGenerated logo.svg")
        })
    })
    .catch(err => {
        console.log(err)
        console.log('Something went wrong. Please try again once errors are resolved')
    })


    