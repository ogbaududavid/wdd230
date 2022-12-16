let slideIndex2 = 0;
showSlides2();
function showSlides2(){
    let u;
    let slides2 = document.getElementsByClassName("mySlides2");
    for (u = 0; u < slides2.length; u++){
      slides2[u].style.display = "none";
    }
    slideIndex2++
    if(slideIndex2 > slides2.length){slideIndex2 = 1;}
    slides2[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 1000);
}