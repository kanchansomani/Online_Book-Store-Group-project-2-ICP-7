function toggleheart1(state){
    const  heartElement = document.getElementById("Like-img1");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
} 



function toggleheart2(state){
    const  heartElement = document.getElementById("Like-img2");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart3(state){
    const  heartElement = document.getElementById("Like-img3");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart4(state){
    const  heartElement = document.getElementById("Like-img4");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart5(state){
    const  heartElement = document.getElementById("Like-img5");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart6(state){
    const  heartElement = document.getElementById("Like-img6");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart7(state){
    const  heartElement = document.getElementById("Like-img7");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart8(state){
    const  heartElement = document.getElementById("Like-img8");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart9(state){
    const  heartElement = document.getElementById("Like-img9");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
    }         
    
}  

function toggleheart10(state){
    const  heartElement = document.getElementById("Like-img10");
    if(state =='Empty'){
        heartElement.src = '../images/Bestseller/empty.png';
    }         

    else if (state == 'Full')
    {
        
        heartElement.src = '../images/Bestseller/heart.png';
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
        <span class="use_of_product">Gently Used 59%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_2.png">
        <p class="book_name"> The Falls</p>
        <p class="book_author">by Joyce Carol Oates</p>
        <p class="book_price"><del class="del_price">Rs.409</del> Rs.250</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card2.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 84%</span>
        <img class="Book_image_card" src="./../images/Bestseller/img_5.png">
        <p class="book_name">High and Dry</p>
        <p class="book_author">by Sabrina Gendron</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.280</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card3.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 79%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_3.png">
        <p class="book_name">Sharing the light</p>
        <p class="book_author">by Nicholas de Lange...</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card4.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 81%</span>
        <img class="Book_image_card" src="./../images/Bestseller/img_10.png">
        <p class="book_name">Journey To the Stars</p>
        <p class="book_author">by Robert Bolt</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.300</p>
        <button class="add_to_cart">Add to cart</button>
    </div>

`;
    card5.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 86%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_8.png">
        <p class="book_name">Winnie-the-Pooh</p>
        <p class="book_author">by William Makepeace...</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.320</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card6.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 93%</span>
        <img class="Book_image_card" src="./../images/Bestseller/img_6.png">
        <p class="book_name">Charlotte's Web</p>
        <p class="book_author">by Annie Proulx</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.349</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card7.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 75%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_7.png">
        <p class="book_name">Miraculous</p>
        <p class="book_author">by Sujit Saraf</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.350</p>
        <button class="add_to_cart">Add to cart</button>
    </div>

`;
    card8.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 71%</span>
        <img class="Book_image_card" src="./../images/kids-books-imgs/img6.png">
        <p class="book_name">Owl At Home</p>
        <p class="book_author">by Chuck Palahniuk</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.400</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card9.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used
            58%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_1.png">
        <p class="book_name">A Farewell to Arms</p>
        <p class="book_author">by Ernest Hemingway</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.549</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card10.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 72%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_4.png">
        <p class="book_name">The Bonfire of the Van</p>
        <p class="book_author">by James Kelman</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.590</p>
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

    card10.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 59%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_2.png">
        <p class="book_name"> The Falls</p>
        <p class="book_author">by Joyce Carol Oates</p>
        <p class="book_price"><del class="del_price">Rs.409</del> Rs.250</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card9.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 84%</span>
        <img class="Book_image_card" src="./../images/Bestseller/img_5.png">
        <p class="book_name">High and Dry</p>
        <p class="book_author">by Sabrina Gendron</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.280</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card8.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 79%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_3.png">
        <p class="book_name">Sharing the light</p>
        <p class="book_author">by Nicholas de Lange...</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.299</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card7.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 81%</span>
        <img class="./../images/Bestseller/img_10.png">
        <p class="book_name">Journey To the Stars</p>
        <p class="book_author">by Robert Bolt</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.300</p>
        <button class="add_to_cart">Add to cart</button>
    </div>

`;
    card6.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 86%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_8.png">
        <p class="book_name">Winnie-the-Pooh</p>
        <p class="book_author">by William Makepeace...</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.320</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card5.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 93%</span>
        <img class="Book_image_card" src="./../images/Bestseller/img_6.png">
        <p class="book_name">Charlotte's Web</p>
        <p class="book_author">by Annie Proulx</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.349</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card4.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 75%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_7.png">
        <p class="book_name">Miraculous</p>
        <p class="book_author">by Sujit Saraf</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.350</p>
        <button class="add_to_cart">Add to cart</button>
    </div>

`;
    card3.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 71%</span>
        <img class="Book_image_card" src="./../images/kids-books-imgs/img6.png">
        <p class="book_name">Owl At Home</p>
        <p class="book_author">by Chuck Palahniuk</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.400</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card2.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used
            58%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_1.png">
        <p class="book_name">A Farewell to Arms</p>
        <p class="book_author">by Ernest Hemingway</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.549</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
    card1.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 72%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_4.png">
        <p class="book_name">The Bonfire of the Van</p>
        <p class="book_author">by James Kelman</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.590</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
`;
}
function JoyceCarolates(){
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
                <span class="use_of_product">Gently Used 59%</span>
                <img class="Book_image_card " src="./../images/Bestseller/img_2.png">
                <p class="book_name"> The Falls</p>
                <p class="book_author">by Joyce Carol Oates</p>
                <p class="book_price"><del class="del_price">Rs.409</del> Rs.250</p>
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

    // Show card1
    card1.innerHTML = `
        <div class="first_container product_conatiner">
            <span class="use_of_product">Gently Used 59%</span>
            <img class="Book_image_card " src="./../images/Bestseller/img_2.png">
            <p class="book_name"> The Falls</p>
            <p class="book_author">by Joyce Carol Oates</p>
            <p class="book_price"><del class="del_price">Rs.409</del> Rs.250</p>
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
        <img class="Book_image_card " src="./../images/Bestseller/img_4.png">
        <p class="book_name">The Bonfire of the Van</p>
        <p class="book_author">by James Kelman</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.590</p>
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

    // Show card1
    card1.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 79%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_3.png">
        <p class="book_name">Sharing the light</p>
        <p class="book_author">by Nicholas de Lange...</p>
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
        <img class="Book_image_card" src="./../images/Bestseller/img_5.png">
        <p class="book_name">High and Dry</p>
        <p class="book_author">by Sabrina Gendron</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.280</p>
        <button class="add_to_cart">Add to cart</button>
    </div>
    `;

    card2.innerHTML = `<div class="first_container product_conatiner">
    <span class="use_of_product">Gently Used 75%</span>
    <img class="Book_image_card " src="./../images/Bestseller/img_7.png">
    <p class="book_name">Miraculous</p>
    <p class="book_author">by Sabrina Gendron</p>
    <p class="book_price"><del class="del_price">Rs.599</del> Rs.350</p>
    <button class="add_to_cart">Add to cart</button>
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

    // Show card1
    card1.innerHTML = `
    <div class="first_container product_conatiner">
        <span class="use_of_product">Gently Used 72%</span>
        <img class="Book_image_card " src="./../images/Bestseller/img_4.png">
        <p class="book_name">The Bonfire of the Van</p>
        <p class="book_author">by James Kelman</p>
        <p class="book_price"><del class="del_price">Rs.599</del> Rs.590</p>
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



