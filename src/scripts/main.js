/**
 * Returns volume of liquid in a conical frustum that is resting on its smaller circular end
 * @param {object} o
 * @property {number} o.bottomRadius - radius of smaller end on the bottom
 * @property {number} o.topRadius - radius of bigger end on the top
 * @property {number} o.height - height of conical frustum
 * @property {number} o.fillHeight - height of liquid
 * @returns {number}
 */
function conicalFrustumVolume(o) {
	var difference = o.topRadius - o.bottomRadius;

	var term1 = o.bottomRadius * o.bottomRadius * o.fillHeight;
	var term2 = (o.bottomRadius * difference * o.fillHeight * o.fillHeight) / o.height;
	var term3 = (difference * difference * o.fillHeight * o.fillHeight * o.fillHeight) / (3 * o.height * o.height);

	return Math.PI * (term1 + term2 + term3);
}

var options = {};

function updateVolume() {
	document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
}

//////////

function bottomRadiusChange() {
	options.bottomRadius = document.querySelector('.js-bottom-radius').value;

	updateVolume();
}

function topRadiusChange() {
	options.topRadius = document.querySelector('.js-top-radius').value;

	updateVolume();
}

function heightChange() {
	options.height = document.querySelector('.js-height').value;

	updateVolume();
}

function fillHeightChange() {
	options.fillHeight = document.querySelector('.js-fill-height').value;

	updateVolume();
}

//////////

document.querySelector('.js-bottom-radius').addEventListener('change', bottomRadiusChange);
document.querySelector('.js-top-radius').addEventListener('change', topRadiusChange);
document.querySelector('.js-height').addEventListener('change', heightChange);
document.querySelector('.js-fill-height').addEventListener('change', fillHeightChange);

//////////

// Get initial options
options.bottomRadius = document.querySelector('.js-bottom-radius').value;
options.topRadius = document.querySelector('.js-top-radius').value;
options.height = document.querySelector('.js-height').value;
options.fillHeight = document.querySelector('.js-fill-height').value;

// Initial run
updateVolume();
