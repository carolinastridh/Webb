var cart = [];
var total = 0;


function toggleCart() {
   var cartContainer = document.getElementById('cartContainer');
   cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
}


function addToCart() {
   var productName = "Safira Ring";
   var price = 450;


   cart.push({ name: productName, price: price });
   total += price;
   updateCart();
}


function removeFromCart(index) {
   if (cart.length > 0 && index >= 0 && index < cart.length) {
       var removedItem = cart.splice(index, 1)[0];
       total -= removedItem.price;
       updateCart();
   }
}


function updateCart() {
   var cartItemsList = document.getElementById('cartItemsList');
   var cartTotal = document.getElementById('cartTotal');


   cartItemsList.innerHTML = '';
   cart.forEach((item, index) => {
       var listItem = document.createElement('li');
       listItem.textContent = `${item.name} - ${item.price} kr`;


       var removeButton = document.createElement('button');
       removeButton.textContent = 'Ta bort';
       removeButton.onclick = function() {
           removeFromCart(index);
       };


       listItem.appendChild(removeButton);


       cartItemsList.appendChild(listItem);
   });


   cartTotal.innerHTML = total;
}

