<template>
	<div class="profile-m-content">
		<div class="profile-m-picture-container">
			<div class="profile-m-picture profile-m-human"></div>
		</div>
		<article class="profile-m-article">
			<h3>{{$t('profile.human')}}</h3>
			<h4>{{$t('profile.humanTitle')}}</h4>
			<div id="human-profile-article-text" class="profile-m-article-text">
				<p>Nasci em uma família classe média bem baixa, em uma cidade pequena com sentimento de cidade grande, nada de novo sobre o sol. Criciúma nunca chegou a ser uma metrópole, até por isso era comum poder brincar na rua.</p>
				<p>Tive uma mãe presente e super protetora, um pai ausente e com problemas de saúde, vivi com avós e tias muito próximos, era uma família até certo ponto comum, se for olhar para trás, isso me moldou de uma forma muito interessante.</p>
				<p>Cresci rodeado de problemas pessoais, os quais eu não tinha muito como resolver, apenas aceitava, é difícil para uma criança a separação dos pais, mas para mim, ali estava a solução dos meus problemas.</p>
				<p>Vi minha mãe sofrer pra pagar as contas e vi meu pai continuar a vida bohemia que ele tinha. Novamente, vejo como isso moldou meu caráter.</p>
				<p>Cresci, me profissinalizei, tive meus relacionamentos, minhas separações, adquiri bens e ao mesmo tempo não adquiri nada. Mas me vi com sorte.</p>
				<p>Ainda não ganhei na Mega-Sena, não recebi heranças milionárias, mas me vejo com sorte. Eu olho para trás e penso que ter chegado aqui hoje, desta forma não era o caminho mais fácil.</p>
				<p>Estou casado, morando em um bom apartamento no centro da cidade, podendo viajar e comer bem. Podendo trabalhar com o que eu amo. Isso pode ser chamado de sorte, não vejo de outra forma.</p>
				<p>Tudo aconteceu como tinha que acontecer e foi melhorando a cada ponto. Percebi que estava me tornando um ser humano melhor a cada dia que passava. Mas também me vi um ser humano pior, dependia do ponto de vista.</p>
				<p
					id="human-read-more"
					class="profile-m-read-more"
					v-on:click="readMore($event)"
					data-read-more-sit="close"
				>Read More</p>
			</div>
		</article>
	</div>
</template>

<script>
	export default {
		methods: {
			readMore(target) {
				this.$parent.readMore(target);
			}
		}
	};
</script>

<style>
	.profile-m-human {
		background-image: url("./../../../assets/skills-imgs/dream/human.jpg");
	}
</style>
