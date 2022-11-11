const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject){
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  })


function displayProphets(prophet) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let birthDate = document.createElement("p");
  let birthPlace = document.createElement("p")
  let portrait = document.createElement("img");
  let num = prophet.order
  let position = ""

  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  birthDate.textContent =  `Date of Birth: ${prophet.birthdate}`;
  birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

  portrait.setAttribute("src", prophet.imageurl);

  if (num==1){
    position = "st"
  }
  else if (num==2){
    position = "nd"
  }
  else if (num==3){
    position = "rd"
  }
  else{
    position = "th"
  }
  portrait.setAttribute("alt", `portrait of ${prophet.name} ${prophet.lastname} ${num++}${position} Latter-day President`);
  portrait.setAttribute("loading", "lazy");

  card.appendChild(h2);
  card.appendChild(birthDate);
  card.appendChild(birthPlace);
  card.appendChild(portrait);

  document.querySelector("div.cards").appendChild(card);

}
