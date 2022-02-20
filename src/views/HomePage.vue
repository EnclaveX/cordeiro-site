<template>
	<div>
		<presentation></presentation>
		<profile></profile>
		<skills></skills>
		<lifeline></lifeline>
		<Portfolio></Portfolio>
		<contact></contact>
		<end></end>
	</div>
</template>

<script>
	import Presentation from "./../components/homePage/Presentation";
	import Profile from "./../components/homePage/profile/Profile";
	import Skills from "./../components/homePage/skills/Skills";
	import Lifeline from "./../components/homePage/lifeline/Lifeline";
	import Portfolio from "./../components/homePage/portfolio/Portfolio";
	import Contact from "./../components/homePage/Contact";
	import End from "./../components/homePage/End";

	export default {
		components: {
			Presentation,
			Profile,
			Skills,
			Lifeline,
			Portfolio,
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
