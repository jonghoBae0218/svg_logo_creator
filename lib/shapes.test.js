const {Triangle, Circle, Square } = require('./shapes.js');

// Test for Shape class
describe('Shape', () =>{
    describe('triangle', () =>{
        it("Should show blue triangle", ()=>{
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })

    describe('circle', () =>{
        it("Should show red circle", () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill = "red"/>');
        })
    })

    describe('square', () =>{
        it("Should show cyan square", () =>{
            const shape = new Square();
            shape.setColor("cyan");
            expect(shape.render()).toEqual('<rect x="60" y="10" width="180" height="180" fill = "cyan"/>');
        })
    })
})