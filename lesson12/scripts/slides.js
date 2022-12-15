let slideIndex = 0;
showSlides();
function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1;}
    for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}
  

let slideIndex2 = 0;
showSlides2();
function showSlides2(){
    let u;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot");
    for (u = 0; u < slides2.length; u++){
      slides2[u].style.display = "none";
    }
    slideIndex2++
    if(slideIndex2 > slides2.length){slideIndex2 = 1;}
    slides2[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 1000);
}
  