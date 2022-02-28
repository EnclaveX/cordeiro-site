<template>
	<div class="endpage-footer">
		<div class="endpage-footer-menu">
			<ul>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#profile">Profile</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#lifeline">Lifeline</a>
				</li>
				<li>
					<a href="#portifolio">Portifolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
		<div class="endpage-created-by">
			<a
				href="http://www.guilhermecordeiro.com.br"
				target="_blank"
				rel="noopener noreferrer"
			>{{$t("endpage.createdBy")}} Guilherme Cordeiro</a>
			<div class="endpage-m-partners">
				<p>{{$t("endpage.partners")}}</p>
				<a target="_blank" href="https://bgjar.com">BGJar SVG Backgrounds</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	.endpage-footer {
		height: 25vh;
		width: 100vw;
		background-color: #1d1d1d;
		display: flex;
		padding-top: 10px;
		padding-left: 10px;

		.endpage-footer-menu {
			margin: auto 0;
			list-style: none;
			width: 100px;
			li > a {
				text-decoration: none;
				color: #e0e3f4;
				font-family: "Bebas Neue", sans-serif;
				font-size: 1em;
				display: flex;
				justify-content: left;
				height: 100%;
				width: 100%;
				transition: font-size 0.3s ease;
			}

			li > a:hover {
				font-size: 34px;
			}
		}

		.endpage-m-partners {
			margin-top: 30px;
		}

		.endpage-created-by {
			margin: auto;
			font-family: "Bebas Neue", sans-serif;

			p {
				color: #e0e3f4;
			}

			a {
				font-size: 0.8em;
				text-decoration: none;
				color: #e0e3f4;
				transition: font-size 0.3s ease;
			}
		}
	}
</style>
