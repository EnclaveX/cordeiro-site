<template>
	<div class="profile">
		<div class="my-profile">
			<h2>{{$t('myProfile')}}</h2>
		</div>
		<div ref="profileTab" class="content-profile">
			<div class="profile-tab">
				<div class="profile-tab-index human" v-on:click="animateButton($event, 'human')">
					<p>Human</p>
				</div>
				<div class="profile-tab-index dev" v-on:click="animateButton($event, 'dev')">
					<p>Developer</p>
				</div>
				<div class="profile-tab-index music" v-on:click="animateButton($event, 'music')">
					<p>Music</p>
				</div>
				<div class="profile-tab-index alien" v-on:click="animateButton($event, 'alien')">
					<p>Alien</p>
				</div>
			</div>
			<div class="container-profile">
				<div class="profile-row" v-for="item in 7" :key="item">
					<div class="hexagon middle" v-for="hex in 5" :key="hex">
						<div class="hexagon-front profile-dev"></div>
						<div class="hexagon-back profile-dev"></div>
					</div>
					<div class="hexagon" v-if="item % 2 === 0">
						<div class="hexagon-front profile-dev"></div>
						<div class="hexagon-back profile-dev"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			animateButton: function(event, type) {
				let ripples = document.createElement("div");

				ripples.style.left = event.offsetX + "px";
				ripples.style.top = event.offsetY + "px";

				ripples.classList.add("click-effect");

				event.target.appendChild(ripples);

				this.changeProfile(event, type);

				setTimeout(() => {
					ripples.remove();
				}, 800);
			},
			changeProfile: function(event, type) {
				const hexagonList = Array.from(
					document.querySelectorAll(".hexagon-front")
				);
				const randomHexagonList = hexagonList.sort(() => Math.random() - 0.5);

				randomHexagonList.forEach((e, index) => {
					setTimeout(() => {
						e.classList.add("empty-hexagon");
					}, index * 10);

					setTimeout(() => {
						e.classList.remove("profile-dev");
						e.classList.remove("profile-human");
						e.classList.remove("profile-music");
						e.classList.remove("profile-alien");
						e.classList.add(`profile-${type}`);
					}, 850);

					setTimeout(() => {
						e.classList.remove("empty-hexagon");
					}, index * 10 + 1000);
				});
			}
		}
	};
</script>

<style lang="scss">
	.click-effect {
		position: absolute;
		background: #fff;
		transform: translate(-50%, -50%);
		pointer-events: none;
		border-radius: 50%;
		animation: animate 0.8s linear;
	}

	@keyframes animate {
		0% {
			width: 0px;
			height: 0px;
			opacity: 0.5;
		}
		100% {
			width: 500px;
			height: 500px;
			opacity: 0;
		}
	}

	.profile {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #e0e3f4;
	}

	.my-profile {
		margin-top: 1%;
		margin-bottom: -2%;
		height: 17%;
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

	.content-profile {
		margin-left: 5%;
		display: flex;
		flex-direction: row;
	}

	.profile-tab {
		height: 100%;
		width: 7.5%;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.profile-tab-index {
		position: relative;
		height: 25%;
		background: #1d1d1d;
		overflow: hidden;
		cursor: pointer;
		p {
			position: relative;
			font-family: "Bebas Neue", sans-serif;
			color: #e0e3f4;
			font-size: 2.2em;
			height: 100%;
			width: 100%;
			margin: auto;
			text-align: center;
			transform: translateX(-50%) translateY(-50%) rotate(-90deg);
			top: 50%;
			left: 100%;
			user-select: none;
		}
	}

	.profile-tab-index:hover {
		background-color: #292929;

		p {
			font-size: 2.4em;
		}
	}

	.container-profile {
		background-color: #1d1d1d;
		width: 710px;
		height: 710px;
		overflow: hidden;
		position: relative;
	}

	.profile-dev {
		background-image: url("./../../assets/skills-imgs/dream/full-img.jpg");
	}

	.profile-human {
		background-image: url("./../../assets/skills-imgs/dream/human.jpg");
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
			.hexagon {
				background-size: 710px;
				position: relative;
				left: -8.35% * $odd-even-aux;
				top: -25% * $i;
				height: 100%;
				width: 50%;
				clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
				margin: 0px;
				cursor: pointer;
				width: 100%;
				height: 100%;
			}

			.hexagon-front,
			.hexagon-back {
				width: 100%;
				height: 100%;
				overflow: hidden;
				backface-visibility: hidden;
				position: absolute;
				transition: transform 0.6s linear;
			}
			.hexagon-front {
				transform: rotateY(0deg);
			}
			.hexagon-back {
				transform: rotateY(180deg);
			}

			.empty-hexagon.hexagon-front {
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
				.hexagon:nth-child(#{$l}) {
					.hexagon-front,
					.hexagon-back {
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
</style>
