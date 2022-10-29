function getDate(){
let now = new Date();
let today = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
document.getElementsByClassName("show-date")[0].innerHTML= today;
}
function toggleMenu(){
document.getElementsByClassName("links")[0].classList.toggle("responsive");
}
function getFooter(){
let mod= document.lastModified;
text = "lekkicoc.com &copy; 2022 .:|:. David Ogbaudu .:|:. WDD230 .:|:. Last Updated:" + mod;
document.getElementsByClassName("footer-text")[0].innerHTML = text;
}

