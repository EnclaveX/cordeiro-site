<template>
	<div>
		<presentation></presentation>
		<profile></profile>
		<skill></skill>
		<lifeline></lifeline>
		<portfolio></portfolio>
		<contact></contact>
		<end></end>
	</div>
</template>

<script>
	import Presentation from "./../components/homePageMobile/presentation/Presentation";
	import Profile from "./../components/homePageMobile/profile/Profile";
	import Skill from "./../components/homePageMobile/skill/Skill";
	import Lifeline from "./../components/homePageMobile/lifeline/Lifeline";
	import Portfolio from "./../components/homePageMobile/portfolio/Portfolio";
	import Contact from "./../components/homePageMobile/contact/Contact";
	import End from "./../components/homePageMobile/endpage/End";

	export default {
		components: {
			Presentation,
			Profile,
			Skill,
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
