<template>
	<div id="contact" class="contact-m">
		<PageTitle title="contact.myContact" type="black"></PageTitle>
		<div class="contacts-m">
			<div class="contact-m-address">
				<h6>{{$t("contact.sendMeEmail")}}</h6>
				<h2>
					<a href="mailto:guilherme.r.cordeiro93@gmail.com">guilherme.r.cordeiro93@gmail.com</a>
				</h2>
			</div>
			<div class="contact-m-social-networks">
				<h6>{{$t("contact.findMeAt")}}</h6>
				<div class="contact-m-icons-social-networks">
					<a href="https://www.instagram.com/guilhermecordeiro93/" target="_blank">
						<div class="contact-m-icon-container">
							<font-awesome-icon :icon="['fab', 'instagram']" class="icon alt scroll-icon"/>
						</div>
					</a>
					<a href="https://github.com/EnclaveX" target="_blank">
						<div class="contact-m-icon-container">
							<font-awesome-icon :icon="['fab', 'github']" class="icon alt scroll-icon"/>
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
	@media (max-width: 400px) {
		.contact-m {
			height: auto;
			background-color: #e0e3f4;
			padding-bottom: 10px
		}

		.contact-m-social-networks {
			margin: auto;

			h6 {
				width: 100%;
			}

			.contact-m-icons-social-networks {
				height: 30px;
				display: flex;
				flex-direction: row;

				a {
					color: #1d1d1d;
					text-decoration: none;

					.contact-m-icon-container {
						width: 30px;
						height: 30px;
						border-radius: 50%;
						margin: 5px;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 2rem;
						transition: all 0.25s ease;
					}

					.contact-m-icon-container:hover {
						font-size: 2.2rem;
					}
				}
			}
		}

		.contact-m-address {
			height: 60px;
		}

		.contact-m h6,
		.contact-m h2 a {
			font-family: "Bebas Neue", sans-serif;
			color: #1d1d1d;
			text-decoration: none;
			font-size: 1em;
			letter-spacing: 1px;
			transition: all 0.25s ease;
		}

		.contact-m h2 a:hover {
			font-size: unset;
		}

		.contacts-m {
			padding: 20px;
			height: auto;
			width: 95%;
			margin: 30px auto 0 auto;
			border-radius: 2px;
			box-shadow: 10px 10px 40px -20px #00000055;
			background-color: #ffffffaa;
		}
	}
</style>
