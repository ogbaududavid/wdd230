const requestURL = "json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const businesses = jsonObject["businesses"];
        businesses.forEach(displayBusiness);
    })

function displayBusiness(business){
    let h2 = document.createElement("h2");
    let p1 = document.createElement("P");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let img = document.createElement("img");
    let section = document.createElement("section")

    h2.textContent = business.businessName;
    p1.textContent = `Industry: ${business.industry}`;
    p2.textContent = `Business Location: ${business.address}`;
    p3.textContent = `Membership Level: ${business.membershipLevel}`;
    img.setAttribute("src", business.imageurl);
    img.setAttribute("alt", `${business.businessName} logo`)
    img.setAttribute("loading", "lazy");

    section.appendChild(h2);
    section.appendChild(img);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);

    cards.appendChild(section);

}


