const {Triangle, Square, Circle} = require('./shapes')


function generateInnerSVG(text, textColor, shapeColor, shape) {
    let myShape
    
    switch(shape) {
        case 'circle':
            myShape = new Circle(text, textColor, shapeColor)
            break
        case 'triangle':
            myShape = new Triangle(text, textColor, shapeColor)
            break 
        case 'square':
            myShape = new Square(text, textColor, shapeColor)
            break
    }

    let innerSVG = `${myShape.render()}
    ${myShape.text}`

    return innerSVG
}


module.exports = { generateInnerSVG }