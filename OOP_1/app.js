const MAX = 800;
let container = document.getElementById('sqCont');
class Square {
    constructor(x, y, z) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${z}px`;
        this.div.style.height = `${z}px`;
        this.div.addEventListener('click', () => {
            this.updateColor();
            this.updateLocation();
        })
        this.updateColor();
        container.appendChild(this.div);
    }

    updateLocation() {
        let x = randomVal(0, MAX);
        let y = randomVal(0, MAX);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
    }

    updateColor() {
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
        this.div.style.backgroundColor = randomColor;
    }

}

let sqButton = document.getElementById('sqBtn');
sqButton.addEventListener('click', InsertSquare);
function InsertSquare() {
    let x = randomVal(0, MAX);
    let y = randomVal(0, MAX);
    let z = randomVal(25, 100);
    let sq = new Square(x, y, z);
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

