var removeButton = document.getElementsByClassName('btn-danger');


for (var i = 0; i < removeButton.length; i++) {
    let button = removeButton[i]
    button.addEventListener('click', function(event) {
        let buttonClick = event.target;
        let father = buttonClick.parentNode.parentNode.parentNode
        buttonClick.parentNode.parentNode.remove()
    })
}


/* 
function updateTotals() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = document.getElementsByClassName('cart-row');
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        console.log(price)
    }
}
*/

    

var buyButton = document.getElementsByClassName('buyButton')

for (let button of buyButton){
    button.addEventListener('click', addToChart)
}

function addToChart(e){
    let child = e.target;
    let father = child.parentNode.parentNode.parentNode.parentNode.parentNode;
    let img = father.querySelector('img').src;
    let artist = father.querySelector('h4').textContent;
    let album = father.querySelector('h1').textContent;
    let price = father.querySelector('p').textContent;


    console.log(img, artist, album, price);

}