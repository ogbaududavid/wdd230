const requestURL = "json/data.json";
const spotlight = document.querySelector(".spotlight");
let orderList = [];
let randomList = [];
let spotlightList =[];
let i = 1;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        const businesses = jsonObject["businesses"];
        businesses.forEach(getGoldSilverMembers);
        createRandomList();
        businesses.forEach(displayMembers);
        
    })

function displayMembers(business){
    
    let h3 = document.createElement("h3");
    let p1 = document.createElement("P");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let a = document.createElement("a");
    let img = document.createElement("img");
    let section2 = document.createElement("section");
    let order = business.order

    h3.textContent = business.businessName;
    p1.textContent = `Industry: ${business.industry}`;
    p2.textContent = `Business Location: ${business.address}`;
    a.textContent = business.websiteurl;
    a.style.color="yellow";

    a.setAttribute("href", business.websiteurl);
    img.setAttribute("src", business.imageurl);
    img.setAttribute("alt", `${business.businessName} logo`)
    img.setAttribute("loading", "lazy");

    section2.appendChild(h3);
    section2.appendChild(img);
    section2.appendChild(p1);
    section2.appendChild(p2);
    section2.appendChild(a);
    if ( randomList.includes(order)){
        spotlight.appendChild(section2)
    }
}

function getGoldSilverMembers(business){
    if (business.membershipLevel == "Silver" || business.membershipLevel == "Gold"){
        orderList.push(business.order);
    }
}

function createRandomList(){
    while (i<5){
        let itemValue = orderList[Math.floor(Math.random()*orderList.length)];
        if ( randomList.includes(itemValue) ){
            i = i;
        }
        else{
            randomList.push(itemValue);
            i +=1 ;
        } 
    }
}