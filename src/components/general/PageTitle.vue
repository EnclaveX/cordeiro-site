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
		height: auto;
		position: relative;

		h2 {
			height: auto;
			top: 2px;
			background-color: transparent;
			font-size: 5em;
			font-family: "Bebas Neue", sans-serif;
			width: 100%;
			letter-spacing: 0.02em;
		}
	}

	.page-title-black {
		color: #1d1d1d;
		h2 {
			margin-left: 40px;
		}
	}

	.page-title-white {
		color: #e0e3f4;
		margin-right: 60px;
		h2 {
			text-align: right;
		}
	}

	@media (max-width: 400px) {
		.page-title {
			height: unset;
			position: relative;

			h2 {
				height: 30px;
				top: initial;
				font-size: 3em;
				font-family: "Bebas Neue", sans-serif;
				width: initial;
				margin-left: 30px;
				letter-spacing: 0.02em;
			}
		}
		
		.page-title-black {
			h2 {
				margin-left: 20px;
			}
		}

		.page-title-white {
			margin-right: 20px;

			h2 {
				text-align: right;
			}
		}
	}
</style>
