const {Triangle, Square, Circle} = require('./shapes')

describe('Triangle', () => {
    it('returns a polygon SVG element with 3 points and a fill color when it\'s render() method is called', () => {
        const shape = new Triangle()
        let newColor = "gold"
        shape.setColor(newColor);
        expect(shape.render()).toEqual(`<polygon points="40, 145 150, 5 260, 145" fill="${newColor}"/>`)
    })
})

describe('Circle', () => {
    it('returns a polygon SVG element with 3 points and a fill color when it\'s render() method is called', () => {
        const shape = new Circle()
        let newColor = "silver"
        shape.setColor(newColor);
        expect(shape.render()).toEqual(`<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="110" r="80" fill="${newColor}"/>`)
    })
})

describe('Square', () => {
    it('returns a polygon SVG element with 4 points and a fill color when it\'s render() method is called', () => {
        const shape = new Square()
        let newColor = "purple"
        shape.setColor(newColor);
        expect(shape.render()).toEqual(`<polygon points="85 177 85, 47 215, 47 215, 177" fill="${newColor}"/>`)
    })
})