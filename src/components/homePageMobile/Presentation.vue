<template>
	<div class="presentation">
		<div class="presentation-container">
			<div class="presentation-description">
				<div class="presentation-title">
					<h1>{{$t('presentation-title')}}</h1>
					<h2 class="presentation-sub-title">software analyst | <br> 
						Fullstack Developer</h2>
					<p
						class="presentation-note"
					>Technology is a passion of mine and everyday is a new opportunity to learn something new.</p>
				</div>
			</div>
		</div>
		<div class="picture-presentation-container">
			<div class="picture-presentation"></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@media (max-width: 400px) {
		.presentation {
			height: 100vh;
			width: 100vw;
			font-family: "Bebas Neue", sans-serif;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 10% 50% 40%;
			align-items: center;
			justify-content: center;
			background-color: #1d1d1d;

			.presentation-container {
				grid-column-start: 1;
				grid-row-start: 2;
				padding-left: 20px;

				.presentation-description {
					position: relative;
					display: flex;
					flex-direction: row;
					align-items: center;
					height: 100%;
					z-index: 5;
					margin-left: 2%;

					.presentation-title {
						width: auto;
						height: 100%;
						font-size: 1.5em;
						color: #e0e3f4;
						letter-spacing: 4px;

						.presentation-sub-title {
							font-size: 0.8em;
							font-weight: 500;
							color: #e0e3f4;
							letter-spacing: 4px;
						}
					}

					.presentation-note {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
							Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						font-size: 0.6em;
						line-height: 174%;
						letter-spacing: 0.02em;
						color: rgb(180, 180, 180);
						margin-top: 20px;
						text-align: left;
					}
				}
			}
		}

		.picture-presentation-container {
			width: 100%;
			grid-column-start: 1;
			grid-row-start: 3;
			.picture-presentation {
				height: 200px;
				width: 200px;
				background-color: #e0e3f4;
				border-radius: 50%;
				max-width: 800px;
				max-height: 800px;
				box-shadow: 10px 10px 50px 16px #1d1d1d, 5px 5px 100px 1px #636363;
				margin: auto;
				background-image: url("./../../assets/perfil-imgs/perfil.jpg");
			}
		}
	}
</style>
