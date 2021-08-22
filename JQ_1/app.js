$('body').append('<div></div>');
$("#eform").submit(function(e) {
    e.preventDefault();
});
$('#btnSubmit').click(function(e) {
    alert('YES!');
});
$('#name').keyup(function (e) { 
    $('#formSubmit').attr('disabled', false);
});
$('#formSubmit').click(function(e) {
    alert($('#name').val());
    $('div').append(`<h2>${$('#name').val()}<h2>`);
    $('div').children().last().remove();
})
$(document).on("mouseover", 'h2', function () {
    let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    $('h2').css({"background-color": color, "border-radius": "5px"});
});

$(document).on("mouseleave", 'h2', function () {
    $('h2').css({"background-color": "white", "border-radius": "0"});
});