<template>
	<div class="endpage-m-footer">
		<div class="endpage-m-footer-menu">
			<ul>
				<li>
					<a href="#home">{{$t("menu.home")}}</a>
				</li>
				<li>
					<a href="#profile">{{$t("menu.profile")}}</a>
				</li>
				<li>
					<a href="#skills">{{$t("menu.skills")}}</a>
				</li>
				<li>
					<a href="#lifeline">{{$t("menu.lifeline")}}</a>
				</li>
				<li>
					<a href="#portfolio">{{$t("menu.portfolio")}}</a>
				</li>
				<li>
					<a href="#contact">{{$t("menu.contact")}}</a>
				</li>
			</ul>
		</div>
		<div class="endpage-m-created-by">
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
	@media (max-width: 400px) {
		.endpage-m-footer {
			height: 25vh;
			background-color: #1d1d1d;
			display: flex;
			padding-top: 10px;
			padding-left: 10px;

			.endpage-m-footer-menu {
				margin: auto 0;
				list-style: none;
				width: 100px;

				li > a {
					text-decoration: none;
					color: #e0e3f4;
					font-family: "Bebas Neue", sans-serif;
					font-size: 1.2em;
					display: flex;
					justify-content: left;
					height: 100%;
					width: 100%;
					transition: font-size 0.3s ease;
				}
			}

			.endpage-m-partners {
				margin-top: 30px;
			}

			.endpage-m-created-by {
				margin: auto;
				font-family: "Bebas Neue", sans-serif;

				p {
					color: #e0e3f4;
				}

				a {
					font-size: .8em;
					text-decoration: none;
					color: #e0e3f4;
					transition: font-size 0.3s ease;
				}
			}
		}
	}
</style>
