class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width
    }
    perimeter() {
        return rect_perimeter(this.width, this.height)
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }
    perimeter() {
        return this.a + this.b + this.c
    }
}


function rect_perimeter(a, b) {
    return 2 * a + 2 * b
}

function rect_perimeter2(r) {
    return 2 * r.width + 2 * r.height
}

function triangle_perimeter(a, b, c) {

}


var r = new Rectangle(1, 2)
var rrr = r
var t1 = new Triangle(3, 4, 5)

// console.log(r.height)
// console.log(r.width)
// console.log(r.area())

console.log(r.perimeter())
console.log(rect_perimeter2(r))

console.log(rect_perimeter(r.width, r.height))
console.log(t1.perimeter())