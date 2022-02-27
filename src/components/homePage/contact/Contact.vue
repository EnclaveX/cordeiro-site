<template>
	<div id="contact" class="contact">
		<PageTitle title="contact.myContact" type="black"></PageTitle>
		<div class="contacts">
			<div class="contact-address">
				<h6>Send me an e-mail...</h6>
				<h2>
					<a href="mailto:guilherme.r.cordeiro93@gmail.com">guilherme.r.cordeiro93@gmail.com</a>
				</h2>
			</div>
			<br>
			<br>
			<div class="contact-social-networks">
				<h6>Find me at...</h6>
				<div class="contact-icons-social-networks">
					<a href="https://www.instagram.com/guilhermecordeiro93/" target="_blank">
						<div class="contact-icon-container">
							<font-awesome-icon :icon="['fab', 'instagram']" class="icon alt scroll-icon"/>
						</div>
					</a>
					<a href="https://github.com/EnclaveX" target="_blank">
						<div class="contact-icon-container">
							<font-awesome-icon :icon="['fab', 'github']" class="icon alt scroll-icon"/>
						</div>
					</a>
					<a href="https://www.linkedin.com/in/guilhermecordeiro93/" target="_blank">
						<div class="contact-icon-container">
							<font-awesome-icon :icon="['fab', 'linkedin']" class="icon alt scroll-icon"/>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "./../../general/PageTitle";
	export default {
		components: {
			PageTitle
		}
	};
</script>

<style lang="scss">
	.contact {
		height: 42vh;
		width: 100vw;
		background-color: #e0e3f4;
	}

	.contact-social-networks {
		margin: auto;

		h6 {
			width: 100%;
		}

		.contact-icons-social-networks {
			height: 100px;
			display: flex;
			flex-direction: row;

			a {
				color: #1d1d1d;
				text-decoration: none;

				.contact-icon-container {
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

				.contact-icon-container:hover {
					box-shadow: 5px 5px 15px 5px #00000055;
					font-size: 1.1rem;
				}
			}
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
		padding: 20px;
		height: 30vh;
		width: 96%;
		margin: 0% auto;
		border-radius: 2px;
		box-shadow: 10px 10px 40px -20px #00000055;
		background-color: #ffffffaa;
	}

	@media (max-height: 600px) {
		.contact-contact {
			height: 70vh;
			background-color: #e0e3f4;
		}
		.contact-contacts {
			height: 50vh;
		}
	}
</style>
