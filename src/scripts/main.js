/**
 * Returns volume of liquid in a conical frustum that is sitting on a circular end
 * @param {object} o
 * @property {number} o.bottomDiameter - diameter of bottom end
 * @property {number} o.topDiameter - diameter of top end
 * @property {number} o.height - height of conical frustum
 * @property {number} o.fillHeight - height of liquid in conical frustum
 * @returns {number}
 */
function conicalFrustumVolume(o) {
	var bottomRadius = o.bottomDiameter / 2;
	var topRadius = o.topDiameter / 2;

	var difference = topRadius - bottomRadius;

	var term1 = bottomRadius * bottomRadius * o.fillHeight;
	var term2 = (bottomRadius * difference * o.fillHeight * o.fillHeight) / o.height;
	var term3 = (difference * difference * o.fillHeight * o.fillHeight * o.fillHeight) / (3 * o.height * o.height);

	return Math.PI * (term1 + term2 + term3);
}

var options = {};

var bottomDiameterInput = document.querySelector('.js-bottom-diameter');
var topDiameterInput =    document.querySelector('.js-top-diameter');
var heightInput =         document.querySelector('.js-height');
var fillHeightInput =     document.querySelector('.js-fill-height');

function updateVolume() {
	document.querySelector('.js-volume').innerHTML = conicalFrustumVolume(options);
}

//////////

function bottomDiameterChange() {
	options.bottomDiameter = bottomDiameterInput.value;

	localStorage.setItem("bottomDiameter", options.bottomDiameter);

	updateVolume();
}

function topDiameterChange() {
	options.topDiameter = topDiameterInput.value;

	localStorage.setItem("topDiameter", options.topDiameter);

	updateVolume();
}

function heightChange() {
	options.height = heightInput.value;

	localStorage.setItem("height", options.height);

	updateVolume();
}

function fillHeightChange() {
	options.fillHeight = fillHeightInput.value;

	localStorage.setItem("fillHeight", options.fillHeight);

	updateVolume();
}

//////////

// Get initial options
options.bottomDiameter = localStorage.getItem("bottomDiameter") || 40;
options.topDiameter =    localStorage.getItem("topDiameter")    || 25;
options.height =         localStorage.getItem("height")         || 50;
options.fillHeight =     localStorage.getItem("fillHeight")     || 20;

bottomDiameterInput.value = options.bottomDiameter;
topDiameterInput.value =    options.topDiameter;
heightInput.value =         options.height;
fillHeightInput.value =     options.fillHeight;

//////////

bottomDiameterInput.addEventListener('input', bottomDiameterChange);
topDiameterInput.addEventListener('input', topDiameterChange);
heightInput.addEventListener('input', heightChange);
fillHeightInput.addEventListener('input', fillHeightChange);

//////////

// Initial run
updateVolume();
