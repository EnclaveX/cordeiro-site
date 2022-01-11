<template>
	<div class="portifolio">
		<div class="my-portifolio">
			<h2>{{$t('myPortifolio')}}</h2>
		</div>
		<div class="portifolio-container">
			<div id="1-rad" class="rad-input rad-checked" @click="slideShapes($event.target)"></div>
			<div id="2-rad" class="rad-input" @click="slideShapes($event.target)"></div>
			<div id="3-rad" class="rad-input" @click="slideShapes($event.target)"></div>
			<div id="4-rad" class="rad-input" @click="slideShapes($event.target)"></div>
			<div id="5-rad" class="rad-input" @click="slideShapes($event.target)"></div>
			<div id="6-rad" class="rad-input" @click="slideShapes($event.target)"></div>
			<div id="7-rad" class="rad-input" @click="slideShapes($event.target)"></div>
			<div id="8-rad" class="rad-input" @click="slideShapes($event.target)"></div>
			<main id="carousel">
				<div id="1-carousel-item" class="item" @click="selectShape($event.target)"></div>
				<div id="2-carousel-item" class="item" @click="selectShape($event.target)"></div>
				<div id="3-carousel-item" class="item" @click="selectShape($event.target)"></div>
				<div id="4-carousel-item" class="item" @click="selectShape($event.target)"></div>
				<div id="5-carousel-item" class="item" @click="selectShape($event.target)"></div>
				<div id="6-carousel-item" class="item" @click="selectShape($event.target)"></div>
				<div id="7-carousel-item" class="item" @click="selectShape($event.target)"></div>
				<div id="8-carousel-item" class="item" @click="selectShape($event.target)"></div>
			</main>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {};
		},
		methods: {
			selectShape: function(element) {
				const selectRad = document.getElementById(`${element.id.charAt(0)}-rad`);
				this.slideShapes(selectRad);
			},
			slideShapes: function(element) {
				const radList = Array.from(document.querySelectorAll(".rad-input"));

				radList.forEach(e => {
					e.classList.remove("rad-checked");
				});

				element.classList.add("rad-checked");

				var radId = element.id.charAt(0);
				let carouselShapes = Array.from(document.querySelectorAll("div.item"));

				const rotateDegControl = 10,
					translatePxControl = 600;

				carouselShapes.forEach(shape => {
					var offset = shape.id.charAt(0) - radId;
					shape.style.transform = `rotateY(${rotateDegControl *
						offset}deg) translateX(${translatePxControl * offset}px)`;

					shape.style.zIndex = Math.abs(offset) * -1;
				});
			}
		},
		mounted() {
			this.slideShapes(document.getElementById("1-rad"));
		}
	};
</script>

<style lang="scss">
	.portifolio {
		height: 100vh;
		width: 100vw;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='937' preserveAspectRatio='none' viewBox='0 0 1920 937'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3crect width='1920' height='937' x='0' y='0' fill='url(%23SvgjsRadialGradient1005)'%3e%3c/rect%3e%3cpath d='M-46.79 234.75C176.6 240.6 426.98 538.58 784.74 562.7 1142.49 586.82 1062.3 915.7 1200.5 942.86' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-20.66 458.02C129.83 458.58 274.58 575.14 569.82 575.14 865.06 575.14 848.54 452.6 1160.3 458.02 1472.06 463.44 1557.51 941.28 1750.78 976.23' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-286.4 683.06C-78.02 675.64 83.89 343.09 476.37 345.74 868.85 348.39 984.11 1002.25 1239.14 1053.92' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-239.54 425.72C5.12 433.63 180.69 799.12 661.1 809.89 1141.5 820.66 1325.47 1093.09 1561.73 1096.52' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-247.85 582.06C-15.19 596.6 238.93 1022.69 568.98 1031.82 899.03 1040.95 874.73 1074.97 977.4 1075.03' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1920' height='937' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='100%25' cy='50%25' r='1976.33' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient1005'%3e%3cstop stop-color='rgba(48%2c 46%2c 46%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(29%2c 29%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");

		.my-portifolio {
			top: 60px;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 0px;
			height: 100px;
			width: 90%;
			position: relative;
			color: #e0e3f4;
			margin-bottom: 20px;

			h2 {
				height: 90px;
				top: 2px;
				background-color: transparent;
				font-size: 5em;
				font-family: "Bebas Neue", sans-serif;
				width: 100%;
				text-align: right;
				letter-spacing: 0.02em;
			}
		}
	}

	.portifolio-container {
		height: 600px;
		margin: 0;
		display: grid;
		grid-template-rows: 500px 100px;
		grid-template-columns: 1fr 30px 30px 30px 30px 30px 30px 30px 30px 1fr;
		align-items: center;
		justify-items: center;
	}

	main#carousel {
		grid-row: 1 / 2;
		grid-column: 1 / 11;
		width: 100vw;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		transform-style: preserve-3d;
		perspective: 600px;
	}

	div.item {
		border-radius: 5px;
		position: absolute;
		width: 600px;
		height: 400px;
		transition: all 0.25s linear;
		cursor: pointer;
	}

	div.item:nth-of-type(1) {
		background-color: #90f1ef;
	}
	div.item:nth-of-type(2) {
		background-color: #ff70a6;
	}
	div.item:nth-of-type(3) {
		background-color: #ff9770;
	}
	div.item:nth-of-type(4) {
		background-color: #ffd670;
	}
	div.item:nth-of-type(5) {
		background-color: #e9ff70;
	}
	div.item:nth-of-type(6) {
		background-color: #e9ff70;
	}
	div.item:nth-of-type(7) {
		background-color: #e9ff70;
	}
	div.item:nth-of-type(8) {
		background-color: #e9ff70;
	}

	.rad-input {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background-color: #fff;
		grid-row: 2 / 3;
		cursor: pointer;
	}

	// Because slashs use, grid can be used in a for
	.rad-input:nth-of-type(1) {
		grid-column: 2 / 3;
	}
	.rad-input:nth-of-type(2) {
		grid-column: 3 / 4;
	}
	.rad-input:nth-of-type(3) {
		grid-column: 4 / 5;
	}
	.rad-input:nth-of-type(4) {
		grid-column: 5 / 6;
	}
	.rad-input:nth-of-type(5) {
		grid-column: 6 / 7;
	}
	.rad-input:nth-of-type(6) {
		grid-column: 7 / 8;
	}
	.rad-input:nth-of-type(7) {
		grid-column: 8 / 9;
	}
	.rad-input:nth-of-type(8) {
		grid-column: 9 / 10;
	}

	.rad-input.rad-checked {
		background-color: #ff0000;
	}
</style>
