const cupX = 400;
const cupY = 550;

const cupEllipseRatio = 160 / 50;
const cupRimRadius = 200;
const cupBaseRadius = 130;
const cupHeight = 350;

const labelGap = 20;
const labelRadiusFudgeGap = 10;
const labelMinLength = 24;

const cupWaterlineY = cupY - (0.4 * cupHeight);
const sideSlope = cupHeight / (cupRimRadius - cupBaseRadius);
const cupWaterlineRadiusX = cupBaseRadius + ((cupY - cupWaterlineY) / sideSlope);

const cupMarkup = `
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 800 730">
	<style>
		.cup-rim {
			fill: transparent;
			stroke-width: 6px;
			stroke: #000000;
		}
		.cup-waterline {
			fill: #92a1ff;
			stroke-width: 6px;
			stroke: #000000;
		}
		.cup-water {
			fill: #92a1ff;
		}
		.cup-base {
			fill: #92a1ff;
			stroke-width: 6px;
			stroke: #000000;
		}
		.cup-left-side {
			stroke-width: 6px;
			stroke: #000000;
		}
		.cup-right-side {
			stroke-width: 6px;
			stroke: #000000;
		}

		.cup-label-line {
			fill: transparent;
			stroke-width: 4px;
			stroke: #000000;
		}
		.cup-label-text {
			font-size: 32px;
		}
	</style>
	<path
		class="cup-water"
		d="M${cupX - cupBaseRadius},${cupY} L${cupX - cupWaterlineRadiusX},${cupWaterlineY} L${cupX + cupWaterlineRadiusX},${cupWaterlineY} L${cupX + cupBaseRadius},${cupY} z" />
	<ellipse
		class="cup-rim"
		cx="${cupX}"
		cy="${cupY - cupHeight}"
		rx="${cupRimRadius}"
		ry="${cupRimRadius / cupEllipseRatio}" />
	<ellipse
		class="cup-waterline"
		cx="${cupX}"
		cy="${cupWaterlineY}"
		rx="${cupWaterlineRadiusX}"
		ry="50" />
	<ellipse
		class="cup-base"
		cx="${cupX}"
		cy="${cupY}"
		rx="${cupBaseRadius}"
		ry="${cupBaseRadius / cupEllipseRatio}" />
	<line
		class="cup-left-side"
		x1="${cupX - cupBaseRadius}"
		y1="${cupY}"
		x2="${cupX - cupRimRadius}"
		y2="${cupY - cupHeight}" />
	<line
		class="cup-right-side"
		x1="${cupX + cupBaseRadius}"
		y1="${cupY}"
		x2="${cupX + cupRimRadius}"
		y2="${cupY - cupHeight}" />


	<path
		class="cup-label-line cup-fill-height-label"
		d="M${cupX - cupBaseRadius - labelGap},${cupY} L${cupX - cupWaterlineRadiusX - labelMinLength - labelGap},${cupY} L${cupX - cupWaterlineRadiusX - labelMinLength - labelGap},${cupWaterlineY} L${cupX - cupWaterlineRadiusX - labelGap},${cupWaterlineY}" />
	<text
		class="cup-label-text"
		x="${(cupX - cupWaterlineRadiusX - labelMinLength - labelGap) - labelGap}"
		y="${cupY - ((cupY - cupWaterlineY) / 2)}"
		text-anchor="end"
		alignment-baseline="middle">
		Fill Height
	</text>


	<path
		class="cup-label-line cup-height-label"
		d="M${cupX + cupBaseRadius + labelGap},${cupY} L${cupX + cupRimRadius + labelMinLength + labelGap},${cupY} L${cupX + cupRimRadius + labelMinLength + labelGap},${cupY - cupHeight} L${cupX + cupRimRadius + labelGap},${cupY - cupHeight}" />
	<text
		class="cup-label-text"
		x="${(cupX + cupRimRadius + labelMinLength + labelGap) + labelGap}"
		y="${(cupY - cupHeight) - (((cupY - cupHeight) - cupY) / 2)}"
		text-anchor="start"
		alignment-baseline="middle">
		Height
	</text>


	<path
		class="cup-label-line cup-rim-diameter-label"
		d="M${cupX - cupRimRadius},${cupY - cupHeight - labelGap - labelRadiusFudgeGap} L${cupX - cupRimRadius},${cupY - cupHeight - (cupRimRadius / cupEllipseRatio) - labelMinLength - labelGap} L${cupX + cupRimRadius},${cupY - cupHeight - (cupRimRadius / cupEllipseRatio) - labelMinLength - labelGap} L${cupX + cupRimRadius},${cupY - cupHeight - labelGap - labelRadiusFudgeGap}" />
	<text
		class="cup-label-text"
		x="${cupX}"
		y="${(cupY - cupHeight - (cupRimRadius / cupEllipseRatio) - labelMinLength - labelGap) - labelGap}"
		text-anchor="middle"
		alignment-baseline="baseline">
		Top Diameter
	</text>

	<path
		class="cup-label-line cup-base-diameter-label"
		d="M${cupX - cupBaseRadius},${cupY + labelGap + labelRadiusFudgeGap} L${cupX - cupBaseRadius},${cupY + (cupBaseRadius / cupEllipseRatio) + labelMinLength + labelGap} L${cupX + cupBaseRadius},${cupY + (cupBaseRadius / cupEllipseRatio) + labelMinLength + labelGap} L${cupX + cupBaseRadius},${cupY + labelGap + labelRadiusFudgeGap}" />
	<text
		class="cup-label-text"
		x="${cupX}"
		y="${(cupY + (cupBaseRadius / cupEllipseRatio) + labelMinLength + labelGap) + labelGap}"
		text-anchor="middle"
		alignment-baseline="hanging">
		Bottom Diameter
	</text>
</svg>
`;

Array.prototype.slice.call(document.querySelectorAll('.js-conical-frustum-diagram')).forEach((el) => {
	console.log('el', el);
	el.insertAdjacentHTML('beforeEnd', cupMarkup);
});
