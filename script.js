let exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function(){

    alert("Welcome to MVJ Café Menu ☕");

});


let contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function(){

    alert("Contact us at: mvjcafe@gmail.com");

});


/* Smooth Fade Animation */

window.addEventListener("scroll", function(){

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let position = card.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }

    });

});
