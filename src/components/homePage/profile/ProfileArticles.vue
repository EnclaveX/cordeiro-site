<template>
	<div class="profile-article">
		<transition name="fade">
			<ProfileArticleDev v-show="profileType=='dev'" :key="1"></ProfileArticleDev>
		</transition>
		<transition name="fade">
			<ProfileArticleHuman v-show="profileType=='human'" :key="2"></ProfileArticleHuman>
		</transition>
		<transition name="fade">
			<ProfileArticleMusic v-show="profileType=='music'" :key="3"></ProfileArticleMusic>
		</transition>
		<transition name="fade">
			<ProfileArticleAlien v-show="profileType=='alien'" :key="4"></ProfileArticleAlien>
		</transition>
	</div>
</template>

<script>
	import ProfileArticleHuman from "./ProfileArticleHuman";
	import ProfileArticleDev from "./ProfileArticleDev";
	import ProfileArticleMusic from "./ProfileArticleMusic";
	import ProfileArticleAlien from "./ProfileArticleAlien";

	export default {
		components: {
			ProfileArticleHuman,
			ProfileArticleDev,
			ProfileArticleMusic,
			ProfileArticleAlien
		},
		props: {
			profileType: String
		}
	};
</script>

<style  lang="scss">
	.profile-article {
		flex-grow: 2;
		background-color: #1d1d1d11;
		max-height: 710px;
		width: auto;
		padding-top: 30px;
		padding-left: 50px;
		padding-right: 50px;
		text-align: justify;
		overflow-y: scroll;

		h3 {
			font-size: 3em;
			margin: 0px;
			font-family: "Bebas Neue", sans-serif;
			letter-spacing: 3px;
		}

		h4 {
			font-size: 1.6em;
			margin: 0px;
			font-family: "Bebas Neue", sans-serif;
			letter-spacing: 1px;
			font-weight: 200;
		}

		h5 {
			font-size: 1.5em;
			margin: 0px;
			font-family: "Bebas Neue", sans-serif;
			letter-spacing: 1px;
			font-weight: 200;
		}

		p {
			font-size: 1.5em;
			letter-spacing: 0.5px;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
				Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
				"Segoe UI Symbol";
			text-indent: 2em;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1.5s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	@media (max-width: 600px) {
		.profile-article {
			padding: 20px;
			h3 {
				font-size: 2em;
				font-family: "Bebas Neue", sans-serif;
				letter-spacing: 2px;
			}

			h4 {
				font-size: 1.3em;
				font-family: "Bebas Neue", sans-serif;
				letter-spacing: 1px;
				font-weight: 200;
			}

			p {
				font-size: 1.1em;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
					Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
					"Segoe UI Symbol";
				text-indent: 2em;
			}
		}
	}
</style>
