<template>
	<main id="carousel">
		<div
			v-for="portfolio in portfolios"
			:key="portfolio.idCarousel"
			:id="portfolio.idCarousel"
			:data-id="portfolio.id"
			class="item"
			@click="selectShape($event.target)"
		></div>
	</main>
</template>

<script>
	export default {
		props: {
			portfolios: Array
		},
		methods: {
			selectShape(target) {
				this.$parent.selectShape(target);
			}
		}
	};
</script>

<style>
	#carousel {
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

	.item {
		border-radius: 5px;
		position: absolute;
		width: 600px;
		height: 400px;
		transition: all 0.25s linear;
		cursor: pointer;
		background-repeat: no-repeat;
		background-color: #e0e3f4;
		background-position: 50%;
	}

	@media (max-height: 600px) {
		.item {
			height: 300px;
		}
	}
</style>
