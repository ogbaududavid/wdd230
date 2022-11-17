let currentVisit = window.localStorage.getItem("currentVisit");
let lastVisit = window.localStorage.getItem("lastVisit");
let p = document.getElementsByClassName("showVisits")[0];
let time = new Date().getTime()
let day = parseInt(time/(1000 * 3600 * 24));
let diffInDays = currentVisit - lastVisit;
getLastVisit()

function getLastVisit(){
  if (diffInDays == 0){
    p.append("It has been 0 day(s) since your last visit")
    window.localStorage.setItem("lastVisit", currentVisit);
  }
  else if (isNaN(diffInDays)){
    p.append("it has been 0 day(s) since your last visit")
    window.localStorage.setItem("lastVisit", currentVisit);
  }
  else {
    p.append("It has been " + diffInDays + " day(s) since your last visit");
    window.localStorage.setItem("lastVisit", currentVisit);
  }

  window.localStorage.setItem("currentVisit", day);
  window.localStorage.setItem("diffInDays", diffInDays) 
}


let imagesToLoad = document.querySelectorAll("source[data-srcset]");
const loadImages = (image) => {
  image.setAttribute("srcset", image.getAttribute("data-srcset"));
  image.onload = () =>{
    image.removeAttribute("data-srcset");
  };
};
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((source) => {
    observer.observe(source);
  });
} else {
  imagesToLoad.forEach((source) => {
    loadImages(source);
  });
}
