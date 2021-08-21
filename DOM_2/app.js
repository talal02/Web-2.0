let btn = document.createElement('button');
let text = document.createTextNode("Add Square")
btn.appendChild(text);
document.body.appendChild(btn);
document.body.appendChild(document.createElement('hr'));

let id = 0;
btn.addEventListener('click', function() {
    let divClicked = document.createElement('div');
    divClicked.className = "black";
    divClicked.id = `${id}`
    let h1 = document.createElement('h1');
    text = document.createTextNode(`${id}`);
    h1.appendChild(text);
    divClicked.appendChild(h1);
    id++;
    divClicked.addEventListener("dblclick", function() {
        text = divClicked.innerText;
        let number = Number(text);
        if(number%2 == 0) {
            divClicked.outerHTML = "";
        } else {
            if(String(divClicked.previousSibling).includes("HTMLDivElement")){
                divClicked.previousSibling.outerHTML = "";
            } else {
                alert("No previous sibling to delete!");
            }
        }
    });
    document.body.appendChild(divClicked);
});

