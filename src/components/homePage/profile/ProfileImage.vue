<template>
	<div class="profile-container-profile">
		<div class="profile-row" v-for="item in 7" :key="item">
			<div class="profile-hexagon middle" v-for="hex in 5" :key="hex">
				<div class="profile-hexagon-front profile-human"></div>
				<div class="profile-hexagon-back profile-human"></div>
			</div>
			<div class="profile-hexagon" v-if="item % 2 === 0">
				<div class="profile-hexagon-front profile-human"></div>
				<div class="profile-hexagon-back profile-human"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	.profile-container-profile {
		background-color: #1d1d1d;
		min-width: 710px;
		height: 710px;
		overflow: hidden;
		position: relative;
	}

	.profile-dev {
		background-image: url("./../../../assets/skills-imgs/dream/dev.jpg");
	}

	.profile-human {
		background-image: url("./../../../assets/skills-imgs/dream/human.jpg");
	}

	.profile-music {
		background-image: url("./../../../assets/skills-imgs/dream/music.jpg");
	}

	.profile-alien {
		background-image: url("./../../../assets/skills-imgs/dream/alien.jpg");
	}

	$initial-value-top-hexagon: -5%;
	$increment-top-hexagon: 18.5%;

	@for $i from 1 through 7 {
		$odd-even-aux: 0;

		@if $i % 2 == 0 {
			$odd-even-aux: 1;
		} @else {
			$odd-even-aux: 0;
		}

		.profile-row:nth-child(#{$i}) {
			height: 20%;
			display: flex;
			width: 100% + (20% * $odd-even-aux);
			.profile-hexagon {
				background-size: 710px;
				position: relative;
				left: -8.35% * $odd-even-aux;
				top: -25% * $i;
				height: 100%;
				width: 50%;
				clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
				margin: 0px;
				width: 100%;
				height: 100%;
			}

			.profile-hexagon-front,
			.profile-hexagon-back {
				width: 100%;
				height: 100%;
				overflow: hidden;
				backface-visibility: hidden;
				position: absolute;
				transition: transform 0.6s linear;
			}
			.profile-hexagon-front {
				transform: rotateY(0deg);
			}
			.profile-hexagon-back {
				transform: rotateY(180deg);
			}

			.profile-empty-hexagon.profile-hexagon-front {
				transform: rotateY(-180deg);
			}
		}

		$initial-value-left-hexagon: 0%;
		$increment-left-hexagon: 25%;

		$total-itens: 5;

		@if $odd-even-aux == 1 {
			$total-itens: 6;
			$initial-value-left-hexagon: -12.5%;
		}

		.profile-row:nth-child(#{$i}) {
			@for $l from 1 through $total-itens {
				.profile-hexagon:nth-child(#{$l}) {
					.profile-hexagon-front,
					.profile-hexagon-back {
						background-position: top
							calc(#{$initial-value-top-hexagon})
							left
							calc(#{$initial-value-left-hexagon});
						background-color: black;
					}

					$initial-value-left-hexagon: $initial-value-left-hexagon +
						$increment-left-hexagon;
				}
			}
		}

		$initial-value-top-hexagon: $initial-value-top-hexagon +
			$increment-top-hexagon;
	}

	@media (max-height: 800px) {
		.profile-content-profile {
			height: 550px;
		}

		.profile-container-profile {
			min-width: 550px;
			height: 550px;
		}

		.profile-dev {
			background-image: url("./../../../assets/skills-imgs/dream/dev-mid.jpg");
		}

		.profile-human {
			background-image: url("./../../../assets/skills-imgs/dream/human-mid.jpg");
		}

		.profile-music {
			background-image: url("./../../../assets/skills-imgs/dream/music-mid.jpg");
		}

		.profile-alien {
			background-image: url("./../../../assets/skills-imgs/dream/alien-mid.jpg");
		}
	}

	@media (max-height: 600px) {
		.profile-content-profile {
			height: 450px;
		}

		.profile-container-profile {
			min-width: 300px;
			height: 450px;
		}

		.profile-dev {
			background-image: url("./../../../assets/skills-imgs/dream/dev-small.jpg");
		}

		.profile-human {
			background-image: url("./../../../assets/skills-imgs/dream/human-small.jpg");
		}

		.profile-music {
			background-image: url("./../../../assets/skills-imgs/dream/music-small.jpg");
		}

		.profile-alien {
			background-image: url("./../../../assets/skills-imgs/dream/alien-small.jpg");
		}
	}
</style>
