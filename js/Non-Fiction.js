function toggleheart1(state){
    const  heartElement = document.getElementById("Like-img1");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
} 



function toggleheart2(state){
    const  heartElement = document.getElementById("Like-img2");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart3(state){
    const  heartElement = document.getElementById("Like-img3");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart4(state){
    const  heartElement = document.getElementById("Like-img4");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart5(state){
    const  heartElement = document.getElementById("Like-img5");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart6(state){
    const  heartElement = document.getElementById("Like-img6");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart7(state){
    const  heartElement = document.getElementById("Like-img7");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart8(state){
    const  heartElement = document.getElementById("Like-img8");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart9(state){
    const  heartElement = document.getElementById("Like-img9");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
    }         
    
}  

function toggleheart10(state){
    const  heartElement = document.getElementById("Like-img10");
    if(state =='Empty'){
        heartElement.src = '../images/Non-Fiction-ibooks-mg/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Non-Fiction-ibooks-mg/heart.png';
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

    card1.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 72%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img3" onclick="toggleheart3('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img3.webp">
      <p class="book_name">The  Tree</p>
      <p class="book_author">by Robert McCrum</p>
      <p class="book_price"><del class="del_price">Rs.199</del> Rs.99</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card2.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 70%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img1" onclick="toggleheart1('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img.1.jpg">
      <p class="book_name">The Body Keeps</p>
      <p class="book_author">by Judith Herman</p>
      <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card3.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 83%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img2" onclick="toggleheart2('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img2.jpg">
      <p class="book_name">Book All Time</p>
      <p class="book_author">by Robert McCrum</p>
      <p class="book_price"><del class="del_price">Rs.399</del> Rs.275</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card4.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 93%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img6" onclick="toggleheart6('Full')" />
      <img class="Book_image_card" src="./../images/Non-Fiction-ibooks-mg/img6.jpg">
      <p class="book_name">Clarty Connection</p>
      <p class="book_author">by Yung Pueblo</p>
      <p class="book_price"><del class="del_price">Rs.299</del> Rs.320</p>
      <button class="add_to_cart">Add to cart</button>

  </div>

`;
    card5.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 79%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img4" onclick="toggleheart4('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img4.jpg">
      <p class="book_name">The WAGER</p>
      <p class="book_author">by David Grann</p>
      <p class="book_price"><del class="del_price">Rs.475</del> Rs.350</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card6.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 86%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img8" onclick="toggleheart8('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img8.webp">
      <p class="book_name">The Pegasus</p>
      <p class="book_author">by Leurent Richard </p>
      <p class="book_price"><del class="del_price">Rs.349</del> Rs.375</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card7.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 84%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img5" onclick="toggleheart5('Full')" />
      <img class="Book_image_card" src="./../images/Non-Fiction-ibooks-mg/img5.webp">
      <p class="book_name">Money Psycholoy</p>
      <p class="book_author">by Jason Zweig</p>
      <p class="book_price"><del class="del_price">Rs.599</del> Rs.400</p>
      <button class="add_to_cart">Add to cart</button>

  </div>

`;
    card8.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 75%</span>
      <img src="../images/Non-Fiction-ibooks-mg/" class="Like_symbol" id="Like-img7" onclick="toggleheart7('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img7.webp">
      <p class="book_name">Pathfinders</p>
      <p class="book_author">by Hasun Minhaj</p>
      <p class="book_price"><del class="del_price">Rs.599</del> Rs.515</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
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

    
    card8.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 72%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img3" onclick="toggleheart3('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img3.webp">
      <p class="book_name">The  Tree</p>
      <p class="book_author">by Robert McCrum</p>
      <p class="book_price"><del class="del_price">Rs.199</del> Rs.99</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card7.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 70%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img1" onclick="toggleheart1('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img.1.jpg">
      <p class="book_name">The Body Keeps</p>
      <p class="book_author">by Judith Herman</p>
      <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card6.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 83%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img2" onclick="toggleheart2('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img2.jpg">
      <p class="book_name">Book All Time</p>
      <p class="book_author">by Robert McCrum</p>
      <p class="book_price"><del class="del_price">Rs.399</del> Rs.275</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card5.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 93%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img6" onclick="toggleheart6('Full')" />
      <img class="Book_image_card" src="./../images/Non-Fiction-ibooks-mg/img6.jpg">
      <p class="book_name">Clarty Connection</p>
      <p class="book_author">by Yung Pueblo</p>
      <p class="book_price"><del class="del_price">Rs.299</del> Rs.320</p>
      <button class="add_to_cart">Add to cart</button>

  </div>

`;
    card4.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 79%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img4" onclick="toggleheart4('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img4.jpg">
      <p class="book_name">The WAGER</p>
      <p class="book_author">by David Grann</p>
      <p class="book_price"><del class="del_price">Rs.475</del> Rs.350</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card3.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 86%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img8" onclick="toggleheart8('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img8.webp">
      <p class="book_name">The Pegasus</p>
      <p class="book_author">by Leurent Richard </p>
      <p class="book_price"><del class="del_price">Rs.349</del> Rs.375</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card2.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 84%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img5" onclick="toggleheart5('Full')" />
      <img class="Book_image_card" src="./../images/Non-Fiction-ibooks-mg/img5.webp">
      <p class="book_name">Money Psycholoy</p>
      <p class="book_author">by Jason Zweig</p>
      <p class="book_price"><del class="del_price">Rs.599</del> Rs.400</p>
      <button class="add_to_cart">Add to cart</button>

  </div>

`;
    card1.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 75%</span>
      <img src="../images/Non-Fiction-ibooks-mg/" class="Like_symbol" id="Like-img7" onclick="toggleheart7('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img7.webp">
      <p class="book_name">Pathfinders</p>
      <p class="book_author">by Hasun Minhaj</p>
      <p class="book_price"><del class="del_price">Rs.599</del> Rs.515</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
`;
}
function Judith(){
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
            card1.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 70%</span>
              <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img1" onclick="toggleheart1('Full')" />
              <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img.1.jpg">
              <p class="book_name">The Body Keeps</p>
              <p class="book_author">by Judith Herman</p>
              <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
              <button class="add_to_cart">Add to cart</button>
            </div>
`;
            card2.innerHTML = "";
            card3.innerHTML= "";
            card4.innerHTML = "";
            card5.innerHTML == "";
            card6.innerHTML = "";
            card7.innerHTML = "";
            card8.innerHTML = "";
            card9.innerHTML = "";
            card10.innerHTML = "";

}
function Robert() {
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

    // Show card1
    card1.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 83%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img2" onclick="toggleheart2('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img2.jpg">
      <p class="book_name">Book All Time</p>
      <p class="book_author">by Robert McCrum</p>
      <p class="book_price"><del class="del_price">Rs.399</del> Rs.275</p>
      <button class="add_to_cart">Add to cart</button>
    </div>
    `;

    // Hide other cards by clearing their inner HTML
    card2.innerHTML = `<div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 72%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img3" onclick="toggleheart3('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img3.webp">
      <p class="book_name">The  Tree</p>
      <p class="book_author">by Robert McCrum</p>
      <p class="book_price"><del class="del_price">Rs.199</del> Rs.99</p>
      <button class="add_to_cart">Add to cart</button>
    </div>` 
    ;
    card3.innerHTML = "";
    card4.innerHTML = "";
    card5.innerHTML = "";
    card6.innerHTML = "";
    card7.innerHTML = "";
    card8.innerHTML = "";
    card9.innerHTML = "";
    card10.innerHTML = "";
}
function David() {
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

    // Show card1
    card1.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 79%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img4" onclick="toggleheart4('Full')" />
      <img class="Book_image_card " src="./../images/Non-Fiction-ibooks-mg/img4.jpg">
      <p class="book_name">The WAGER</p>
      <p class="book_author">by David Grann</p>
      <p class="book_price"><del class="del_price">Rs.475</del> Rs.350</p>
      <button class="add_to_cart">Add to cart</button>
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
function Jason() {
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

    // Show card1
    card1.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 84%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img5" onclick="toggleheart5('Full')" />
      <img class="Book_image_card" src="./../images/Non-Fiction-ibooks-mg/img5.webp">
      <p class="book_name">Money Psycholoy</p>
      <p class="book_author">by Jason Zweig</p>
      <p class="book_price"><del class="del_price">Rs.599</del> Rs.400</p>
      <button class="add_to_cart">Add to cart</button>

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
function YungPueblo() {
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

    // Show card1
    card1.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 93%</span>
      <img src="../images/Non-Fiction-ibooks-mg/empty.png" class="Like_symbol" id="Like-img6" onclick="toggleheart6('Full')" />
      <img class="Book_image_card" src="./../images/Non-Fiction-ibooks-mg/img6.jpg">
      <p class="book_name">Clarty Connection</p>
      <p class="book_author">by Yung Pueblo</p>
      <p class="book_price"><del class="del_price">Rs.299</del> Rs.320</p>
      <button class="add_to_cart">Add to cart</button>

  </div>
    `;

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