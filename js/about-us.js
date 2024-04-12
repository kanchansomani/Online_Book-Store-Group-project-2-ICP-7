function turnOnPune() {
    const ourBranch = document.getElementById('img');
    ourBranch.src = ('../images/about-img/img5.jpg');
}

function turnOnMumbai() {
    const ourBranch = document.getElementById('img');
    ourBranch.src = ('../images/about-img/img6.jpg');
}

function turnOnNagpur() {
    const ourBranch = document.getElementById('img');
    ourBranch.src = ('../images/about-img/img7.jpg');
}

function turnOnNashik() {
    const ourBranch = document.getElementById('img');
    ourBranch.src = ('../images/about-img/img8.jpg');
}





let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slides");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            slides[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 2000); // Change image every 3 seconds
        }