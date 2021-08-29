let id = 0;
let btn = document.createElement('button');
let text = document.createTextNode("Add Square")
btn.appendChild(text);
document.body.appendChild(btn);
document.body.appendChild(document.createElement('hr'));
btn.addEventListener('click', InsertSquare);
class Die {
    constructor() {
        this.value = this.roll();
        this.div = document.createElement('div');
        this.div.className = 'dice';
        this.div.id = `d${id}`;
        this.div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        let heading = document.createElement('h1');
        heading.innerText = String(this.value);
        this.div.appendChild(heading);
        this.div.addEventListener('click', (e) => {
            let eventC = e.target;
            if(String(e.target).split(' ')[1] == "HTMLHeadingElement]") {
                eventC = e.target.parentElement;
            }
            eventC.innerHTML = `<h1>${this.roll()}</h1>`;
            eventC.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
        this.div.addEventListener("dblclick", function(e) {
            text = e.target.innerText;
            let number = Number(text);
            if(number%2 == 0) {
                e.target.outerHTML = "";
            } else {
                if(String(e.target.previousSibling).includes("HTMLDivElement")){
                    e.target.previousSibling.outerHTML = "";
                } else {
                    console.log("%c No previous sibling to delete!", 'background: #fff; color: #ff0000');
                }
            }
        });
        document.body.appendChild(this.div);
    }

    roll() {
        return Math.floor(Math.random() * 7);
    }
};

function InsertSquare() {
    let sq = new Die();
    id++;
}