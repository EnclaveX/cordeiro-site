<template>
	<div class="presentation-m">
		<div class="presentation-m-container">
			<div class="presentation-m-description">
				<div class="presentation-m-title">
					<h1>{{$t('presentation.presentation')}}</h1>
					<h2 class="presentation-m-sub-title">{{$t('presentation.title')}}</h2>
					<p class="presentation-m-note">{{$t('presentation.tecnologies')}}</p>
				</div>
			</div>
		</div>
		<div class="presentation-m-picture-container">
			<div class="presentation-m-picture"></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.presentation-m {
		height: 100vh;
		width: 100vw;
		font-family: "Bebas Neue", sans-serif;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 10% 45% 45%;
		align-items: center;
		justify-content: center;
		background-color: #1d1d1d;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='937' preserveAspectRatio='none' viewBox='0 0 1920 937'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3crect width='1920' height='937' x='0' y='0' fill='url(%23SvgjsRadialGradient1005)'%3e%3c/rect%3e%3cpath d='M-46.79 234.75C176.6 240.6 426.98 538.58 784.74 562.7 1142.49 586.82 1062.3 915.7 1200.5 942.86' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-20.66 458.02C129.83 458.58 274.58 575.14 569.82 575.14 865.06 575.14 848.54 452.6 1160.3 458.02 1472.06 463.44 1557.51 941.28 1750.78 976.23' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-286.4 683.06C-78.02 675.64 83.89 343.09 476.37 345.74 868.85 348.39 984.11 1002.25 1239.14 1053.92' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-239.54 425.72C5.12 433.63 180.69 799.12 661.1 809.89 1141.5 820.66 1325.47 1093.09 1561.73 1096.52' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-247.85 582.06C-15.19 596.6 238.93 1022.69 568.98 1031.82 899.03 1040.95 874.73 1074.97 977.4 1075.03' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1920' height='937' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='100%25' cy='50%25' r='1976.33' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient1005'%3e%3cstop stop-color='rgba(48%2c 46%2c 46%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(29%2c 29%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");
		
		.presentation-m-container {
			grid-column-start: 1;
			grid-row-start: 2;
			padding-left: 20px;

			.presentation-m-description {
				position: relative;
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 100%;
				z-index: 5;
				margin-left: 2%;

				.presentation-m-title {
					width: auto;
					height: 100%;
					font-size: 1.5em;
					color: #e0e3f4;
					letter-spacing: 4px;

					.presentation-m-sub-title {
						font-size: 0.8em;
						font-weight: 500;
						color: #e0e3f4;
						letter-spacing: 4px;
					}
				}

				.presentation-m-note {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
						Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
						"Segoe UI Symbol";
					font-size: 0.6em;
					line-height: 174%;
					letter-spacing: 0.02em;
					color: rgb(180, 180, 180);
					margin-top: 20px;
					text-align: left;
					overflow-wrap: break-word;
				}
			}
		}
	}
	.presentation-m-picture-container {
		width: 100%;
		grid-column-start: 1;
		grid-row-start: 3;
		.presentation-m-picture {
			height: 200px;
			width: 200px;
			background-color: #e0e3f4;
			border-radius: 50%;
			box-shadow: 10px 10px 50px 16px #1d1d1d, 5px 5px 100px 1px #636363;
			margin: auto;
			background-image: url("./../../../assets/perfil-imgs/me.jpg");
			background-position: 0%;
			background-size: cover;
		}
	}
</style>
