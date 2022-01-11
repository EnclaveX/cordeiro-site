<template>
	<div>
		<presentation></presentation>
		<profile></profile>
		<skills></skills>
		<lifeline></lifeline>
		<portifolio></portifolio>
		<contact></contact>
	</div>
</template>

<script>
	import Presentation from "./../components/homePage/Presentation";
	import Profile from "./../components/homePage/Profile";
	import Skills from "./../components/homePage/Skills";
	import Lifeline from "./../components/homePage/Lifeline";
	import Portifolio from "./../components/homePage/Portifolio";
	import Contact from "./../components/homePage/Contact";

	export default {
		components: {
			Presentation,
			Profile,
			Skills,
			Lifeline,
			Portifolio,
			Contact
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
	.link {
		position: absolute;
		text-decoration: none;
		color: gray;
		bottom: 0;
		left: 0;
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
