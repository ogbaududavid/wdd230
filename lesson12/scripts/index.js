function toggleMenu(){
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

function getFooter(){
	let mod= document.lastModified;
	text = "bountifulfoods.com &copy; 2022 .:|:. David Ogbaudu .:|:. WDD230 .:|:. <br>Last Updated:" + mod;
	document.getElementsByClassName("footer-text")[0].innerHTML = text;
}