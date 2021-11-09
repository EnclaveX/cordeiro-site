<template>
	<div class="container">
		<div class="background-layer"></div>
		<a
			class="link"
			href="https://br.freepik.com/fotos/negocio"
		>Negócio foto criado por lifeforstock - br.freepik.com</a>

		<div class="titles">
			<transition name="fade">
				<div v-if="slidePage == 0" class="title">{{t('presentation-title')}}</div>
			</transition>
			<transition name="fade">
				<div v-if="slidePage == 1" class="menu">
					<div class="sub-title">{{t('presentation-sub-title1')}}</div>
					<div class="sub-title">{{t('presentation-sub-title2')}}</div>
					<div class="sub-title">{{t('presentation-sub-title3')}}</div>
					<div class="sub-title">{{t('presentation-sub-title4')}}</div>
				</div>
			</transition>
		</div>
		<button class="button-test" v-on:click="click">clicar</button>
	</div>
</template>

<script>
	import { useI18n } from "vue-i18n";
	export default {
		setup() {
			const { t, locale } = useI18n();

			return { t, locale };
		},
		data() {
			return {
				slidePage: -1
			};
		},
		methods: {
			click() {
				this.slidePage++;
			}
		},
		mounted(){
			this.slidePage++
		}
	};
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}

	.container {
		height: 100vh;
		background-image: url("./../assets/city-home.jpg");
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 0;
	}

	.background-layer {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(
			180deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 81, 121, 1) 0%,
			rgba(203, 218, 227, 0.15) 61%,
			rgba(255, 255, 255, 0.22) 84%
		);
		z-index: 1;
	}

	.link {
		position: absolute;
		text-decoration: none;
		color: gray;
		bottom: 0;
		left: 0;
	}

	.titles {
		height: 600px;
		width: 300px;
		font-family: "Bebas Neue", sans-serif;
		z-index: 2;
		margin: 100px;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
	}

	.title {
		width: 100%;
		grid-area: 1/1;
		font-size: 100px;
		color: white;
	}

	.sub-title {
		font-size: 70px;
		color: white;
		transition: font-size 0.3s ease;
		cursor: pointer;
	}

	.sub-title:hover {
		font-size: 80px;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.button-test {
		z-index: 3;
	}

	.menu {
		grid-area: 1/1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
