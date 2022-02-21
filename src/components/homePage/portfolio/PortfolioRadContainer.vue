<template>
	<div class="portfolio-rad-container">
		<div
			v-for="portfolio in portfolios"
			:key="portfolio.idRad"
			:id="portfolio.idRad"
			:class="{'rad-input':true,'rad-checked': portfolio.checked}"
			@click="slideShapes($event.target)"
		></div>
	</div>
</template>

<script>
	export default {
		props: {
			portfolios: Array
		},
		methods: {
			slideShapes(target) {
				this.$parent.slideShapes(target);
			}
		}
	};
</script>

<style>
	.portfolio-rad-container {
		display: flex;
		flex-direction: row;
	}

	.rad-input {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background-color: #fff;
		cursor: pointer;
		margin: 20px 3px;
	}

	.rad-input.rad-checked {
		background-color: #ff0000;
	}

	@media (max-height: 600px) {
		.rad-input {
			height: 15px;
			width: 15px;
		}
	}
</style>
