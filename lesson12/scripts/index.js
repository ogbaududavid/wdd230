function toggleMenu(){
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

function getFooter(){
	let mod= document.lastModified;
	document.getElementsByClassName("footer-text")[0].innerHTML = "bountifulfoods.com &copy; 2022 .:|:. David Ogbaudu .:|:. WDD230 .:|:. Last Updated:" + mod +"<br> Km. 23, Carlsbald, Carlifornia, USA.:|:. +1 00000220.:|:info@bountifulfoods.com";
}

function showTotalDrinks(){
	if(window.localStorage.getItem("specialDrinks") < 1 || window.localStorage.getItem("specialDrinks") == null || isNaN(window.localStorage.getItem("specialDrinks"))){
        window.localStorage.setItem("specialDrinks", 0);
    }

	let myDrinks = document.getElementsByClassName("total")[0];
	myDrinks.textContent = window.localStorage.getItem("specialDrinks")
}