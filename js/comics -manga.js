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
        <span class="use_of_product">Gently Used 83%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img2.jpg">
        <p class="book_name">The Boom</p>
        <p class="book_author">by David Smith</p>
        <p class="book_price"><del class="del_price">Rs.199</del> Rs.85</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card2.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 86%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img8.jpg">
        <p class="book_name">The SIEGE</p>
        <p class="book_author">by A.A. Milne</p>
        <p class="book_price"><del class="del_price">Rs.199</del> Rs.150</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card3.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 84%</span>
        <img class="Book_image_card" src="./../images/Comics-And Manga-books-img/img5.jfif">
        <p class="book_name">High and Dry</p>
        <p class="book_author">by Sabrina Gendron</p>
        <p class="book_price"><del class="del_price">Rs.250</del> Rs.200</p>
        <p class="add_to_cart">Add to cart</p>
    </div>
`;
    card4.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 79%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img4.webp">
        <p class="book_name">The Onepiec</p>
        <p class="book_author">by Eiichiro Oda</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
        <p class="add_to_cart">Add to cart</p>
      </div>

`;
    card5.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 70%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img.1.jpg">
        <p class="book_name">The KAPTARA</p>
        <p class="book_author">by Kagan McLeod</p>
        <p class="book_price"><del class="del_price">Rs.399</del> Rs.299</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card6.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 75%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img7.jpg">
        <p class="book_name">Spy-Family</p>
        <p class="book_author">by Tatsuya Endo</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.350</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card7.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 93%</span>
        <img class="Book_image_card" src="./../images/Comics-And Manga-books-img/img.6.jpeg">
        <p class="book_name">Invingible</p>
        <p class="book_author">by Kirkman</p>
        <p class="book_price"><del class="del_price">Rs.499</del> Rs.399</p>
        <p class="add_to_cart">Add to cart</p>
  
    </div>

`;
    card8.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 72%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img3.jfif">
        <p class="book_name">The Marvel Comic</p>
        <p class="book_author">by Dr. Seuss</p>
        <p class="book_price"><del class="del_price">Rs.699</del> Rs.599</p>
        <p class="add_to_cart">Add to cart</p>
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
        <span class="use_of_product">Gently Used 83%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img2.jpg">
        <p class="book_name">The Boom</p>
        <p class="book_author">by David Smith</p>
        <p class="book_price"><del class="del_price">Rs.199</del> Rs.85</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card7.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 86%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img8.jpg">
        <p class="book_name">The SIEGE</p>
        <p class="book_author">by A.A. Milne</p>
        <p class="book_price"><del class="del_price">Rs.199</del> Rs.150</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card6.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 84%</span>
        <img class="Book_image_card" src="./../images/Comics-And Manga-books-img/img5.jfif">
        <p class="book_name">High and Dry</p>
        <p class="book_author">by Sabrina Gendron</p>
        <p class="book_price"><del class="del_price">Rs.250</del> Rs.200</p>
        <p class="add_to_cart">Add to cart</p>
    </div>
`;
    card5.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 79%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img4.webp">
        <p class="book_name">The Onepiec</p>
        <p class="book_author">by Eiichiro Oda</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
        <p class="add_to_cart">Add to cart</p>
      </div>

`;
    card4.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 70%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img.1.jpg">
        <p class="book_name">The KAPTARA</p>
        <p class="book_author">by Kagan McLeod</p>
        <p class="book_price"><del class="del_price">Rs.399</del> Rs.299</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card3.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 75%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img7.jpg">
        <p class="book_name">Spy-Family</p>
        <p class="book_author">by Tatsuya Endo</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.350</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
    card2.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 93%</span>
        <img class="Book_image_card" src="./../images/Comics-And Manga-books-img/img.6.jpeg">
        <p class="book_name">Invingible</p>
        <p class="book_author">by Kirkman</p>
        <p class="book_price"><del class="del_price">Rs.499</del> Rs.399</p>
        <p class="add_to_cart">Add to cart</p>
  
    </div>

`;
    card1.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 72%</span>
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img3.jfif">
        <p class="book_name">The Marvel Comic</p>
        <p class="book_author">by Dr. Seuss</p>
        <p class="book_price"><del class="del_price">Rs.699</del> Rs.599</p>
        <p class="add_to_cart">Add to cart</p>
      </div>
`;
}
function KaganMcLeod(){
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
                <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img.1.jpg">
                <p class="book_name">The KAPTARA</p>
                <p class="book_author">by Kagan McLeod</p>
                <p class="book_price"><del class="del_price">Rs.399</del> Rs.299</p>
                <p class="add_to_cart">Add to cart</p>
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
function DavidSmith() {
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
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img2.jpg">
        <p class="book_name">The Boom</p>
        <p class="book_author">by David Smith</p>
        <p class="book_price"><del class="del_price">Rs.199</del> Rs.85</p>
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
function Seuss() {
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
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img3.jfif">
        <p class="book_name">The Marvel Comic</p>
        <p class="book_author">by Dr. Seuss</p>
        <p class="book_price"><del class="del_price">Rs.699</del> Rs.599</p>
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
function Eiichiro() {
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
        <img class="Book_image_card " src="./../images/Comics-And Manga-books-img/img4.webp">
        <p class="book_name">The Onepiec</p>
        <p class="book_author">by Eiichiro Oda</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
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
    card2.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 84%</span>
        <img class="Book_image_card" src="./../images/Comics-And Manga-books-img/img5.jfif">
        <p class="book_name">High and Dry</p>
        <p class="book_author">by Sabrina Gendron</p>
        <p class="book_price"><del class="del_price">Rs.250</del> Rs.200</p>
        <p class="add_to_cart">Add to cart</p>
  
    </div>`;
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

