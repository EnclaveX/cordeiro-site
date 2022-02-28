<template>
	<div class="profile-m-content">
		<div class="profile-m-picture-container">
			<div class="profile-m-picture profile-m-dev"></div>
		</div>
		<article class="profile-m-article">
			<h3>{{$t('profile.dev')}}</h3>
			<h4>{{$t('profile.devTitle')}}</h4>
			<div id="dev-profile-article-text" class="profile-m-article-text">
				<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
				<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
				<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
				<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
				<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
				<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
				<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal é o JavaScript. Trabalho com algumas outras linguagens como PHP e PowerBuilder. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
				<p
					id="dev-read-more"
					class="profile-m-read-more"
					v-on:click="readMore($event)"
					data-read-more-sit="close"
				>{{$t('profile.readMore')}}</p>
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
	.profile-m-dev {
		background-image: url("./../../../assets/skills-imgs/dream/dev.jpg");
	}
</style>
