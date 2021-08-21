let heading1 = document.createElement("h1");
let text = document.createTextNode("This is an h1!");
heading1.appendChild(text);
heading1.className = "h1";

let heading2 = document.createElement("h2");
text = document.createTextNode("This is an h2!");
heading2.appendChild(text);
heading2.className = "h2";

let heading3 = document.createElement("h3");
text = document.createTextNode("This is an h3!");
heading3.appendChild(text);
heading3.className = "h3";

let heading4 = document.createElement("h4");
text = document.createTextNode("This is an h4!");
heading4.appendChild(text);
heading4.className = "h4";

let heading5 = document.createElement("h5");
text = document.createTextNode("This is an h5!");
heading5.appendChild(text);
heading5.className = "h5";

let heading6 = document.createElement("h6");
text = document.createTextNode("This is an h6!");
heading6.appendChild(text);
heading6.className = "h6";

let colors = ["red", "yellow", "blue", "brown", "orange", "green", "violet", "magenta"]
heading1.addEventListener('dblclick', function() {
    heading1.style.color = colors[Math.floor(Math.random()*colors.length)];
});

let firstDiv = document.createElement("div");
firstDiv.className = "header-container";
firstDiv.appendChild(heading1);
firstDiv.appendChild(heading2);
firstDiv.appendChild(heading3);
firstDiv.appendChild(heading4);
firstDiv.appendChild(heading5);
firstDiv.appendChild(heading6);

let list = []
let btn = document.getElementById("btn");
btn.addEventListener('click', function() {
    let listItem = document.createElement('h3');
    text = document.createTextNode(`This is list item ${list.length+1}`);
    listItem.appendChild(text);
    listItem.addEventListener('dblclick', function() {
        listItem.style.color = colors[Math.floor(Math.random()*colors.length)];
    });
    list.push(listItem);
    firstDiv.appendChild(listItem);
})


document.body.appendChild(firstDiv);