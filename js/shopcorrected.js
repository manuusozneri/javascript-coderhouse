if (document.readyState == 'loading') {
    $(document).ready(function() {
        console.log('dom ready')
        ready();
    })
} else {
    ready();
}

function ready() {
    var removeCartItemButton = document.getElementsByClassName('btn-danger');
    
    for (var i = 0; i < removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem) 
    }
 
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        $(input).change(inputChanged);
    }

    var addToCartButtons = document.getElementsByClassName('buyButton')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked(){
    alert("Gracias por tu compra")
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function inputChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target;
    let child = event.target;
    let father = child.parentNode.parentNode.parentNode.parentNode.parentNode;
    let img = father.querySelector('img').src;
    let album = father.querySelector('h1').textContent;
    let price = father.querySelector('p').textContent;
    addItemToCart(img, album, price);
    updateCartTotal();
}
function addItemToCart(img, album, price) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemsNames = cartItems.getElementsByClassName('album-title');
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
                    <input class="cart-quantity-input" type="number" value="1" >
                    <button class="btn btn-danger cart-quantity-button" type="button"><i class="bi-trash"></i></button>
                </div>
            `
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', inputChanged)
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = document.getElementsByClassName('cart-price')[0];
        var quantityElement = document.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity)
    }
    total = Math.round(total*100)/100 
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
};

