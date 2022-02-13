<template>
	<div>
		<presentation></presentation>
		<profile></profile>
		<skills></skills>
		<lifeline></lifeline>
		<portifolio></portifolio>
		<contact></contact>
		<end></end>
	</div>
</template>

<script>
	import Presentation from "./../components/homePageMobile/Presentation";
	import Profile from "./../components/homePageMobile/Profile";
	import Skills from "./../components/homePageMobile/Skills";
	import Lifeline from "./../components/homePageMobile/Lifeline";
	import Portifolio from "./../components/homePageMobile/Portifolio";
	import Contact from "./../components/homePageMobile/Contact";
	import End from "./../components/homePageMobile/End";

	export default {
		components: {
			Presentation,
			Profile,
			Skills,
			Lifeline,
			Portifolio,
			Contact,
			End
		},
		provide: function() {
			return {
				goUrl: this.goUrl,
				click: this.click
			};
		},
		data() {
			return {};
		},
		methods: {
			click(event) {
				let clickedObj = event.target.id;
				let index = Object.keys(this.subtitles).indexOf(clickedObj);

				if (!index >= 0) {
					this.slidePage++;
				}
			},
			goUrl(menu) {
				if (this.$router.currentRoute.path !== `/${menu}`) {
					this.$router.push({ path: `/${menu}` });
				}
			}
		},
		mounted() {
			this.slidePage++;
		}
	};
</script>

<style>
	body {
		overflow-y: overlay;
	}

	@keyframes slide {
		to {
			transform: translateX(0px);
		}
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: #aaa;
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #888;
	}
</style>
