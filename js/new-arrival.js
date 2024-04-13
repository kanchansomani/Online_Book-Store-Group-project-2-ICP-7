
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


function toggleheart1(state){
    const  heartElement = document.getElementById("Like-img1");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
} 



function toggleheart2(state){
    const  heartElement = document.getElementById("Like-img2");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart3(state){
    const  heartElement = document.getElementById("Like-img3");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart4(state){
    const  heartElement = document.getElementById("Like-img4");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart5(state){
    const  heartElement = document.getElementById("Like-img5");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart6(state){
    const  heartElement = document.getElementById("Like-img6");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart7(state){
    const  heartElement = document.getElementById("Like-img7");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart8(state){
    const  heartElement = document.getElementById("Like-img8");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart9(state){
    const  heartElement = document.getElementById("Like-img9");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  

function toggleheart10(state){
    const  heartElement = document.getElementById("Like-img10");
    if(state =='Empty'){
        heartElement.src = '../images/new-arrival-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/new-arrival-img/heart.png';
    }         
    
}  
function lowTohigh() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");

  card1.innerHTML = `
  <a href="../pages/arts-of habits.html" class="img">
    <div class="first_container product_conatiner">

      <span class="use_of_product"> Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img1"
        onclick="toggleheart1('Full')" />

      <img class="Book_image_card " src="../images/new-arrival-img/gauranga das.jpg">
      <p class="book_name name">Art of Habits</p>
      <p class="book_author">Shantanu Gupta</p>
      <p class="book_price"><del class="del_price">Rs.250</del> Rs.205</p>

      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>
  </a>
    `;
  card2.innerHTML = `
  <a href="../pages/ramayan and family-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img8"
        onclick="toggleheart8('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/ramayan family and life.jpg">
      <p class="book_name"> Ramayana on Family</p>
      <p class="book_author">Gauranga Das</p>
      <p class="book_price"><del class="del_price">Rs.250</del> Rs.205</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>
        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card3.innerHTML = `
  <a href="../pages/mahagatha-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 35%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img3"
        onclick="toggleheart3('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/mahagatha.jpg">
      <p class="book_name name">Mahagatha</p>
      <p class="book_author">Satyarth Nayak</p>
      <p class="book_price"><del class="del_price">Rs.499</del> Rs.324</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card4.innerHTML = `
  <a href="../pages/modi and india-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 31%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img6"
        onclick="toggleheart6('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/modi and india.jpg">
      <p class="book_name name">Modi & India</p>
      <p class="book_author">Rahul Shivshankar</p>
      <p class="book_price"><del class="del_price">Rs.699</del> Rs.489</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>


        <button class="add_to_cart">Add to cart</button>

  </a>

     
    `;
  card5.innerHTML = `
  <a href="../pages/coming wave-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 31%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img9"
        onclick="toggleheart9('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/the coming wave.jpg">
      <p class="book_name">The Coming Wave</p>
      <p class="book_author">Michael Bhaskar</p>
      <p class="book_price"><del class="del_price">Rs.799</del> Rs.551</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card6.innerHTML = `
  <a href="../pages/fury-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img10"
        onclick="toggleheart10('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/the fury.jpg">
      <p class="book_name name">The Fury</p>
      <p class="book_author">Alex Michaelides</p>
      <p class="book_price"><del class="del_price">Rs.799</del> Rs.551</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card7.innerHTML = `
  <a href="../pages/save your life-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img11"
        onclick="toggleheart11('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/this book may save your life.jpg">
      <p class="book_name name">Save Your Life</p>
      <p class="book_author">Dr Karan Rajan</p>
      <p class="book_price"><del class="del_price">Rs.799</del> Rs.551</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>

    `;
  card8.innerHTML = `
  <a href="../pages/golden-touch-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 30%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img2"
        onclick="toggleheart2('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/golden touch.jpg">
      <p class="book_name name">Golden Touch</p>
      <p class="book_author">T.S. Kalyanarama</p>
      <p class="book_price"><del class="del_price"> ₹899</del> Rs.₹620</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>
        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card9.innerHTML = `
  <a href="../pages/clear thinking-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 41%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img5"
        onclick="toggleheart5('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/clear thinking.jpg">
      <p class="book_name name">Clear Thinking</p>
      <p class="book_author">Shane Parrish</p>
      <p class="book_price"><del class="del_price">Rs.899</del> Rs.620</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>

    `;
  card10.innerHTML = `
  <a href="../pages/flame and shadow-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 31%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img7"
        onclick="toggleheart7('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/house of flame and shadow.jpg">
      <p class="book_name">Flame and Shadow</p>
      <p class="book_author">Maas Sarah J. M</p>
      <p class="book_price"><del class="del_price">Rs.899</del> Rs.620</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>


        <button class="add_to_cart">Add to cart</button>

  </a>

    `;
  card11.innerHTML = `
  <a href="../pages/chess win-page.html" class="img">
    <div class="first_container product_conatiner">

      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img12"
        onclick="toggleheart12('Full')" />

      <img class="Book_image_card " src="../images/new-arrival-img/chess.jpg">
      <p class="book_name name">How Win Chess</p>
      <p class="book_author">Levy Rozman</p>
      <p class="book_price"><del class="del_price">Rs.1299</del> Rs.1065</p>

      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>
        <button class="add_to_cart">Add to cart</button>

  </a>
          `;
  card12.innerHTML = `
  <a href="../pages/chankyaneeti-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 11%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img4"
        onclick="toggleheart4('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/chankya neeti.jpg">
      <p class="book_name"> Chanakya Sutra Sahit</p>
      <p class="book_author">Ashwini Parashar</p>
      <p class="book_price"><del class="del_price">Rs.1,131</del> Rs.1271,</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>


  </a>
        `;
}
function highToLow() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");

  card12.innerHTML = `
  <a href="../pages/arts-of habits.html" class="img">
    <div class="first_container product_conatiner">

      <span class="use_of_product"> Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img1"
        onclick="toggleheart1('Full')" />

      <img class="Book_image_card " src="../images/new-arrival-img/gauranga das.jpg">
      <p class="book_name name">Art of Habits</p>
      <p class="book_author">Shantanu Gupta</p>
      <p class="book_price"><del class="del_price">Rs.250</del> Rs.205</p>

      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>
  </a>
    `;
  card11.innerHTML = `
  <a href="../pages/ramayan and family-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img8"
        onclick="toggleheart8('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/ramayan family and life.jpg">
      <p class="book_name"> Ramayana on Family</p>
      <p class="book_author">Gauranga Das</p>
      <p class="book_price"><del class="del_price">Rs.250</del> Rs.205</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>
        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card10.innerHTML = `
  <a href="../pages/mahagatha-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 35%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img3"
        onclick="toggleheart3('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/mahagatha.jpg">
      <p class="book_name name">Mahagatha</p>
      <p class="book_author">Satyarth Nayak</p>
      <p class="book_price"><del class="del_price">Rs.499</del> Rs.324</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card9.innerHTML = `
  <a href="../pages/modi and india-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 31%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img6"
        onclick="toggleheart6('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/modi and india.jpg">
      <p class="book_name name">Modi & India</p>
      <p class="book_author">Rahul Shivshankar</p>
      <p class="book_price"><del class="del_price">Rs.699</del> Rs.489</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>


        <button class="add_to_cart">Add to cart</button>

  </a>

     
    `;
  card8.innerHTML = `
  <a href="../pages/coming wave-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 31%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img9"
        onclick="toggleheart9('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/the coming wave.jpg">
      <p class="book_name">The Coming Wave</p>
      <p class="book_author">Michael Bhaskar</p>
      <p class="book_price"><del class="del_price">Rs.799</del> Rs.551</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card7.innerHTML = `
  <a href="../pages/fury-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img10"
        onclick="toggleheart10('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/the fury.jpg">
      <p class="book_name name">The Fury</p>
      <p class="book_author">Alex Michaelides</p>
      <p class="book_price"><del class="del_price">Rs.799</del> Rs.551</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card6.innerHTML = `
  <a href="../pages/save your life-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img11"
        onclick="toggleheart11('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/this book may save your life.jpg">
      <p class="book_name name">Save Your Life</p>
      <p class="book_author">Dr Karan Rajan</p>
      <p class="book_price"><del class="del_price">Rs.799</del> Rs.551</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>

    `;
  card5.innerHTML = `
  <a href="../pages/golden-touch-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 30%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img2"
        onclick="toggleheart2('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/golden touch.jpg">
      <p class="book_name name">Golden Touch</p>
      <p class="book_author">T.S. Kalyanarama</p>
      <p class="book_price"><del class="del_price"> ₹899</del> Rs.₹620</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>
        <button class="add_to_cart">Add to cart</button>

  </a>
    `;
  card4.innerHTML = `
  <a href="../pages/clear thinking-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 41%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img5"
        onclick="toggleheart5('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/clear thinking.jpg">
      <p class="book_name name">Clear Thinking</p>
      <p class="book_author">Shane Parrish</p>
      <p class="book_price"><del class="del_price">Rs.899</del> Rs.620</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>

  </a>

    `;
  card3.innerHTML = `
  <a href="../pages/flame and shadow-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 31%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img7"
        onclick="toggleheart7('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/house of flame and shadow.jpg">
      <p class="book_name">Flame and Shadow</p>
      <p class="book_author">Maas Sarah J. M</p>
      <p class="book_price"><del class="del_price">Rs.899</del> Rs.620</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>


        <button class="add_to_cart">Add to cart</button>

  </a>

    `;
  card2.innerHTML = `
  <a href="../pages/chess win-page.html" class="img">
    <div class="first_container product_conatiner">

      <span class="use_of_product">Gently Used 71%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img12"
        onclick="toggleheart12('Full')" />

      <img class="Book_image_card " src="../images/new-arrival-img/chess.jpg">
      <p class="book_name name">How Win Chess</p>
      <p class="book_author">Levy Rozman</p>
      <p class="book_price"><del class="del_price">Rs.1299</del> Rs.1065</p>

      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>
        <button class="add_to_cart">Add to cart</button>

  </a>
          `;
  card1.innerHTML = `
  <a href="../pages/chankyaneeti-page.html" class="img">
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 11%</span>
      <img src="../images/new-arrival-img/empty.png" class="Like_symbol" id="Like-img4"
        onclick="toggleheart4('Full')" />
      <img class="Book_image_card " src="../images/new-arrival-img/chankya neeti.jpg">
      <p class="book_name"> Chanakya Sutra Sahit</p>
      <p class="book_author">Ashwini Parashar</p>
      <p class="book_price"><del class="del_price">Rs.1,131</del> Rs.1271,</p>
      <div class="rating_section">
        <a href="./pages/add-cart.html" class="text-decoration-none"></a>

        <button class="add_to_cart">Add to cart</button>


  </a>
        `;
}
function JoyceCarolates() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");
  card12.innerHTML = "";
  card11.innerHTML = "";
  card1.innerHTML = `
                        <div class="first_container product_conatiner">
                            <span class="use_of_product">Gently Used 59%</span>
                            <img class="Book_image_card " src="./../images/Bestseller/img_2.jpg">
                            <p class="book_name"> The Falls</p>
                            <p class="book_author">by Joyce Carol Oates</p>
                            <p class="book_price"><del class="del_price">Rs.409</del> Rs.250</p>
                            <p class="add_to_cart">Add to cart</p>
                        </div>
            `;
  card2.innerHTML = "";
  card3.innerHTML = "";
  card4.innerHTML = "";
  card5.innerHTML == "";
  card6.innerHTML = "";
  card7.innerHTML = "";
  card8.innerHTML = "";
  card9.innerHTML = "";
  card10.innerHTML = "";

}
function JoyceCarolates() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");
  card12.innerHTML = "";
  card11.innerHTML = "";

  // Show card1
  card1.innerHTML = `
                    <div class="first_container product_conatiner">
                        <span class="use_of_product">Gently Used 59%</span>
                        <img class="Book_image_card " src="./../images/Bestseller/img_2.jpg">
                        <p class="book_name"> The Falls</p>
                        <p class="book_author">by Joyce Carol Oates</p>
                        <p class="book_price"><del class="del_price">Rs.409</del> Rs.250</p>
                        <p class="add_to_cart">Add to cart</p>
                    </div>
                `;

  // Hide other cards by clearing their inner HTML
  card2.innerHTML = "";
  card3.innerHTML = "";
  card4.innerHTML = "";
  card5.innerHTML = "";
  card6.innerHTML = "";
  card7.innerHTML = "";
  card8.innerHTML = "";
  card9.innerHTML = "";
  card10.innerHTML = "";
}
function JamesKelman() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");
  card12.innerHTML = "";
  card11.innerHTML = "";

  // Show card1
  card1.innerHTML = `
                <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 72%</span>
                    <img class="Book_image_card " src="./../images/Bestseller/img_4.jpg">
                    <p class="book_name">The Bonfire of the Van</p>
                    <p class="book_author">by James Kelman</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.590</p>
                    <p class="add_to_cart">Add to cart</p>
                </div>
                `;

  // Hide other cards by clearing their inner HTML
  card2.innerHTML = "";
  card3.innerHTML = "";
  card4.innerHTML = "";
  card5.innerHTML = "";
  card6.innerHTML = "";
  card7.innerHTML = "";
  card8.innerHTML = "";
  card9.innerHTML = "";
  card10.innerHTML = "";
}
function NicholasdeLange() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");
  card12.innerHTML = "";
  card11.innerHTML = "";

  // Show card1
  card1.innerHTML = `
                <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 79%</span>
                    <img class="Book_image_card " src="./../images/Bestseller/img_3.jpg">
                    <p class="book_name">Sharing the light</p>
                    <p class="book_author">by Nicholas de Lange...</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
                    <p class="add_to_cart">Add to cart</p>
                </div>
                `;

  // Hide other cards by clearing their inner HTML
  card2.innerHTML = "";
  card3.innerHTML = "";
  card4.innerHTML = "";
  card5.innerHTML = "";
  card6.innerHTML = "";
  card7.innerHTML = "";
  card8.innerHTML = "";
  card9.innerHTML = "";
  card10.innerHTML = "";

}
function SabrinaGendron() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");
  card12.innerHTML = "";
  card11.innerHTML = "";

  // Show card1
  card1.innerHTML = `
                <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 84%</span>
                    <img class="Book_image_card" src="./../images/Bestseller/img_5.jpg">
                    <p class="book_name">High and Dry</p>
                    <p class="book_author">by Sabrina Gendron</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.280</p>
                    <p class="add_to_cart">Add to cart</p>
                </div>
                `;

  card2.innerHTML = `<div class="first_container product_conatiner">
                <span class="use_of_product">Gently Used 75%</span>
                <img class="Book_image_card " src="./../images/Bestseller/img_7.jpg">
                <p class="book_name">Miraculous</p>
                <p class="book_author">by Sabrina Gendron</p>
                <p class="book_price"><del class="del_price">Rs.599</del> Rs.350</p>
                <p class="add_to_cart">Add to cart</p>
            </div></div>`;
  card3.innerHTML = "";
  card4.innerHTML = "";
  card5.innerHTML = "";
  card6.innerHTML = "";
  card7.innerHTML = "";
  card8.innerHTML = "";
  card9.innerHTML = "";
  card10.innerHTML = "";
}
function JamesKelman() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let card5 = document.getElementById("card5");
  let card6 = document.getElementById("card6");
  let card7 = document.getElementById("card7");
  let card8 = document.getElementById("card8");
  let card9 = document.getElementById("card9");
  let card10 = document.getElementById("card10");
  let card11 = document.getElementById("card11");
  let card12 = document.getElementById("card12");
  card12.innerHTML = "";
  card11.innerHTML = "";

  // Show card1
  card1.innerHTML = `
                <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 72%</span>
                    <img class="Book_image_card " src="./../images/Bestseller/img_4.jpg">
                    <p class="book_name">The Bonfire of the Van</p>
                    <p class="book_author">by James Kelman</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.590</p>
                    <p class="add_to_cart">Add to cart</p>
                </div>
                `;

  // Hide other cards by clearing their inner HTML
  card2.innerHTML = "";
  card3.innerHTML = "";
  card4.innerHTML = "";
  card5.innerHTML = "";
  card6.innerHTML = "";
  card7.innerHTML = "";
  card8.innerHTML = "";
  card9.innerHTML = "";
  card10.innerHTML = "";
}
