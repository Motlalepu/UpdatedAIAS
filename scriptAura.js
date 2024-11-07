

const canvas = document.getElementById('canvasOne');
const context = canvas.getContext('2d');
const img = new Image();
img.src = 'assets/desknecklace.png'; 

img.onload = function() {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
};


var firstIndex=0;
function automaticSlide(){
    setTimeout(automaticSlide , 6000);
    var pics;
    const img=document.querySelectorAll('img:not(.no-slide)');
    for(pics=0; pics<img.length;pics++){
        img[pics].style.display='none';
    }
    firstIndex++;
    if(firstIndex > img.length){
        firstIndex =1;
    }
    img[firstIndex -1].style.display='block';
}
automaticSlide();

const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
});



// Manual Slide Controls (Next and Previous)
let imageIndex = 0;

function plusSlides(n) {
    showSlides(imageIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.images img');
    
    // Loop back if index exceeds array bounds
    if (n >= slides.length) {
        imageIndex = 0;
    }
    if (n < 0) {
        imageIndex = slides.length - 1;
    }

    // Hide all images
    slides.forEach(slide => slide.style.display = 'none');
    
    // Show the selected image
    slides[imageIndex].style.display = 'block';
}

// Initialize event listeners for buttons
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.images img');
    
    // Initially hide all images except the first one
    images.forEach((img, index) => {
        if (index !== 0) {
            img.style.display = 'none';
        }
    });

    // Next button event
    document.getElementById('next').addEventListener('click', function() {
        plusSlides(1); // Move to next slide
    });

    // Previous button event
    document.getElementById('prev').addEventListener('click', function() {
        plusSlides(-1); // Move to previous slide
    });
});


//forMusic

var Nikosi = document.getElementById('Nikosi');
var noSlide = document.querySelector('.no-slide');

noSlide.addEventListener('click',  function(){
    // Nikosi.play();
    if(Nikosi.paused){
        Nikosi.play();
        noSlide.src = "assets/pause-removebg-preview.png";
    }else{
        Nikosi.pause();
        noSlide.src = "assets/play_music-removebg-preview.png";
        noSlide.width = 10;   
        noSlide.height = 50; 
    }
});
 
 