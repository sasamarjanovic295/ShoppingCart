let allTotal = 0;

function removeItemFromCart(button){
    let mainElement = button.closest('.cart-single-item');
    let price = mainElement.querySelector('p span').innerText;
    let name = mainElement.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    vegetables.forEach(vege => {
        if(vege.querySelector('.si-content h3').innerText == name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Add';
        }
    });
    allTotal -= parseInt(price);
    if(allTotal > 0 )
        document.querySelector('#allTotal').innerText=`Total: ${allTotal}`;
    else 
        document.querySelector('#allTotal').innerText=``;
    mainElement.remove();
}

function addToCart(button){
    let mainElement = button.closest('.single-item');
    let price = mainElement.querySelector('.price').innerText;
    let name = mainElement.querySelector('h3').innerText;
    let quantity = mainElement.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    price = parseInt(price.substring(1,price.length));
    quantity = parseInt(quantity);
    let total = price * quantity;
    allTotal += total;

    if(quantity > 0){
        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>$${price} x ${quantity} = $<span>${total}<span></p>
                                    <button class"removeButton" onclick="removeItemFromCart(this)">Remove</button>
                                </div`;
        button.innerText = 'Added'
        button.setAttribute('disabled','true');

        document.querySelector('.total').innerHTML = `<p id="allTotal">Total: ${allTotal}</p>`;
    }
    else{
        console.log('nije vece');
    }

}