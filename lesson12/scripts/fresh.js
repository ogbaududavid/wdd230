const requestURL = "scripts/fruit.json";
const select1 = document.querySelector("#sfruit1");
const select2 = document.querySelector("#sfruit2");
const select3 = document.querySelector("#sfruit3");
const submitBtn = document.querySelector("#submitBtn");
const showDrink = document.getElementsByClassName("showDrink")[0];
let numberOfSpecialDrinks = Number(window.localStorage.getItem("specialDrinks"))
let fruitTotal;
var fruits = {};



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
    let carb = fruit.nutritions.carbohydrates
    let protein = fruit.nutritions.protein
    let fat = fruit.nutritions.fat
    let cal = fruit.nutritions.calories
    let sug = fruit.nutritions.sugar

    fruitTotal= (carb + protein + fat + cal + sug).toFixed(2);
    fruits[fruitName] = [carb, protein, fat, cal, sug, fruitTotal];

    option1.setAttribute("value", fruitName.toLowerCase());
    option2.setAttribute("value", fruitName);
    option3.setAttribute("value", fruitName);

    option1.textContent = fruitName;
    option2.textContent = fruitName;
    option3.textContent = fruitName;

    select1.appendChild(option1);
    select2.appendChild(option2);
    select3.appendChild(option3);
}


submitBtn.addEventListener("click", showResult);

function showResult(){
    const fname = document.getElementsByClassName("fname")[0].value;
    const email = document.getElementsByClassName("email")[0].value;
    const tel = document.getElementsByClassName("tel")[0].value;
    const note = document.getElementsByClassName("note")[0].value;
    if ( fname, tel !== null && fname, email, tel !== "" ){
            let pinfo = document.createElement("span");
            let s1 = document.createElement("span");
            let s2 = document.createElement("span");
            let s3 = document.createElement("span");
            let s4 = document.createElement("span");
            let s5 = document.createElement("span");
            let s6 = document.createElement("span");
            let h4 = document.createElement("h4");
            let section1 = document.createElement("section");
            let section2 = document.createElement("section");
            let section3 = document.createElement("section");
            let clearBtn = document.createElement("button");

            let fruit1 = select1.options[select1.selectedIndex].text;
            let fruit2 = select2.options[select2.selectedIndex].text;
            let fruit3 = select3.options[select3.selectedIndex].text;

            for( i in fruits ){
                if (i == fruit1){
                    s1.textContent= `${fruit1} has
                    Cabornhydrate: ${fruits[fruit1][0]}g, 
                    Protein: ${fruits[fruit1][1]}g, 
                    Fat: ${fruits[fruit1][2]}g, 
                    Calcium: ${fruits[fruit1][3]}g, 
                    Sugar: ${fruits[fruit1][4]}g,`; 
                }
                if (i == fruit2){
                    s2.textContent= `${fruit2} has
                    Cabornhydrate: ${fruits[fruit2][0]}g, 
                    Protein: ${fruits[fruit2][1]}g, 
                    Fat: ${fruits[fruit1][2]}g, 
                    Calcium: ${fruits[fruit2][3]}g, 
                    Sugar: ${fruits[fruit2][4]}g,`; 
                }
                if (i == fruit3){
                    s3.textContent= `${fruit3} has
                    Cabornhydrate: ${fruits[fruit3][0]}g, 
                    Protein: ${fruits[fruit3][1]}g, 
                    Fat: ${fruits[fruit3][2]}g, 
                    Calcium: ${fruits[fruit3][3]}g, 
                    Sugar: ${fruits[fruit3][4]}g`; }
            }
            let grandTotal = (parseFloat(fruits[fruit1][5]) +  parseFloat(fruits[fruit2][5]) + parseFloat(fruits[fruit3][5])).toFixed(2);

            h4.textContent = "Order Summary";
            s6.textContent = "Order Date:" + new Date();
            pinfo.textContent = `Name: ${fname}  |  Email: ${email}  |  Tel: ${tel}`;
            s4.textContent = `Your combined nutritional serving for your special drink is ${grandTotal}g`;
            s5.textContent = `Special Note: ${note}`;
            clearBtn.setAttribute("id", "clearBtn");
            clearBtn.textContent = "Reload Form Page";
            clearBtn.addEventListener("click", function (){window.location.reload();})

            section1.appendChild(pinfo);
            section1.appendChild(s6);
            section2.setAttribute("class", "fruitDetails");
            section2.appendChild(s1);
            section2.appendChild(s2);
            section2.appendChild(s3);
            section3.appendChild(s4);
            section3.appendChild(s5);
            section3.appendChild(clearBtn);


            showDrink.appendChild(h4);
            showDrink.appendChild(section1);
            showDrink.appendChild(section2);
            showDrink.appendChild(section3);

            showMyDrink();
            submitBtn.remove();
    }
    else{
        alert("Enter the required field")
    }
}
function showMyDrink(){
    showDrink.style.display="block";

    if(isNaN(numberOfSpecialDrinks)){
        window.localStorage.setItem("specialDrinks", 0);   
        numberOfSpecialDrinks = window.localStorage.getItem("specialDrinks");
    }
    window.localStorage.setItem("specialDrinks", numberOfSpecialDrinks + 1);
}