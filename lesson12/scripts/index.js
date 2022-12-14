function toggleMenu(){
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

function getFooter(){
	let mod= document.lastModified;
	text = "bountifulfoods.com &copy; 2022 .:|:. David Ogbaudu .:|:. WDD230 .:|:. <br>Last Updated:" + mod;
	document.getElementsByClassName("footer-text")[0].innerHTML = text;
}

function showTotalDrinks(){
	if(window.localStorage.getItem("specialDrinks") < 1 || window.localStorage.getItem("specialDrinks") == null || isNaN(window.localStorage.getItem("specialDrinks"))){
        window.localStorage.setItem("specialDrinks", 0);
    }

	let myDrinks = document.getElementsByClassName("total")[0];
	myDrinks.textContent = window.localStorage.getItem("specialDrinks")
}