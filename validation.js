//FORM VALIDATION


function validate() {
	var error = 0;
	var travel = document.marsForm.oneway;
	var fname = document.marsForm.fname;
	var lname = document.marsForm.lname;
	var address = document.marsForm.address;
	var city = document.marsForm.city;
	var phone = document.marsForm.phone;
	var email = document.marsForm.email;
	var cardnum = document.marsForm.cardnum;
	var cvv = document.marsForm.cvv;
	var state = document.marsForm.state;
	var expyear = document.marsForm.expYear;
	var expmonth = document.marsForm.expMonth;
	var spans = document.marsForm.getElementsByTagName("span");
	//FIRST NAME
	if (fname.value === "") {
		spans[0].style.visibility = "visible";
		fname.style.backgroundColor = "#f06161";
		fname.style.color = "white";
		error = 1;
	} else {
			spans[0].style.visibility = "hidden";
			fname.style.backgroundColor = "white";
			fname.style.color = "black";
			error = 0;
	}
	//LAST NAME
	if (lname.value === "") {
		lname.style.backgroundColor = "#f06161";
		lname.style.color = "white";
		error = 1;
	} else {
		lname.style.backgroundColor = "white";
		lname.style.color = "black";
		error = 0;
	}
	//ADDRESS
	if (address.value === "") {
		address.style.backgroundColor = "#f06161";
		address.style.color = "white";
		error = 1;
	} else {
		address.style.backgroundColor = "white";
		address.style.color = "black";
		error = 0;
	}
	//city
	if (city.value === "") {
		city.style.backgroundColor = "#f06161";
		city.style.color = "white";
		error = 1;
	} else {
		city.style.backgroundColor = "white";
		city.style.color = "black";
		error = 0;
	}
	//PHONE
	if (phone.value === "") {
		phone.style.backgroundColor = "#f06161";
		phone.style.color = "white";
		error = 1;
	} else {
		phone.style.backgroundColor = "white";
		phone.style.color = "black";
		error = 0;
	}
	//EMAIL
	if (email.value === "") {
		email.style.backgroundColor = "#f06161";
		email.style.color = "white";
		error = 1;
	} else {
		email.style.backgroundColor = "white";
		email.style.color = "black";
		error = 0;
	}
	//ZIP
	if (zip.value === "") {
		zip.style.backgroundColor = "#f06161";
		zip.style.color = "white";
		error = 1;
	} else {
		zip.style.backgroundColor = "white";
		zip.style.color = "black";
		error = 0;
	}
	//CARD NUMBER
	if (cardnum.value === "") {
		cardnum.style.backgroundColor = "#f06161";
		cardnum.style.color = "white";
		error = 1;
	} else {
		cardnum.style.backgroundColor = "white";
		cardnum.style.color = "black";
		error = 0;
	}
	//CVV
	if (cvv.value === "") {
		cvv.style.backgroundColor = "#f06161";
		cvv.style.color = "white";
		error = 1;
	} else {
		cvv.style.backgroundColor = "white";
		cvv.style.color = "black";
		error = 0;
	}
	//STATE
	if (state.value === "") {
	state.style.backgroundColor = "#f06161";
	state.style.color = "white";
	error = 1;
} else {
	state.style.backgroundColor = "white";
	state.style.color = "black";
	error = 0;
}
//EXP MONTH
if (expmonth.value === "") {
expmonth.style.backgroundColor = "#f06161";
expmonth.style.color = "white";
error = 1;
} else {
expmonth.style.backgroundColor = "white";
expmonth.style.color = "black";
error = 0;
}
//EXP YEAR
if (expyear.value === "") {
expyear.style.backgroundColor = "#f06161";
expyear.style.color = "white";
error = 1;
} else {
expyear.style.backgroundColor = "white";
expyear.style.color = "black";
error = 0;
}

	if (error == 0) {
		window.location.assign("confirm.html")
		return true;
	} else {
		return false;
	}

}
