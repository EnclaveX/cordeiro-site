<template>
	<div class="profile-tab">
		<div class="profile-tab-index" v-on:click="tabClick($event, 'human')">
			<p>Human</p>
		</div>
		<div class="profile-tab-index" v-on:click="tabClick($event, 'dev')">
			<p>Dev</p>
		</div>
		<div class="profile-tab-index" v-on:click="tabClick($event, 'music')">
			<p>Music</p>
		</div>
		<div class="profile-tab-index" v-on:click="tabClick($event, 'alien')">
			<p>Alien</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			tabClick(event, type) {
				this.$parent.animateButton(event, type);
			}
		}
	};
</script>

<style lang="scss">
	.profile-tab {
		height: 100%;
		max-width: 7.5%;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;

		.profile-tab-index {
			position: relative;
			height: 25%;
			background: #1d1d1d;
			letter-spacing: 1px;
			overflow: hidden;
			cursor: pointer;
			transition: 0.2s;

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
				left: 130%;
				user-select: none;
				transition: 0.2s;
			}
		}
	}

    .profile-tab-index:hover {
		background-color: #292929;
	}

	.click-effect {
		position: absolute;
		background: #fff;
		transform: translate(-50%, -50%);
		pointer-events: none;
		border-radius: 50%;
		animation: ripples-animation 0.8s linear;
	}

	@keyframes ripples-animation {
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

	@media (max-height: 800px) {
		.profile-tab {
			.profile-tab-index {
				p {
					left: 110%;
				}
			}
		}
	}

	@media (max-height: 600px) {
		.profile-tab {
			height: initial;
			max-width: initial;
			border-top-left-radius: initial;
			border-bottom-left-radius: initial;
			.profile-tab-index {
				p {
					left: 100%;
				}
			}
		}
	}
</style>
