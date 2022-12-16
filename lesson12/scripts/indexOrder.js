const checkboxes = document.getElementsByClassName("check");
const orderBtn = document.getElementsByClassName("orderBtn")[0];
const requestURL3 = "scripts/fruit.json";
const output = document.getElementsByClassName("output")[0];
orderBtn.addEventListener("click", showOrder2);
let fruitTotal1;
var fruits = {};

fetch(requestURL3)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject){
        const fruits1 = jsonObject["fruits"];
        fruits1.forEach(displayFruit)
    })

function displayFruit(fruit){
    let fruitName = fruit.name;
    let carb = fruit.nutritions.carbohydrates
    let protein = fruit.nutritions.protein
    let fat = fruit.nutritions.fat
    let cal = fruit.nutritions.calories
    let sug = fruit.nutritions.sugar
    fruitTotal1= (carb + protein + fat + cal + sug).toFixed(2);
	fruits[fruitName] = [fruitTotal1];
}

function showOrder2(){
	let p = document.createElement("p");
	p.textContent = "Order received!"
	output.appendChild(p);
	for(i in checkboxes){
		if(checkboxes[i].checked == true){
			let order = checkboxes[i].value;
			if(order in fruits){
				let p = document.createElement("p");
				p.textContent = (" " +order + " drink has " + fruits[order][0] + "g of combined nutrients.");
				output.appendChild(p);
			}
		}
	}
	output.style.display="block";
	orderBtn.remove()
}
