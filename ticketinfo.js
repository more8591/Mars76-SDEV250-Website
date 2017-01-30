//Ticket Information

"use strict";

var ticket = {
	date: "",
	fName: "",
	lName: "",
};

function registerName() {
	var passengerList = document.getElementById("passengers");
	var passengerName = document.createElement("li");
	ticket.fName = document.getElementById("fname").value;
	ticket.lName = document.getElementById("lname").value;
	passengerName.innerHTML = ticket.fName + " " + ticket.lName;
	passengerList.appendChild(passengerName);
	
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	
	document.getElementById("ticket").style.display = "block";
	document.getElementById("passengersSection").style.display = "block";
	
	document.getElementById("fname").focus();
}


function selectDate() {
	ticket.date = dateObject.toLocaleString();
	document.getElementById("selectedDate").innerHTML = ticket.date;
	document.getElementById("dateSection").style.display = "block";
}

function createEventListeners () {
	var nameButton = document.getElementById("addName");
	if (nameButton.addEventListener) {
		nameButton.addEventListener("click", registerName, false);
	} else if (nameButton.attachEvent) {
		nameButton.attachEvent("onclick", registerName);
	}	
}
