/*
 * Returns volume of liquid in a conical frustum that is resting on its smaller circular end
 * {object} o
 * - .bottomRadius - radius of smaller end on the bottom
 * - .topRadius - radius of bigger end on the top
 * - .fillHeight - height of liquid
 * - .height - height of conical frustum
 */
function conicalFrustumVolume(o) {
	var difference = o.topRadius - o.bottomRadius;

	var term1 = o.bottomRadius * o.bottomRadius * o.fillHeight;
	var term2 = (o.bottomRadius * difference * o.fillHeight * o.fillHeight) / o.height;
	var term3 = (difference * difference * o.fillHeight * o.fillHeight * o.fillHeight) / (3 * o.height * o.height);

	return Math.PI * (term1 + term2 + term3);
}

var options = {};

function bottomRadiusChange() {
	options.bottomRadius = document.querySelector('.js-bottom-radius').value;

	document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
}

function topRadiusChange() {
	options.topRadius = document.querySelector('.js-top-radius').value;

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

document.querySelector('.js-bottom-radius').addEventListener('change', bottomRadiusChange);
document.querySelector('.js-top-radius').addEventListener('change', topRadiusChange);
document.querySelector('.js-height').addEventListener('change', heightChange);
document.querySelector('.js-fill-height').addEventListener('change', fillHeightChange);

options.bottomRadius = document.querySelector('.js-bottom-radius').value;
options.topRadius = document.querySelector('.js-top-radius').value;
options.height = document.querySelector('.js-height').value;
options.fillHeight = document.querySelector('.js-fill-height').value;
document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
