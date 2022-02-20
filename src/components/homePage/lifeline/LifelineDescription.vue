<template>
	<transition name="slide-fade" mode="out-in">
		<div :key="yearId" class="lifeline-dot-description">
			<h5 :key="yearId">{{years[yearId].year + ' - ' + years[yearId].title}}</h5>
			<p :key="yearId">{{years[yearId].description}}</p>
		</div>
	</transition>
</template>

<script>
	export default {
		props: {
			yearId: Number,
			years: Object
		}
	};
</script>

<style lang="scss">
	.slide-fade-enter-active {
		transition: all 0.5s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter,
	.slide-fade-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}

	.lifeline-dot-description {
		grid-column: 2;
		grid-row: 4;
		background-color: #ffffff55;
		padding: 10px;
		max-height: 95%;
		min-height: 35%;
		overflow-y: scroll;
		border-radius: 2px;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		border-left: 10px solid #e2284d;
		box-shadow: 10px 10px 40px -20px #00000055;

		h5 {
			font-size: 1.5em;
			margin: 0px;
			font-family: "Bebas Neue", sans-serif;
			letter-spacing: 1px;
		}

		p {
			font-size: 1.1em;
			letter-spacing: 0.2px;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
				Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
				"Segoe UI Symbol";
			text-indent: 2em;
		}
	}
</style>
