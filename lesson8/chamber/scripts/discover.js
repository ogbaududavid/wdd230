let current_visit = window.localStorage.getItem("current_visit");
let last_visit = window.localStorage.getItem("last_visit");
let p = document.getElementsByClassName("show-visits")[0];
let time = new Date().getTime()
let day = parseInt(time/(1000 * 3600 * 24));
let diff_in_days = current_visit - last_visit;

if (diff_in_days == 0){
	p.append("It has been 0 day(s) since your last visit")
	window.localStorage.setItem("last_visit", current_visit);
}
else if (isNaN(diff_in_days)){
	p.append("it has been 0 day(s) since your last visit")
	window.localStorage.setItem("last_visit", current_visit);
}
else {
	p.append("It has been " + diff_in_days + " day(s) since your last visit");
	window.localStorage.setItem("last_visit", current_visit);
}

window.localStorage.setItem("current_visit", day);
window.localStorage.setItem("diff_in_days", diff_in_days) 



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
