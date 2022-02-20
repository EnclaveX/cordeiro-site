<template>
	<div
		:class="[previousNextYearsClass, 'scrolling-years']"
		@mouseover="scroll(direction)"
		@mouseleave="stopScroll()"
	>
		<font-awesome-icon :icon="['fas', icon]" class="icon alt scroll-icon"/>
	</div>
</template>

<script>
	export default {
		props: {
			btnType: String
		},
		data: () => {
			return {
				previousNextYearsClass: "previous-years",
				direction: "R",
				icon: "angle-double-right"
			};
		},
		mounted() {
			if (this.btnType === "R") {
				(this.previousNextYearsClass = "previous-years"), (this.direction = "R");
				this.icon = "angle-double-right";
			} else {
				(this.previousNextYearsClass = "next-years"), (this.direction = "L");
				this.icon = "angle-double-left";
			}
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

<style>
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
</style>
