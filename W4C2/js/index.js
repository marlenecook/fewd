document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('orangeButton').onclick = switchOrange;
document.getElementById('blueButton').onclick = switchBlue;

function switchGray() {
	document.body.style.backgroundColor = 'gray';
	document.body.style.color = 'white';
}

function switchWhite() {
	document.body.style.backgroundColor = 'white';
	document.body.style.color = 'black';
}

function switchOrange() {
	document.body.style.backgroundColor = 'orange';
	document.body.style.color = 'purple';
}

function switchBlue() {
	document.body.style.backgroundColor = 'cornflowerblue';
	document.body.style.color = 'black';
}

