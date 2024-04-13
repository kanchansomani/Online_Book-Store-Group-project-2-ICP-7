
const quantityText = document.getElementById('quantity-text');
const quantityTotal = document.getElementById('quantity-total');
const productPrice = document.getElementById('product-price');

function increment() {
let quantity = parseInt(quantityText.innerText);

if (quantity < 10) {
    quantityText.innerText = ++quantity;
}
else {
    alert("You can't buy more than 10 products");
}
setQuantityandToatal(quantity);
}

function decrement() {
let quantity = parseInt(quantityText.innerText);

if (quantity > 1) {
    quantityText.innerText = --quantity;
}
else {
    alert("Buy minimum 1 product");
}
setQuantityandToatal(quantity);
}

function setQuantityandToatal(quantity) {
quantityTotal.innerText = `Quantity : ${quantity}`;
productPrice.innerText = `₹ ${324* quantity}`;
}


function toggleheart(state){
    const  heartElement = document.getElementById("Like-img");
    if(state =='Full'){
        heartElement.src = './images/index img/heart.png';
    }         

    else if (state == 'empty')
    {
        
        heartElement.src = './images/index img/empty.png';
    }         
    
} 



function toggleheart2(state){
    const  heartElement = document.getElementById("Like-img2");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart3(state){
    const  heartElement = document.getElementById("Like-img3");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart4(state){
    const  heartElement = document.getElementById("Like-img4");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart5(state){
    const  heartElement = document.getElementById("Like-img5");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart6(state){
    const  heartElement = document.getElementById("Like-img6");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart7(state){
    const  heartElement = document.getElementById("Like-img7");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart8(state){
    const  heartElement = document.getElementById("Like-img8");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart9(state){
    const  heartElement = document.getElementById("Like-img9");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  

function toggleheart10(state){
    const  heartElement = document.getElementById("Like-img10");
    if(state =='Empty'){
        heartElement.src = './images/index img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = './images/index img/heart.png';
    }         
    
}  
    