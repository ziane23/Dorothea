function transitionToSlideshow() {
    document.getElementById('emergency-section').style.display = 'none';
    document.getElementById('slideshow-section').style.display = 'block';
    startSlideshow();
    document.getElementById('background-music').play();
}

let slideIndex = 0;
function startSlideshow() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(startSlideshow, 5000); // Change image every 5 seconds
}