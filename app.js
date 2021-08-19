var rows = document.querySelectorAll(".row");
var items = [rows[0].querySelector(".left"), rows[0].querySelector(".middle"), rows[0].querySelector(".right"), rows[1].querySelector(".left"), rows[1].querySelector(".middle"), rows[1].querySelector(".right"), rows[2].querySelector(".left"), rows[2].querySelector(".middle"), rows[2].querySelector(".right")];
var checks = ['A','B','C','D','E','F','G','H','I'];
var count = 0;
var player = 'X';
var heading = document.querySelector('#end');

function checkEmpty(check) {
    return check == '';
}

function clearAll() {
    setTimeout(function () {
        for(let i = 0; i < items.length; i++){
            items[i].innerHTML = ``;
            count = 0;
            checks = ['A','B','C','D','E','F','G','H','I'];
            player = 'X';
            heading.textContent = "";
        }
    }, 5000);    
}

function checksConfirm() {
    count++;
    if(checks[0] == checks[1] && checks[1] == checks[2]) {
        heading.textContent = `${checks[0]} Wins`;
        clearAll();
    } else if(checks[3] == checks[4] && checks[4] == checks[5]) {
        heading.textContent = `${checks[3]} Wins`;
        clearAll();
    } else if(checks[6] == checks[7] && checks[7] == checks[8]) {
        heading.textContent = `${checks[7]} Wins`;
        clearAll();
    } else if(checks[0] == checks[3] && checks[3] == checks[6]) {
        heading.textContent = `${checks[0]} Wins`;
        clearAll();
    } else if(checks[1] == checks[4] && checks[4] == checks[7]) {
        heading.textContent = `${checks[1]} Wins`;
        clearAll();
    } else if(checks[2] == checks[5] && checks[5] == checks[8]) {
        heading.textContent = `${checks[2]} Wins`;
        clearAll();
    } else if(checks[0] == checks[4] && checks[4] == checks[8]) {
        heading.textContent = `${checks[0]} Wins`;
        clearAll();
    } else if(checks[2] == checks[4] && checks[4] == checks[6]) {
        heading.textContent = `${checks[2]} Wins`;
        clearAll();
    } else if(count == 9) {
        heading.textContent = `DRAW`;
        clearAll();
    }
}

for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click", function(e) {
        e.target.innerHTML = `<h1>${player}</h1>`; 
        checks[i] = player;
        checksConfirm();
        if(player=='X') {
            player = 'O';
        } else {
            player = 'X';
        }
    })
}

