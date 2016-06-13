/*
 * Returns volume of liquid in a conical frustum that is resting on its smaller circular end
 * {object} o
 * - .radius - radius of smaller end
 * - .fillHeight - height of liquid
 * - .difference - positive difference between radiuses of circular ends
 * - .height - height of conical frustum
 */
function conicalFrustumVolume(o) {
	var term1 = o.radius * o.radius * o.fillHeight;
	var term2 = (o.radius * o.difference * o.fillHeight * o.fillHeight) / o.height;
	var term3 = (o.difference * o.difference * o.fillHeight * o.fillHeight * o.fillHeight) / (3 * o.height * o.height);

	return Math.PI * (term1 + term2 + term3);
}

var options = {};

function radiusChange() {
	options.radius = document.querySelector('.js-radius').value;

	document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
}

function heightChange() {
	options.height = document.querySelector('.js-height').value;

	document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
}

function differenceChange() {
	options.difference = document.querySelector('.js-difference').value;

	document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
}

function fillHeightChange() {
	options.fillHeight = document.querySelector('.js-fill-height').value;

	document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
}

document.querySelector('.js-radius').addEventListener('change', radiusChange);
document.querySelector('.js-height').addEventListener('change', heightChange);
document.querySelector('.js-difference').addEventListener('change', differenceChange);
document.querySelector('.js-fill-height').addEventListener('change', fillHeightChange);

options.radius = document.querySelector('.js-radius').value;
options.height = document.querySelector('.js-height').value;
options.difference = document.querySelector('.js-difference').value;
options.fillHeight = document.querySelector('.js-fill-height').value;
document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
