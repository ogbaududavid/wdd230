const button = document.getElementById("chBtn");
const list = document.getElementsByClassName("list")[0];

button.addEventListener("click", function () {
	const input = document.getElementById("favchap").value;
	const span = document.createElement("span");
	const li = document.createElement("li");
	const deleteBtn = document.createElement("button");
	if (input == "") {
		alert("Please enter a valid chapter");
	} else {
		span.innerHTML = "&#10060;";
		deleteBtn.append(span);
		li.append(input);
		li.append(deleteBtn);
		list.append(li);
		deleteBtn.addEventListener("click", function () {
			list.removeChild(li);
		});
	}
	document.getElementById("favchap").value = "";
	document.getElementById("favchap").focus();
});