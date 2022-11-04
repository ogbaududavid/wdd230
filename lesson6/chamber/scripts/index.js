function getDate(){
	let now = new Date();
	let today = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
	document.getElementsByClassName("show-date")[0].innerHTML= today;
}

function toggleMenu(){
	document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

function getFooter(){
	let mod= document.lastModified;
	let text = "lekkicoc.com &copy; 2022 .:|:. David Ogbaudu .:|:. WDD230 .:|:. Last Updated:" + mod;
	document.getElementsByClassName("footer-text")[0].innerHTML = text;
}

function getEvent(){
	let now = new Date();
	const day = now.getDay()
	if (day == 1 || day==2){
		banner=document.getElementsByClassName("banner")[0];
		banner.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
		banner.style.color= "black";
		banner.style.backgroundColor="pink";	
	}
}