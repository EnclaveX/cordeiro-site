<template>
	<div>
		<div class="stars"></div>
		<div class="twinkling"></div>
		<div class="clouds"></div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	@keyframes move-twink-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 5000px;
		}
	}
	@-webkit-keyframes move-twink-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 5000px;
		}
	}
	@-moz-keyframes move-twink-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 5000px;
		}
	}
	@-ms-keyframes move-twink-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 5000px;
		}
	}

	@keyframes move-clouds-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 10000px 0;
		}
	}
	@-webkit-keyframes move-clouds-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 10000px 0;
		}
	}
	@-moz-keyframes move-clouds-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 10000px 0;
		}
	}
	@-ms-keyframes move-clouds-back {
		from {
			background-position: 0;
		}
		to {
			background-position: 10000px 0;
		}
	}

	.stars,
	.twinkling,
	.clouds {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: block;
	}

	.stars {
		background: #000
			url('./../../assets/background-imgs/stars.png') repeat top
			center;
		z-index: 0;
		height: 100%;
	}

	.twinkling {
		background: transparent
			url('./../../assets/background-imgs/twinkling.png') repeat
			top center;
		z-index: 1;

		-moz-animation: move-twink-back 200s linear infinite;
		-ms-animation: move-twink-back 200s linear infinite;
		-o-animation: move-twink-back 200s linear infinite;
		-webkit-animation: move-twink-back 200s linear infinite;
		animation: move-twink-back 200s linear infinite;
		height: 100%;
	}

	.clouds {
		background: transparent
			url('./../../assets/background-imgs/clouds.png') no-repeat top
			center;
		z-index: 3;
    background-repeat: repeat-x;
		-moz-animation: move-clouds-back 200s linear infinite;
		-ms-animation: move-clouds-back 200s linear infinite;
		-o-animation: move-clouds-back 200s linear infinite;
		-webkit-animation: move-clouds-back 200s linear infinite;
		animation: move-clouds-back 200s linear infinite;
		height: 100%;
	}
	.clouds:nth-child(2) {
		animation-delay: 1s;
	}
</style>
