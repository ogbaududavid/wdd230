let current_visit = window.localStorage.getItem("current_visit");
let last_visit = window.localStorage.getItem("last_visit");
let p = document.getElementsByClassName("show-visits")[0];
let time = new Date().getTime()
let day = parseInt(time/(1000 * 3600 * 24));
let diff_in_days = current_visit - last_visit;

if (diff_in_days == 0){
	p.append("It has been 0 day(s) since your last visit")
	window.localStorage.setItem("last_visit", current_visit);
}
else if(diff_in_days === NaN){
	p.append("LOCO")
}
else {
	p.append("It has been " + diff_in_days + " day(s) since your last visit");
	window.localStorage.setItem("last_visit", current_visit);
}

window.localStorage.setItem("current_visit", day);
window.localStorage.setItem("diff_in_days", diff_in_days) 
