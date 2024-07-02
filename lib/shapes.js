// Make a shape class for all shapes.
class Shape{
    render(){
        console.log( new Error("Render method hasn't been overridden"));
    }

    // Method that applies for all shapes
    setColor(color){
        this.color = color;
    }
}

// Triangle shape with it's own render function
class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Circle shape with it's own render function
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="90" fill = "${this.color}"/>`;
    }
}

// Square shape with it's own render function
class Square extends Shape{
    render(){
       return `<rect x="60" y="10" width="180" height="180" fill = "${this.color}"/>`
    }

}

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
};