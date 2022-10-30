const last_visit = new Date();
let current_visit = new Date();

let numOfDays = current_visit - last_visit;
numVisits++


// get the stored value in localStorage
let days = Number(window.localStorage.getItem("days"));

// determine if this is the first visit or display the number of visits.
if (days!== 0) {
	alert("The last time you visited this page was" + days + "day(s) ago");
} else {
	alert("This is your first visit!");
}
localStorage.setItem("days", numOfDays);


if ((last_visit - current_visit) != 0 ) {
localStorage.setItem("last_visit", numOfDays);
}




