var friends = ["1", "2", "3", "4", "5"];
var locations = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var weapons = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "W13", "W14", "W15", "W16", "W17", "W18", "W19", "W20"];
for(var i = 0; i < 100; i++) {
    var heading = document.createElement('h3');
    heading.className = `${i+1}`;
    var text = document.createTextNode(`Accusation ${i+1}`);
    heading.appendChild(text);
    heading.addEventListener('click', function(e) {
        id = Number(e.target.className);
        alert(`${e.target.innerText}: I accuse ${friends[id % friends.length]}, with the ${weapons[id % weapons.length]} in the ${locations[id % locations.length]}!`);
    });
    document.body.appendChild(heading);
}