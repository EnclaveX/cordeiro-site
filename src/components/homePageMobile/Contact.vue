<template>
	<div id="contact" class="contact">
		<div class="my-contact">
			<h2>{{$t('myContact')}}</h2>
		</div>
		<div class="contacts">
			<div class="contact-address">
				<h6>Send me an e-mail...</h6>
				<h2>
					<a href="mailto:guilherme.r.cordeiro93@gmail.com">guilherme.r.cordeiro93@gmail.com</a>
				</h2>
			</div>
			<br>
			<br>
			<div class="social-networks">
				<h6>Find me at...</h6>
				<div class="icons-social-networks">
					<a href="https://www.instagram.com/guilhermecordeiro93/" target="_blank">
						<div class="icon-container">
							<font-awesome-icon :icon="['fab', 'instagram']" class="icon alt scroll-icon"/>
						</div>
					</a>
					<a href="https://github.com/EnclaveX" target="_blank">
						<div class="icon-container">
							<font-awesome-icon :icon="['fab', 'github']" class="icon alt scroll-icon"/>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	@media (max-width: 400px) {
		.contact {
			height: 40vh;
			background-color: #e0e3f4;
		}

		.social-networks {
			margin: auto;

			h6 {
				width: 100%;
			}

			.icons-social-networks {
				height: 30px;
				display: flex;
				flex-direction: row;

				a {
					color: #1d1d1d;
					text-decoration: none;

					.icon-container {
						width: 30px;
						height: 30px;
						border-radius: 50%;
						margin: 5px;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 1rem;
						transition: all 0.25s ease;
					}

					.icon-container:hover {
						box-shadow: unset;
						font-size: unset;
					}
				}
			}
		}

		.my-contact {
			margin-top: initial;
			margin-bottom: initial;
			margin-left: 10px;
			height: unset;
			position: relative;
			color: #1d1d1d;

			h2 {
				height: 50px;
				top: initial;
				font-size: 3em;
				font-family: "Bebas Neue", sans-serif;
				width: initial;
				margin-left: 1%;
				letter-spacing: 0.02em;
			}
		}

		.contact-address {
			height: 60px;
		}

		.contact h6,
		.contact h2 a {
			font-family: "Bebas Neue", sans-serif;
			color: #1d1d1d;
			text-decoration: none;
			font-size: 1em;
			letter-spacing: 1px;
			transition: all 0.25s ease;
		}

		.contact h2 a:hover {
			font-size: unset;
		}

		.contacts {
			padding:20px;
			height: 30vh;
			width: 95%;
			margin: 10px auto;
			border-radius: 2px;
			box-shadow: 10px 10px 40px -20px #00000055;
			background-color: #ffffffaa;
		}
	}
</style>
