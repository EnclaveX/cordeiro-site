<template>
	<div class="footer">
		<div class="footer-menu">
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
		<div class="created-by">
			<a
				href="http://www.guilhermecordeiro.com.br"
				target="_blank"
				rel="noopener noreferrer"
			>Created By Guilherme Cordeiro</a>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	@media (max-width: 400px) {
		.footer {
			height: 25vh;
			background-color: #1d1d1d;
			display: flex;
			padding-top: 10px;
			padding-left: 10px;

			.footer-menu {
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

			.created-by {
				margin: auto;
				font-family: "Bebas Neue", sans-serif;

				a {
					text-decoration: none;
					color: #e0e3f4;
					transition: font-size 0.3s ease;
				}
			}
		}
	}
</style>
