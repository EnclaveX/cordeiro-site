<template>
	<div class="lifeline" id="lifeline">
		<div class="my-lifeline">
			<h2>{{$t('myLifeline')}}</h2>
		</div>
		<div class="lifeline-content">
			<div class="lifeline-container">
				<div class="lifeline-bar"></div>
				<div class="lifeline-years">
					<div v-for="(year, id) in years" :key="year" class="dot-lifeline">
						<div class="dot" @click="fillingLifelineBar(id)"></div>
						<div class="year">{{year.year}}</div>
					</div>
				</div>
			</div>
			<transition name="slide-fade" mode="out-in">
				<div :key="yearId" class="lifeline-dot-description">
					<h5 :key="yearId">{{years[yearId].year + ' - ' + years[yearId].title}}</h5>
					<p :key="yearId">{{years[yearId].description}}</p>
				</div>
			</transition>

			<div class="scrolling-years previous-years" @mouseover="scroll('R')" @mouseleave="stopScroll()">
				<font-awesome-icon :icon="['fas', 'angle-double-right']" class="icon alt scroll-icon"/>
			</div>
			<div class="scrolling-years next-years" @mouseover="scroll('L')" @mouseleave="stopScroll()">
				<font-awesome-icon :icon="['fas', 'angle-double-left']" class="icon alt scroll-icon"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				scrollingYears: false,
				percentageFilling: 0,
				yearId: 0,
				years: [
					{
						year: 1993,
						title: "Nascimento",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2008,
						title: "Início do meu desenvolvimento",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2011,
						title: "Fim do primeiro ciclo",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2012,
						title: "Início de algo maior",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2015,
						title: "Transição",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2017,
						title: "Primeira quebra",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2019,
						title: "A tão esperada conclusão",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2021,
						title: "Um ano de mudanças",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					},
					{
						year: 2022,
						title: "Redenção",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed."
					}
				]
			};
		},
		methods: {
			stopScroll: function() {
				clearInterval(this.scrollingYears);
			},
			scroll: function(dir) {
				const el = document.querySelector(".lifeline-container");

				clearInterval(this.scrollingYears);

				this.scrollingYears = setInterval(() => {
					let scrollPosition = el.scrollLeft;

					if (dir === "L") {
						el.scrollLeft = scrollPosition - 2;
					} else {
						el.scrollLeft = scrollPosition + 2;
					}
				}, 1);
			},
			fillingLifelineBar: function(id) {
				this.yearId = id;

				const bar = document.querySelector(".lifeline-bar");
				const dots = Array.from(document.querySelectorAll(".dot"));

				const newFillingPercentage =
					(this.yearId / (this.years.length - 1)) * 100;

				let percentageIncrement =
					newFillingPercentage >= this.percentageFilling ? 0.5 : -0.5;

				let percentageDistanceDots = 100 / this.years.length - 1;

				dots.map((el, id) => {
					el.classList.remove('dot-selected')

					if (id <= this.yearId) {
						el.classList.add('dot-selected')
					}
				})

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
			}
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

	.scroll-icon {
		font-size: 2em;
	}

	.scrolling-years {
		grid-row: 1 / span 3;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease-in-out;
	}
	.scrolling-years:hover {
		background-color: #1d1d1d55;
	}

	.previous-years {
		grid-column: 3;
	}

	.next-years {
		grid-column: 1;
	}

	.lifeline-container {
		padding: 0 10px;
		overflow-x: hidden;
		grid-column: 2;
		grid-row: 2 / span 2;
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

	.lifeline {
		position: relative;
		height: 60vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		background-color: #e0e3f4;
	}

	.my-lifeline {
		height: 25%;
		position: relative;
		color: #1d1d1d;

		h2 {
			height: 90px;
			top: 2px;
			font-size: 5em;
			font-family: "Bebas Neue", sans-serif;
			width: 100%;
			margin-left: 5%;
			letter-spacing: 0.02em;
		}
	}

	.lifeline-content {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		display: grid;
		grid-template-columns: 40px 1fr 40px;
		grid-template-rows: 40px 60px 30px 150px;
		background-color: #ffffff55;
		padding: 10px 10px;
		border-radius: 2px;
		box-shadow: 10px 10px 40px -10px #00000055;
	}

	.lifeline-bar {
		height: 10px;
		width: 150%;
		background-color: #1d1d1d;
		border-radius: 2px;
		margin-top: 15px;
	}

	.lifeline-bar-content {
		height: 100%;
		width: 100%;
	}

	.lifeline-years {
		width: 150%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		grid-column: 1/3;
		grid-row: 2;
	}

	.dot {
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

	.dot-selected {
		background-color: #e2284d;
	}

	.dot:hover {
		width: 22px;
		height: 22px;
	}

	.year {
		font-family: "Bebas Neue", sans-serif;
		color: #1d1d1d;
	}
</style>
