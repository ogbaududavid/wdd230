const requestURL = "scripts/fruit.json";
const select1 = document.querySelector("#sfruit1");
const select2 = document.querySelector("#sfruit2");
const select3 = document.querySelector("#sfruit3");
const submitBtn = document.querySelector("#submitBtn")


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject){
        const fruits = jsonObject["fruits"];
        fruits.forEach(displayFruit)
    })


function displayFruit(fruit){
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");


    let fruitName = fruit.name;
    option1.setAttribute("value", fruitName.toLowerCase());
    option2.setAttribute("value", fruitName);
    option3.setAttribute("value", fruitName);


    option1.textContent = fruitName;
    option2.textContent = fruitName;
    option3.textContent = fruitName;

    select1.appendChild(option1);
    select2.appendChild(option2);
    select3.appendChild(option3);

    //select1.addEventListener("click", function () {console.log(select1.options[select1.selectedIndex].text);})
}

document.getElementById("#sfruit1").addEventListener("click", showInfo)
function showInfo(){
    alert(document.getElementById("#sfruit1").options[sfruit1.selectedIndex].text)
}