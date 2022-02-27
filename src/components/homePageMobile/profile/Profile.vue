<template>
	<div id="profile" class="profile">
		<PageTitle title="profile.myProfile" type="black"></PageTitle>
		<ProfileArticles></ProfileArticles>
	</div>
</template>

<script>
	import PageTitle from "./../../general/PageTitle";
	import ProfileArticles from "./ProfileArticles";

	export default {
		components: {
			PageTitle,
			ProfileArticles
		}
	};
</script>

<style lang="scss">
	@media (max-width: 400px) {
		.profile {
			position: relative;
			height: auto;
			display: flex;
			flex-direction: column;
			background-color: #e0e3f4;
		}

		.profile-m-content {
			margin-top: 40px;
			margin-left: unset;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: unset;
			background-color: initial;
			box-shadow: initial;
			border-radius: 2px;
			margin-bottom: 10px;
		}

		.profile-m-picture-container {
			width: 100%;
			grid-column-start: 1;
			grid-row-start: 3;
			.profile-m-picture {
				height: 100px;
				width: 100%;
				background-color: #e0e3f4;
				margin: auto;
				background-position: 0%;
				background-size: cover;
			}
		}
	}
</style>
