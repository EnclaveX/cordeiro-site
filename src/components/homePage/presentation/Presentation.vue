<template>
	<div id="home" class="presentation">
		<div class="presentation-container">
			<div class="presentation-description">
				<div class="presentation-title">
					<h1>{{$t('presentation.presentation')}}</h1>
					<h2 class="presentation-sub-title">{{$t('presentation.title')}}</h2>
					<p class="presentation-note">{{$t('presentation.tecnologies')}}</p>
					<div class="presentation-icons-social-networks">
						<a href="https://www.instagram.com/guilhermecordeiro93/" target="_blank">
							<div class="presentation-icon-container">
								<font-awesome-icon :icon="['fab', 'instagram']" class="presentation-icon"/>
							</div>
						</a>
						<a href="https://github.com/EnclaveX" target="_blank">
							<div class="presentation-icon-container">
								<font-awesome-icon :icon="['fab', 'github']" class="presentation-icon"/>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/guilhermecordeiro93/" target="_blank">
							<div class="presentation-icon-container">
								<font-awesome-icon :icon="['fab', 'linkedin']" class="presentation-icon"/>
							</div>
						</a>
					</div>
					<div class="presentation-select-locale">
						<div class="presentation-locale">
							<img src="./../../../assets/locale-flags/britain-flag.svg" alt="Britain Flag">
							<p>English</p>
						</div>
						<div class="presentation-locale">
							<img src="./../../../assets/locale-flags/brazil-flag.svg" alt="Brazil Flag">
							<p>Português</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="presentation-picture-container">
			<div class="presentation-picture"></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.presentation {
		height: 100vh;
		width: 100vw;
		font-family: "Bebas Neue", sans-serif;
		display: grid;
		grid-template-columns: 63% 37%;
		grid-template-rows: 100%;
		align-items: center;
		justify-content: center;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='937' preserveAspectRatio='none' viewBox='0 0 1920 937'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1793%26quot%3b)' fill='none'%3e%3crect width='1920' height='937' x='0' y='0' fill='url(%23SvgjsRadialGradient1794)'%3e%3c/rect%3e%3cpath d='M994.49 945.44C1137.74 860.94 1068.3 369.28 1323.32 367.12 1578.34 364.96 1798.48 677.46 1980.98 685.7' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M576.68 1056.52C727.28 1027.91 642.62 671.23 1032.66 646.58 1422.69 621.93 1700.77 305.67 1944.61 299.89' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M330.4 1022.53C526.57 973.07 587.75 448.4 891.31 439.25 1194.88 430.1 1171.77 556.38 1452.23 556.38 1732.68 556.38 1869.89 439.87 2013.14 439.25' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M995.86 1085.45C1182.6 1047.46 1263.52 569.47 1553.96 566.26 1844.4 563.05 1964.14 760.18 2112.06 763.03' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M947.4 1085.32C1148.02 927.29 1027.64 166.47 1372.12 156.25 1716.61 146.03 1986.75 549.12 2221.57 559.16' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1793'%3e%3crect width='1920' height='937' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='100%25' cy='50%25' r='1976.33' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient1794'%3e%3cstop stop-color='rgba(48%2c 46%2c 46%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(29%2c 29%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");

		.presentation-container {
			grid-column-start: 1;
			padding-left: 20px;
			height: 100%;

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
					font-size: 3em;
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
					font-size: 0.5em;
					line-height: 174%;
					letter-spacing: 0.02em;
					color: rgb(180, 180, 180);
					margin-top: 20px;
					text-align: left;
				}
			}
		}

		.presentation-select-locale {
			font-size: 0.9rem;

			img {
				width: 25px;
				margin: auto 10px;
			}

			.presentation-locale {
				display: flex;
				margin-bottom: 10px;
				height: 30px;
				transition: all 0.1s ease;

				p {
					margin: auto 0;
					cursor: pointer;
				}
			}

			.presentation-locale:hover {
				font-size: 1.1rem;
			}
		}
	}

	.presentation-icons-social-networks {
		display: flex;
		flex-direction: row;
		.presentation-icon-container {
			height: 100px;
			width: 70px;
			margin-top: 10px;
			.presentation-icon {
				font-size: 3rem;
				color: #e0e3f4;
				margin: auto;
				transition: font-size ease 0.1s, color ease 0.3s;
			}

			.presentation-icon:hover {
				font-size: 3.2rem;
				color: #fff;
			}
		}
	}

	.presentation-picture-container {
		width: 100%;
		grid-column-start: 2;
		.presentation-picture {
			height: 25vw;
			width: 25vw;
			background-color: #e0e3f4;
			border-radius: 50%;
			max-width: 800px;
			max-height: 800px;
			box-shadow: 10px 10px 50px 16px #1d1d1d, 5px 5px 100px 1px #636363;
			background-image: url("./../../../assets/perfil-imgs/me.jpg");
			background-position: 0%;
			background-size: cover;
		}
	}

	@media (max-width: 700px) {
		.presentation {
			grid-template-columns: 55% 45%;
			grid-template-rows: 100%;
			.presentation-container {
				.presentation-description {
					.presentation-title {
						font-size: 1.5em;
					}

					.presentation-note {
						font-size: 0.8em;
					}
				}
			}
		}
	}
</style>
