<template>
	<div class="lifeline-m-container">
		<div class="lifeline-m-bar"></div>
		<div class="lifeline-m-years">
			<div v-for="(year, id) in years" :key="year" class="lifeline-m-dot-lifeline">
				<div class="lifeline-m-dot" @click="fillingLifelineBar(id)"></div>
				<div class="lifeline-m-year">{{year.year}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				percentageFilling: 0
			};
		},
		props: {
			years: Object
		},
		methods: {
			fillingLifelineBar: function(id) {
				this.yearId = id;

				this.$parent.selectYear(this.yearId);

				const bar = document.querySelector(".lifeline-m-bar");
				const dots = Array.from(document.querySelectorAll(".lifeline-m-dot"));

				const newFillingPercentage =
					(this.yearId / (this.years.length - 1)) * 100;

				let percentageIncrement =
					newFillingPercentage >= this.percentageFilling ? 0.5 : -0.5;

				let percentageDistanceDots = 100 / this.years.length - 1;

				dots.map((el, id) => {
					el.classList.remove("lifeline-m-dot-selected");

					if (id <= this.yearId) {
						el.classList.add("lifeline-m-dot-selected");
					}
				});

				var interval = setInterval(() => {
					this.percentageFilling += percentageIncrement;

					bar.style.background = `linear-gradient(90deg, rgba(226,40,77,1) ${
						this.percentageFilling
					}%, #1d1d1d ${this.percentageFilling}%)`;

					if (
						(this.percentageFilling >= newFillingPercentage &&
							percentageIncrement > 0) ||
						(this.percentageFilling <= newFillingPercentage &&
							percentageIncrement < 0)
					) {
						clearInterval(interval);
					}
				}, 1);
			},
			mounted() {
				this.fillingLifelineBar(0);
			}
		}
	};
</script>

<style lang="scss">
	.lifeline-m-container {
		padding: 0 10px;
		overflow-x: hidden;
		grid-column: 2;
		grid-row: 2 / span 2;
	}

	.lifeline-m-bar {
		height: 10px;
		width: 200%;
		background-color: #1d1d1d;
		border-radius: 2px;
		margin-top: 15px;
	}

	.lifeline-m-years {
		width: 200%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		grid-column: 1/3;
		grid-row: 2;
	}

	.lifeline-m-dot {
		width: 20px;
		height: 20px;
		background-color: #1d1d1d;
		border-radius: 50%;
		margin-top: -15px;
		margin-left: auto;
		margin-right: auto;
		transition: all 0.6s ease-in-out;
		cursor: pointer;
	}

	.lifeline-m-dot-selected {
		background-color: #e2284d;
	}

	.lifeline-m-dot:hover {
		width: 22px;
		height: 22px;
	}

	.lifeline-m-year {
		font-family: "Bebas Neue", sans-serif;
		color: #1d1d1d;
	}
</style>
