<template>
	<div>
		<article>
			<h3>Músico</h3>
			<h4>Algumas notas</h4>
			<p>No mesmo ano que comecei a ser desenvolvedor, iniciei um caminho na música, meu maior e melhor hobby.</p>
			<p>Acredito que todos precisem de algo para fugir, para se ver de um outro angulo, para entender como outras partes do mundo funcionam. Em mim a arte sempre esteve muito presente, ainda mais a música.</p>
			<p>O mundo sempre foi muito bom pra mim, eu tive muito tempo para me dedicar, já cheguei a imaginar que seria muito mais do que um passatempo no meu quarto. Já tive inúmeras bandas, mas nada nunca deu muito certo.</p>
			<p>Hoje levo apenas como diversão, uma forma de encarar o mundo de um jeito mais fácil.</p>
			<br>
			<p>Ainda tenho alguns links interessantes que sairam de mim para curtir. Acesse:</p>
			<br>
			<div class="enclave">
				<div class="enclave-title">
					<h5>Enclave</h5>
					<div class="icon-container">
						<font-awesome-icon :icon="['fab', 'spotify']" class="icon alt scroll-icon"/>
					</div>
				</div>
				<p>
					<a href="https://open.spotify.com/album/13O0tvi8hRjOXmnDox5RW0">1. On the Fire</a>
				</p>
				<p>
					<a href="https://open.spotify.com/album/3RyaGvS8wf1JUJlvfV4HFL">2. Runaway</a>
				</p>
				<p>
					<a href="https://open.spotify.com/album/3ucA0RAWQFs58Qw78ilzvw">3. Rising Sun</a>
				</p>
				<br>
				<br>
			</div>
		</article>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	.enclave-title {
		display: flex;
		flex-direction: row;

		h5 {
			margin-right: 10px;
		}

		.icon-container {
			font-size: 0.8em;
		}
	}
</style>
