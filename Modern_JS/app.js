let  favMovie = (movie = "The Room", name = "Tommy Wiseau") => console.log(`My name is ${name} and my favourite movie is ${movie}`);

favMovie();
favMovie("Harry Potter", "Talal Ahmed");


let getFirstName = (name) => {
    name = name.split(' ');
    return name[0];
};

let getFirstNameConsise = name => name.split(' ')[0];

console.log(getFirstName("Talal Ahmed"));
console.log(getFirstNameConsise("Talal Ahemd"));

function itis(name, location, favFood) {
    console.log(`${name}, ${location}, ${favFood}`);
}

let arr = ["Talal", "Islamabad", "MithiMithi"];
itis(...arr);