<template>
	<div class="contact">
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
	.contact {
		height: 60vh;
		background-color: #e0e3f4;
	}

	.social-networks {
		margin: auto;

		h6 {
			width: 100%;
		}
		.icons-social-networks {
			height: 100px;
			display: flex;
			flex-direction: row;

			a {
				color: #1d1d1d;
				text-decoration: none;

				.icon-container {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					margin: 5px;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 1rem;
					transition: all 0.25s ease;
				}

				.icon-container:hover {
					box-shadow: 5px 5px 15px 5px #00000055;
					font-size: 1.1rem;
				}
			}
		}
	}

	.my-contact {
		height: 15vh;
		position: relative;
		color: #1d1d1d;

		h2 {
			height: 90px;
			top: 2px;
			font-size: 5em;
			font-family: "Bebas Neue", sans-serif;
			width: 100%;
			margin-left: 5%;
			letter-spacing: 0.02em;
		}
	}

	.contact-address {
		height: 110px;
	}

	.contact h6,
	.contact h2 a {
		font-family: "Bebas Neue", sans-serif;
		color: #1d1d1d;
		text-decoration: none;
		font-size: 2em;
		letter-spacing: 3px;
		transition: all 0.25s ease;
	}

	.contact h2 a:hover {
		font-size: 2.1em;
	}

	.contacts {
		padding: 30px;
		height: 40vh;
		width: 95%;
		margin: 0% auto;
		border-radius: 2px;
		box-shadow: 10px 10px 40px -20px #00000055;
		background-color: #ffffffaa;
	}
</style>
