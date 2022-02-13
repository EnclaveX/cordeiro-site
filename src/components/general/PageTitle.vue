<template>
	<div
		:class="{
        'page-title-black': type==='black', 
        'page-title-white': type==='white'
        }"
	>
		<h2>{{$t(title)}}</h2>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			type: String
		}
	};
</script>

<style lang="scss">
	.page-title-black {
		margin-top: 1%;
		margin-bottom: -2%;
		height: 17%;
		position: relative;
		color: #1d1d1d;

		h2 {
			height: 90px;
			top: 2px;
			font-size: 5em;
			font-family: "Bebas Neue", sans-serif;
			width: auto;
			margin-left: 5%;
			letter-spacing: 0.02em;
		}
	}

	.page-title-black {
		margin-top: 1%;
		margin-bottom: -2%;
		height: 17%;
		position: relative;
		color: #1d1d1d;
	}

	.page-title-white {
		margin-top: 1%;
		margin-bottom: -2%;
		height: 17%;
		position: relative;
		color: #e0e3f4;
	}

	page-title-black > h2,
	page-title-white > h2 {
		height: 90px;
		top: 2px;
		font-size: 5em;
		font-family: "Bebas Neue", sans-serif;
		width: auto;
		margin-left: 5%;
		letter-spacing: 0.02em;
	}
</style>
