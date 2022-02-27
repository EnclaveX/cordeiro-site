<template>
	<div id="profile" class="profile">
		<PageTitle title="profile.myProfile" type="black"></PageTitle>
		<div ref="profileTab" class="profile-content-profile">
			<ProfileChangeTab></ProfileChangeTab>
			<ProfileImage></ProfileImage>
			<ProfileArticles :profileType="profileType"></ProfileArticles>
		</div>
	</div>
</template>

<script>
	import ProfileArticles from "./ProfileArticles";
	import ProfileChangeTab from "./ProfileChangeTab";
	import ProfileImage from "./ProfileImage";
	import PageTitle from "./../../general/PageTitle";

	export default {
		components: {
			ProfileArticles,
			ProfileChangeTab,
			ProfileImage,
			PageTitle
		},
		data: () => {
			return {
				profileType: "human"
			};
		},
		methods: {
			animateButton: function(event, type) {
				this.changeProfile(event, type);

				let ripples = document.createElement("div");

				ripples.style.left = event.offsetX + "px";
				ripples.style.top = event.offsetY + "px";

				ripples.classList.add("profile-click-effect");

				event.target.appendChild(ripples);

				setTimeout(() => {
					ripples.remove();
				}, 800);
			},
			changeProfile: async function(event, type) {
				const hexagonList = Array.from(
					document.querySelectorAll(".profile-hexagon-front")
				);
				const randomHexagonList = hexagonList.sort(() => Math.random() - 0.5);

				this.profileType = "";

				await randomHexagonList.forEach((e, index, total) => {
					setTimeout(() => {
						e.classList.add("profile-empty-hexagon");
					}, index * 10);

					setTimeout(() => {
						e.classList.remove("profile-dev");
						e.classList.remove("profile-human");
						e.classList.remove("profile-music");
						e.classList.remove("profile-alien");
						e.classList.add(`profile-${type}`);
					}, 850);

					setTimeout(() => {
						e.classList.remove("profile-empty-hexagon");
						if (index + 1 === total.length) {
							this.profileType = type;
							const profileArticle = document.querySelector(".profile-article");
							profileArticle.scrollTo(0, 0);
						}
					}, index * 10 + 1000);
				});
			}
		}
	};
</script>

<style lang="scss">
	.profile {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #e0e3f4;
	}
	.profile-content-profile {
		margin-left: 5%;
		display: flex;
		flex-direction: row;
		width: 90%;
		background-color: #ffffff55;
		box-shadow: 10px 10px 40px 0px #00000055;
		border-radius: 2px;
	}
</style>
