function toggleheart1(state){
    const  heartElement = document.getElementById("Like-img1");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state =='Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
} 



function toggleheart2(state){
    const  heartElement = document.getElementById("Like-img2");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart3(state){
    const  heartElement = document.getElementById("Like-img3");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart4(state){
    const  heartElement = document.getElementById("Like-img4");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart5(state){
    const  heartElement = document.getElementById("Like-img5");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart6(state){
    const  heartElement = document.getElementById("Like-img6");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart7(state){
    const  heartElement = document.getElementById("Like-img7");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart8(state){
    const  heartElement = document.getElementById("Like-img8");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart9(state){
    const  heartElement = document.getElementById("Like-img9");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
    }         
    
}  

function toggleheart10(state){
    const  heartElement = document.getElementById("Like-img10");
    if(state =='Empty'){
        heartElement.src = '../images/kids-books-imgs/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/kids-books-imgs/heart.png';
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


  card1.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 70%</span>
              <img class="Book_image_card " src="./../images/kids-books-imgs/img1.jpg">
              <p class="book_name">Death Of the River</p>
              <p class="book_author">by Clare Chase</p>
              <p class="book_price"><del class="del_price">Rs.550</del> Rs.249</p>
              <button class="add_to_cart">Add to cart</button>
            </div>
`;
  card2.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 72%</span>
              <img class="Book_image_card " src="./../images/kids-books-imgs/img3.jpg">
              <p class="book_name">The Cat in the Hat</p>
              <p class="book_author">by Dr. Seuss</p>
              <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
              <button class="add_to_cart">Add to cart</button>
            </div>
`;
  card3.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 75%</span>
              <img class="Book_image_card " src="./../images/kids-books-imgs/img7.webp">
              <p class="book_name">Miraculous</p>
              <p class="book_author">by Jess Redman</p>
              <p class="book_price"><del class="del_price">Rs.599</del> Rs.270</p>
              <button class="add_to_cart">Add to cart</button>
            </div>
`;
  card4.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 71%</span>
              <img class="Book_image_card" src="./../images/kids-books-imgs/img6.jpg">
              <p class="book_name">Owl At Home</p>
              <p class="book_author">by Amold Lobel</p>
              <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
              <button class="add_to_cart">Add to cart</button>
            </div>
 
`;
  card5.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 84%</span>
              <img class="Book_image_card" src="./../images/kids-books-imgs/img5.webp">
              <p class="book_name">High and Dry</p>
              <p class="book_author">by Sabrina Gendron</p>
              <p class="book_price"><del class="del_price">Rs.299</del> Rs.344</p>
              <button class="add_to_cart">Add to cart</button>
        
          </div>
`;
  card6.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 86%</span>
              <img class="Book_image_card " src="./../images/kids-books-imgs/img.9.jpg">
              <p class="book_name">Winnie-the-Pooh</p>
              <p class="book_author">by A.A. Milne</p>
              <p class="book_price"><del class="del_price">Rs.599</del> Rs.349</p>
              <button class="add_to_cart">Add to cart</button>
            </div>
`;
  card7.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 79%</span>
              <img class="Book_image_card " src="./../images/kids-books-imgs/img4.webp">
              <p class="book_name">Sharing the light</p>
              <p class="book_author">by David Adam</p>
              <p class="book_price"><del class="del_price">Rs.599</del> Rs.399</p>
              <button class="add_to_cart">Add to cart</button>
            </div>
 
`;
  card8.innerHTML = `
            <div class="first_container product_conatiner">
              <span class="use_of_product">Gently Used 83%</span>
              <img class="Book_image_card " src="./../images/kids-books-imgs/img2.jpg">
              <p class="book_name"> Puppy and Small Girl</p>
              <p class="book_author">by Adhip Jain</p>
              <p class="book_price"><del class="del_price">Rs.200</del> Rs.449</p>
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

  card8.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 70%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img1.jpg">
    <p class="book_name">Death Of the River</p>
    <p class="book_author">by Clare Chase</p>
    <p class="book_price"><del class="del_price">Rs.550</del> Rs.249</p>
    <button class="add_to_cart">Add to cart</button>
  </div>
`;
card7.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 72%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img3.jpg">
    <p class="book_name">The Cat in the Hat</p>
    <p class="book_author">by Dr. Seuss</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
    <button class="add_to_cart">Add to cart</button>
  </div>
`;
card6.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 75%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img7.webp">
    <p class="book_name">Miraculous</p>
    <p class="book_author">by Jess Redman</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.270</p>
    <button class="add_to_cart">Add to cart</button>
  </div>
`;
card5.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 71%</span>
    <img class="Book_image_card" src="./../images/kids-books-imgs/img6.jpg">
    <p class="book_name">Owl At Home</p>
    <p class="book_author">by Amold Lobel</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
    <button class="add_to_cart">Add to cart</button>
  </div>

`;
card4.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 84%</span>
    <img class="Book_image_card" src="./../images/kids-books-imgs/img5.webp">
    <p class="book_name">High and Dry</p>
    <p class="book_author">by Sabrina Gendron</p>
    <p class="book_price"><del class="del_price">Rs.299</del> Rs.344</p>
    <button class="add_to_cart">Add to cart</button>

</div>
`;
card3.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 86%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img.9.jpg">
    <p class="book_name">Winnie-the-Pooh</p>
    <p class="book_author">by A.A. Milne</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.349</p>
    <button class="add_to_cart">Add to cart</button>
  </div>
`;
card2.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 79%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img4.webp">
    <p class="book_name">Sharing the light</p>
    <p class="book_author">by David Adam</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.399</p>
    <button class="add_to_cart">Add to cart</button>
  </div>

`;
card1.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 83%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img2.jpg">
    <p class="book_name"> Puppy and Small Girl</p>
    <p class="book_author">by Adhip Jain</p>
    <p class="book_price"><del class="del_price">Rs.200</del> Rs.449</p>
    <button class="add_to_cart">Add to cart</button>
  </div>
`;
}
function clare() {
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
                  <img class="Book_image_card " src="./../images/kids-books-imgs/img1.jpg">
                  <p class="book_name">Death Of the River</p>
                  <p class="book_author">by Clare Chase</p>
                  <p class="book_price"><del class="del_price">Rs.550</del> Rs.249</p>
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
function Jain() {
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
    <img class="Book_image_card " src="./../images/kids-books-imgs/img2.jpg">
    <p class="book_name"> Puppy and Small Girl</p>
    <p class="book_author">by Adhip Jain</p>
    <p class="book_price"><del class="del_price">Rs.200</del> Rs.449</p>
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

  card1.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 72%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img3.jpg">
    <p class="book_name">The Cat in the Hat</p>
    <p class="book_author">by Dr. Seuss</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.250</p>
    <button class="add_to_cart">Add to cart</button>
  </div>
        `;
  card2.innerHTML = `
    <div class="first_container product_conatiner">
      <span class="use_of_product">Gently Used 84%</span>
      <img class="Book_image_card" src="./../images/kids-books-imgs/img5.webp">
      <p class="book_name">High and Dry</p>
      <p class="book_author">by Dr. Seuss</p>
      <p class="book_price"><del class="del_price">Rs.299</del> Rs.344</p>
      <button class="add_to_cart">Add to cart</button>
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

  card1.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 79%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img4.webp">
    <p class="book_name">Sharing the light</p>
    <p class="book_author">by David Adam</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.399</p>
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
function Lobel() {
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
    <span class="use_of_product">Gently Used 75%</span>
    <img class="Book_image_card " src="./../images/kids-books-imgs/img7.webp">
    <p class="book_name">Miraculous</p>
    <p class="book_author">by Amold Lobel</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.270</p>
    <button class="add_to_cart">Add to cart</button>
  </div>
        `;
  card2.innerHTML = `
  <div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 71%</span>
    <img class="Book_image_card" src="./../images/kids-books-imgs/img6.jpg">
    <p class="book_name">Owl At Home</p>
    <p class="book_author">by Amold Lobel</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
    <button class="add_to_cart">Add to cart</button>
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