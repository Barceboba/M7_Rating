//Constants i array d'estrelles
const star1 = document.getElementById("rate-1");
const star2 = document.getElementById("rate-2");
const star3 = document.getElementById("rate-3");
const star4 = document.getElementById("rate-4");
const star5 = document.getElementById("rate-5");
const stars = [];

stars.push(star1, star2, star3, star4, star5);

//Zona element estrelles
const specifiedElement = document.getElementById('rating-area');

document.addEventListener('click', function (event) {
	//Si on s'ha fet el click pertany o no a la zona de les estrelles
	let isClickInside = specifiedElement.contains(event.target);

	//Si està dins, farà el que hagi de fer amb CSS
	if (isClickInside) {
	}
	//Si no està dins, fem que cada estrella perdi la pseudo classe :checked
	else {
		for (star of stars) {
			star.checked = false;
		}
	}
});