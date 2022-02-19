<template>
	<div
		:class="{
		'page-title': true,
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
	.page-title {
		margin-top: 1%;
		margin-bottom: -2%;
		height: 17%;
		position: relative;
	}

	.page-title > h2 {
		height: 90px;
		top: 2px;
		background-color: transparent;
		font-size: 5em;
		font-family: "Bebas Neue", sans-serif;
		width: 100%;
		letter-spacing: 0.02em;
	}

	.page-title-black {
		color: #1d1d1d;
	}

	.page-title-black > h2 {
		margin-left: 5%;
	}

	.page-title-white {
		color: #e0e3f4;
		margin-right: 5%;
	}

	.page-title-white > h2 {
		text-align: right;
	}
</style>
