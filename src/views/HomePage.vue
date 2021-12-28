<template>
	<div>
		<Presentation></Presentation>
		<profile></profile>
		<skills></skills>
		<!-- <StarryBackground></StarryBackground> -->
	</div>
</template>

<script>
	import Presentation from "./../components/homePage/Presentation";
	import Profile from "./../components/homePage/Profile";
	import Skills from "./../components/homePage/Skills";
	import StarryBackground from "./../components/homePage/StarryBackground";
	export default {
		components: {
			Presentation,
			Profile,
			Skills,
			StarryBackground
		},
		provide: function() {
			return {
				goUrl: this.goUrl,
				click: this.click
			};
		},
		data() {
			return {

			};
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
	.link {
		position: absolute;
		text-decoration: none;
		color: gray;
		bottom: 0;
		left: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	@keyframes slide {
		to {
			transform: translateX(0px);
		}
	}
</style>
