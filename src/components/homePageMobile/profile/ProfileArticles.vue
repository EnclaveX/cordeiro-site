<template>
	<div>
		<ProfileArticleDev></ProfileArticleDev>
		<ProfileArticleHuman></ProfileArticleHuman>
		<ProfileArticleMusic></ProfileArticleMusic>
		<ProfileArticleAlien></ProfileArticleAlien>
	</div>
</template>

<script>
	import { mapActions } from "vuex";

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
		methods: {
			...mapActions("language", ["getLanguage"]),
			readMore: function(event) {
				this.getLanguage();

				const clickedElementId = event.target.id;

				const profileArticleTextElementId = `${clickedElementId.substr(
					0,
					clickedElementId.indexOf("-")
				)}-profile-article-text`;

				const profileArticleTextElement = document.getElementById(
					profileArticleTextElementId
				);

				const readMoreSit = event.target.getAttribute("data-read-more-sit");

				if (readMoreSit === "close") {
					event.target.innerHTML = this.$t("profile.readLess");
					profileArticleTextElement.style.height = "auto";
					event.target.setAttribute("data-read-more-sit", "open");
				} else {
					event.target.innerHTML = this.$t("profile.readMore");
					profileArticleTextElement.style.height = "200px";
					window.scrollTo(0, event.pageY - event.layerY - 250);
					event.target.setAttribute("data-read-more-sit", "close");
				}
			}
		}
	};
</script>

<style lang="scss">
	.profile-m-article {
		flex-grow: 2;
		background-color: initial;
		max-height: unset;
		width: unset;
		padding-top: 10px;
		padding-left: 30px;
		padding-right: 30px;
		text-align: justify;
		overflow-y: unset;

		h3 {
			font-size: 2em;
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

		.profile-m-article-text {
			display: block;
			overflow: hidden;
			height: 200px;
			position: relative;

			p {
				font-size: 0.9em;
				letter-spacing: 0.5px;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
					Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
					"Segoe UI Symbol";
				text-indent: 2em;
			}

			.profile-m-read-more {
				font-size: 1.3em;
				font-family: "Bebas Neue", sans-serif;
				position: sticky;
				bottom: 0;
				left: 0;
				width: 100%;
				text-align: center;
				margin: 0;
				padding: 10px 0 0 0;
				cursor: pointer;
				text-indent: unset;
				background-image: linear-gradient(
					to bottom,
					rgba(224, 227, 244, 0) 10%,
					rgba(224, 227, 244, 1) 31%,
					rgba(224, 227, 244, 1) 47%
				);
			}
		}
	}
</style>
