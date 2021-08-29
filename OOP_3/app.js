let mainDiv = document.getElementById('area');
let rectangleBtn = document.getElementById('rectBtn');
let sqBtn = document.getElementById('sqBtn');
let radBtn = document.getElementById('radBtn');
let triBtn = document.getElementById('triBtn');

rectangleBtn.addEventListener('click', function() {
    let height = document.getElementById('rect1').value;
    let width = document.getElementById('rect2').value;
    if(height > 300) { height = 300; }
    if(width > 300) { width = 300; }
    let rect = new Rectangle(width, height)
});

sqBtn.addEventListener('click', function() {
    let side = document.getElementById('sq').value;
    if(side > 300) { side = 300; }
    let sq = new Square(side);
});

radBtn.addEventListener('click', function() {
    let rad = document.getElementById('rad').value;
    if(rad > 300) { rad = 300; }
    let cir = new Circle(rad);
});

triBtn.addEventListener('click', function () { 
    let tLength = document.getElementById('tri').value;
    if(tLength > 300) { tLength = 300; }
    let t = new Triangle(tLength);
});

class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.perimeter = 0;
        this.radius = 0;
        this.div = document.createElement('div');
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        this.div.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        this.div.style.left = `${Math.floor(Math.random() * 500)}px`;
        this.div.style.top = `${Math.floor(Math.random() * 500)}px`;
        this.div.style.position = "absolute";
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.area = this.width * this.height;
        mainDiv.appendChild(this.div);
    }
}

class Square extends Shape {
    constructor(length) {
        super(length, length);
        this.area = this.width * this.height;
        mainDiv.appendChild(this.div);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius*2, radius*2);
        this.radius = radius;
        this.area = 3.14 * this.radius * this.radius;
        this.div.style.borderRadius = "50%";
        mainDiv.appendChild(this.div);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(0, 0);
        this.height = Math.floor(height);
        this.width = this.height;
        this.area = (this.height * this.width) / 2;
        this.div.style.borderLeft = `${this.height}px solid transparent`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.div.style.borderBottom = `${this.width}px solid rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        this.div.style.backgroundColor = '';
        mainDiv.appendChild(this.div);
    }
}
