
/* remover los items del carrito */
var removeButton = document.getElementsByClassName('btn-danger');
for (var i = 0; i < removeButton.length; i++) {
    
    var button = removeButton[i];
    button.addEventListener('click', removeCartItem)
    
}
function removeCartItem(event) {
    let buttonClick = event.target;
    let father = buttonClick.parentNode.parentNode
    buttonClick.parentNode.parentNode.remove()
    updateCartTotal()
}

/* se actualizan los precios */
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


    
/* se agregan los items al carrito */
var buyButton = document.getElementsByClassName('buyButton')

for (let button of buyButton){
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    var button = event.target;
    let child = event.target;
    let father = child.parentNode.parentNode.parentNode.parentNode.parentNode;
    let img = father.querySelector('img').src;
    let album = father.querySelector('h1').textContent;
    let price = father.querySelector('p').textContent;
    addItemToCart(img, album, price)
    updateCartTotal()
}

/* se impide que se agreguen items duplicados */
function addItemToCart(img, album, price){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemsNames = cartItems.getElementsByClassName('album-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == album){
            alert("Este item ya fue agregado al carrito de compras")
            return
        }
    }
    var cartRowContent = `
                <div class="cart-item cart-column">
                      <img src="${img}"  class="cart-image-item">
                      <span class="album-title">${album}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column"> 
                      <input type="number" value="1" class="cart-quantity-input">
                      <button class="btn btn-danger cart-quantity-button" type="button"><i class="bi-trash"></i></button>
                </div>`
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    updateCartTotal()
}

/* se simula una compra */
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchase)
function purchase () {
    alert('Gracias por tu compra')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal()
}