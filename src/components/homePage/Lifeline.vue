<template>
	<div class="lifeline">
		<div class="my-lifeline">
			<h2>{{$t('myLifeline')}}</h2>
		</div>
		<div class="lifeline-content">
			<div class="lifeline-container">
				<div class="lifeline-bar"></div>
				<div class="lifeline-years">
					<div class="dot">
						<div class="year">2008</div>
					</div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</div>
			<div class="lifeline-dot-description">
				<h5>Lorem ipsum dolor sit amet</h5>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis aliquid pariatur ea fuga ad velit mollitia, dicta sit alias doloribus quia numquam nulla itaque vero, eveniet debitis sed.</p>
			</div>
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
				scrollingYears: false
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
			}
		}
	};
</script>

<style lang="scss">
	.scroll-icon {
		font-size: 2em;
	}

	.scrolling-years {
		grid-row: 1 / span 3;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.previous-years {
		grid-column: 3;
	}

	.next-years {
		grid-column: 1;
	}

	.lifeline-container {
		overflow-x: hidden;
		grid-column: 2;
		grid-row: 2 / span 2;
	}

	.lifeline-dot-description {
		grid-column: 2;
		grid-row: 4;
		background-color: #ffffff55;
		padding: 10px;
		border-radius: 2px;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		box-shadow: 10px 10px 40px 0px #00000055;

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

	.scrolling-years:hover {
		background-color: #1d1d1d55;
	}

	.lifeline {
		position: relative;
		height: 50vh;
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
		height: 100px;
		margin-left: auto;
		margin-right: auto;
		display: grid;
		grid-template-columns: 40px 1fr 40px;
		grid-template-rows: 30px 40px 10px 150px;
	}

	.lifeline-bar {
		height: 10px;
		width: 150%;
		background-color: #e2284d;
		border-radius: 2px;
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
		background-color: #e2284d;
		border-radius: 50%;
		margin-top: 5px;

		.year {
			font-family: "Bebas Neue", sans-serif;
			color: #1d1d1d;
		}
	}
</style>
