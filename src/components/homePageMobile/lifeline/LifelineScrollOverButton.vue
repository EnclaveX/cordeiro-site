<template>
	<div
		:class="[lifelinePreviousNextYearsClass, 'lifeline-m-scrolling-years']"
		@mouseover="scroll(direction)"
		@mouseleave="stopScroll()"
	>
		<font-awesome-icon :icon="['fas', icon]" class="icon alt lifeline-m-scroll-icon"/>
	</div>
</template>

<script>
	export default {
		props: {
			btnType: String
		},
		data: () => {
			return {
				lifelinePreviousNextYearsClass: "lifeline-m-previous-years",
				direction: "R",
				icon: "angle-double-right"
			};
		},
		methods: {
			stopScroll: function() {
				clearInterval(this.scrollingYears);
			},
			scroll: function(dir) {
				const el = document.querySelector(".lifeline-m-container");

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
		},
		mounted() {
			if (this.btnType === "R") {
				(this.lifelinePreviousNextYearsClass = "lifeline-m-previous-years"),
					(this.direction = "R");
				this.icon = "angle-double-right";
			} else {
				(this.lifelinePreviousNextYearsClass = "lifeline-m-next-years"),
					(this.direction = "L");
				this.icon = "angle-double-left";
			}
		}
	};
</script>

<style lang="scss">
	.lifeline-m-scroll-icon {
		font-size: 2em;
	}

	.lifeline-m-scrolling-years {
		grid-row: 1 / span 3;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease-in-out;
	}

	.lifeline-m-scrolling-years:hover {
		background-color: #1d1d1d55;
	}

	.lifeline-m-previous-years {
		grid-column: 3;
	}

	.lifeline-m-next-years {
		grid-column: 1;
	}
</style>
