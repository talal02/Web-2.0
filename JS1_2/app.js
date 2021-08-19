// LAB 1
/*
var name = "Talal Ahmed";

var states = 56;

var result = 5 + 4;

function sayHello() {
    alert("Hello World!!!");
}

function checkAge(name, age) {
    if(age < 21) {
        console.log(`Sorry ${name}, you aren't old enough to view this page!`);
    }
}

function getLength(anyString) {
    return anyString.length;
}

sayHello();

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 17);
checkAge("John", 17);

var vegetables = ["A", "B", "C", "D", "E"];

for(var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

var pet = {
    name: "Jammy",
    breed: "Bully"
}

console.log(pet);

var persons = [
    {name: "Charles", age: 21},
    {name: "Abby", age: 27},
    {name: "James", age: 18},
    {name: "John", age: 17},
];

for(var i = 0; i < persons.length; i++) {
    checkAge(persons[i]["name"], persons[i]["age"]);
}

if(getLength('Hello World') % 2 == 0) {
    console.log("The world is nice & even!");
} else {
    console.log("The world is an odd place!");
}
*/
// LAB 2
var friends = ['Ahmed', 'Ali', 'Mehmood', 'Faizan', 'Niazi'];
var paragraphs = document.querySelector(".friend").querySelectorAll("p")

for(var i = 0; i < friends.length; i++) {
    var text = `${friends[i]}:\n`;
    for(var j = 99; j >= 1; ) {
        text += `<p>${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, `
        if(--j == 0) {
            text += `no more lines of code in the file\n`;
        } else {
            text += `${j} lines of code in the file</p>`;
        }
    }
    paragraphs[i].innerHTML = text;
}

