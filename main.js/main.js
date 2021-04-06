let count = 1
let inp = $('#inp-name')

console.log(inp.val())
let name = inp.val()

$('#btn-submit').on('click', function(){
    $('.wrapper').css('display', 'none')
    $('.name-profile').append(inp.val())
})
$('.name-profile').val(inp.val())

$('svg').on('click', function(e){
    $('#likes1').text(`${count++}`)
})