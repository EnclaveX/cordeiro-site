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
