/* under div with book-list selector, get first element of list with id = name */

// var books = document.querySelector('#book-list li .name')

/* under div with book-list selector, get all lists with id = name */

// var books = document.querySelectorAll('#book-list li .name')
/* Array.from(books).forEach(element => {
    element.inner
}); */
$("#x").keyup(function (e) {
    setSum()
});
$("#y").keyup(function (e) { 
    setSum()
});

function setSum(){
    let x = $("#x").val()
    let y = $("#y").val()
    let sum = parseFloat(parseFloat(x)+parseFloat(y))
    $("#z").val(sum);
}


