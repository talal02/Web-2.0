$('div').mouseover(function () { 
    let color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    $('div').css({"background-color": color});
});

$('div').mouseleave(function() {
    $('div').css({"background-color": "white"});
});

$('body').append('<button id="b1">Click Me</button>');

$(document).on('click', '#b1', function() {
    alert("Hehe Boy!");
});

$('body').append('<textarea name="input1" id="input1" cols="30" rows="3"></textarea>');
$('body').append('<button id="b2">Submit</button>');

$(document).on('click', '#b2', function() {
    alert($('#input1').val());
});

$('body').append('<p>4.	Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you dont have to show the code for just red once you get random working).</p>');

$(document).on('click', 'p', function() {
    let color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    $('p').css({"color": color}); 
});