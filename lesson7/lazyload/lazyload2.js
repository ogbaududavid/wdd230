var delay = .3
setTimeout("getItem();", delay * 1000);
  
function getItem(){
let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () =>{
    image.removeAttribute("data-src");
  };
};
imagesToLoad.forEach((img) =>{
  loadImages(img);
});
};