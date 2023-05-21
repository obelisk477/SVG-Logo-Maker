const inquirer = require('inquirer')
const { generateInnerSVG } = require('./lib/generateSVG')

inquirer
    .prompt([
        {type: 'input',
        message: 'What text should go in the icon? (up to 3 letters)',
        name: 'logoText',
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
        let innerSVG = generateInnerSVG(results.logoText, results.textColor, results.shapeColor, results.shape)
        let totalSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${innerSVG}</svg>`
        console.log(totalSVG)
    })

