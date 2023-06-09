class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="130" font-size="56" text-anchor="middle" fill="${textColor}">${text}</text>`
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<polygon points="40, 145 150, 5 260, 145" fill="${this.shapeColor}"/>`
    }
    setColor(color) {
        this.shapeColor = color
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<polygon points="85 177 85, 47 215, 47 215, 177" fill="${this.shapeColor}"/>`
    }
    setColor(color) {
        this.shapeColor = color
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="110" r="80" fill="${this.shapeColor}"/>`
    }
    setColor(color) {
        this.shapeColor = color
    }
}

module.exports = {Triangle, Square, Circle}



