function toggleheart1(state){
    const  heartElement = document.getElementById("Like-img1");
    if(state =='empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
} 



function toggleheart2(state){
    const  heartElement = document.getElementById("Like-img2");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart3(state){
    const  heartElement = document.getElementById("Like-img3");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart4(state){
    const  heartElement = document.getElementById("Like-img4");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart5(state){
    const  heartElement = document.getElementById("Like-img5");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart6(state){
    const  heartElement = document.getElementById("Like-img6");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart7(state){
    const  heartElement = document.getElementById("Like-img7");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart8(state){
    const  heartElement = document.getElementById("Like-img8");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart9(state){
    const  heartElement = document.getElementById("Like-img9");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
    }         
    
}  

function toggleheart10(state){
    const  heartElement = document.getElementById("Like-img10");
    if(state =='Empty'){
        heartElement.src = '../images/coffee-table-book-img/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/coffee-table-book-img/heart.png';
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
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img.3.jfif">
                      <p class="book_name">Eat Drink Nap</p>
                      <p class="book_author">by Polaroids</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.249</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
        `;
                    card2.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 71%</span>
                      <img class="Book_image_card" src="./../images/coffee-table-book-img/img10.jpg">
                      <p class="book_name">The White Book</p>
                      <p class="book_author">by Chrissie Rucker</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
        `;
                    card3.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 81%</span>
                      <img class="Book_image_card" src="./../images/coffee-table-book-img/img9.jfif">
                      <p class="book_name">The Art of Home </p>
                      <p class="book_author">by Shea McGee</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.349</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
        `;
                    card4.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 75%</span>
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img.7.webp">
                      <p class="book_name">MADE for LIVING </p>
                      <p class="book_author">by Amber Lewis</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.370</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
         
        `;
                    card5.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 84%</span>
                      <img class="Book_image_card" src="./../images/coffee-table-book-img/img5.jpg">
                      <p class="book_name">Modern Way to Live</p>
                      <p class="book_author">by Matt Gibberd</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.390</p>
                      <button class="add_to_cart">Add to cart</button>
                  </div>
        `;
                    card6.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 70%</span>
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img.1.webp">
                      <p class="book_name">The Live Beautiful</p>
                      <p class="book_author">by Nathan William</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.415</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
        `;
                    card7.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 83%</span>
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img.2.jpg">
                      <p class="book_name"> This Is Home</p>
                      <p class="book_author">by AMansur Gavriel</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.450</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
         
        `;
                    card8.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 79%</span>
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img4.jfif">
                      <p class="book_name">The Inspired Home</p>
                      <p class="book_author">by Donna Karan</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.500</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
        `;
                    card9.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 93%</span>
                      <img class="Book_image_card" src="./../images/coffee-table-book-img/img6.jpg">
                      <p class="book_name">Charlotte's Web</p>
                      <p class="book_author">by E.B. White</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.549</p>
                      <button class="add_to_cart">Add to cart</button>
                  </div>
        `;
                    card10.innerHTML = `
                    <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 86%</span>
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img8.jfif">
                      <p class="book_name">UP STATE</p>
                      <p class="book_author">by Lisa Prystup</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.569</p>
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
                    <img class="Book_image_card " src="./../images/coffee-table-book-img/img.3.jfif">
                    <p class="book_name">Eat Drink Nap</p>
                    <p class="book_author">by Polaroids</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.249</p>
                    <button class="add_to_cart">Add to cart</button>
                    </div>
      `;
                  card7.innerHTML = `
                  <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 71%</span>
                    <img class="Book_image_card" src="./../images/coffee-table-book-img/img10.jpg">
                    <p class="book_name">The White Book</p>
                    <p class="book_author">by Chrissie Rucker</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
                    <button class="add_to_cart">Add to cart</button>
                  </div>
      `;
                  card6.innerHTML = `
                  <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 81%</span>
                    <img class="Book_image_card" src="./../images/coffee-table-book-img/img9.jfif">
                    <p class="book_name">The Art of Home </p>
                    <p class="book_author">by Shea McGee</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.349</p>
                    <button class="add_to_cart">Add to cart</button>
                  </div>
      `;
                  card5.innerHTML = `
                  <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 75%</span>
                    <img class="Book_image_card " src="./../images/coffee-table-book-img/img.7.webp">
                    <p class="book_name">MADE for LIVING </p>
                    <p class="book_author">by Amber Lewis</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.370</p>
                    <button class="add_to_cart">Add to cart</button>
                  </div>
       
      `;
                  card4.innerHTML = `
                  <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 84%</span>
                    <img class="Book_image_card" src="./../images/coffee-table-book-img/img5.jpg">
                    <p class="book_name">Modern Way to Live</p>
                    <p class="book_author">by Matt Gibberd</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.390</p>
                    <button class="add_to_cart">Add to cart</button>
                </div>
      `;
                  card3.innerHTML = `
                  <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 70%</span>
                    <img class="Book_image_card " src="./../images/coffee-table-book-img/img.1.webp">
                    <p class="book_name">The Live Beautiful</p>
                    <p class="book_author">by Nathan William</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.415</p>
                    <button class="add_to_cart">Add to cart</button>
                  </div>
      `;
                  card2.innerHTML = `
                  <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 83%</span>
                    <img class="Book_image_card " src="./../images/coffee-table-book-img/img.2.jpg">
                    <p class="book_name"> This Is Home</p>
                    <p class="book_author">by AMansur Gavriel</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.450</p>
                    <button class="add_to_cart">Add to cart</button>
                  </div>
       
      `;
                  card1.innerHTML = `
                  <div class="first_container product_conatiner">
                    <span class="use_of_product">Gently Used 79%</span>
                    <img class="Book_image_card " src="./../images/coffee-table-book-img/img4.jfif">
                    <p class="book_name">The Inspired Home</p>
                    <p class="book_author">by Donna Karan</p>
                    <p class="book_price"><del class="del_price">Rs.599</del> Rs.500</p>
                    <button class="add_to_cart">Add to cart</button>
                  </div>
      `;
                  
                }
                function NathanWilliam(){
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
                              <img class="Book_image_card " src="./../images/coffee-table-book-img/img.1.webp">
                              <p class="book_name">The Live Beautiful</p>
                              <p class="book_author">by Nathan William</p>
                              <p class="book_price"><del class="del_price">Rs.599</del> Rs.415</p>
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
                function Polaroids() {
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
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img.3.jfif">
                      <p class="book_name">Eat Drink Nap</p>
                      <p class="book_author">by Polaroids</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.249</p>
                      <button class="add_to_cart">Add to cart</button>
                    </div>
                    `;
                
                    // Hide other cards by clearing their inner HTML
                    card2.innerHTML = `
                     <div class="first_container product_conatiner">
                      <span class="use_of_product">Gently Used 84%</span>
                      <img class="Book_image_card" src="./../images/coffee-table-book-img/img5.jpg">
                      <p class="book_name">Modern Way to Live</p>
                      <p class="book_author">by Polaroids</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.390</p>
                      <button class="add_to_cart">Add to cart</button>
                  </div>
                  `;
                    card3.innerHTML = "";
                    card4.innerHTML = "";
                    card5.innerHTML = "";
                    card6.innerHTML = "";
                    card7.innerHTML = "";
                    card8.innerHTML = "";
                    card9.innerHTML = "";
                    card10.innerHTML = "";
                }
                function AMansurGavriel() {
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
                      <img class="Book_image_card " src="./../images/coffee-table-book-img/img.2.jpg">
                      <p class="book_name"> This Is Home</p>
                      <p class="book_author">by AMansur Gavriel</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.450</p>
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
                function ChrissieRucker() {
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
                      <span class="use_of_product">Gently Used 71%</span>
                      <img class="Book_image_card" src="./../images/coffee-table-book-img/img10.jpg">
                      <p class="book_name">The White Book</p>
                      <p class="book_author">by Chrissie Rucker</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
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
                function SheaMcGee() {
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
                      <span class="use_of_product">Gently Used 81%</span>
                      <img class="Book_image_card" src="./../images/coffee-table-book-img/img9.jfif">
                      <p class="book_name">The Art of Home </p>
                      <p class="book_author">by Shea McGee</p>
                      <p class="book_price"><del class="del_price">Rs.599</del> Rs.349</p>
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
                
                

