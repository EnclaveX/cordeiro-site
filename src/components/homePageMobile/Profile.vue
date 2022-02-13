<template>
	<div id="profile" class="profile">
		<div class="my-profile">
			<h2>{{$t('myProfile')}}</h2>
		</div>

		<div class="content-profile">
			<article class="profile-article">
				<h3>Dev</h3>
				<h4>Um pequeno desenvolvedor</h4>
				<div id="dev-profile-article-text" class="profile-article-text">
					<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
					<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
					<p
						id="dev-read-more"
						class="read-more"
						v-on:click="readMore($event)"
						data-read-more-sit="close"
					>Read More</p>
					<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
					<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
					<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
					<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
					<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal ainda é o PowerBuilder, mas, dedico meus estudos e novos trabalhos ao JavaScript e algumas outras linguagens que eu ainda não domino tanto quanto. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
				</div>
			</article>
			<div class="picture-presentation-container">
				<div class="picture-presentation"></div>
			</div>
		</div>
		<div class="content-profile">
			<article class="profile-article">
				<h3>Human</h3>
				<h4>Um pequeno desenvolvedor</h4>
				<div id="human-profile-article-text" class="profile-article-text">
					<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
					<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
					<p
						id="human-read-more"
						class="read-more"
						v-on:click="readMore($event)"
						data-read-more-sit="close"
					>Read More</p>
					<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
					<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
					<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
					<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
					<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal ainda é o PowerBuilder, mas, dedico meus estudos e novos trabalhos ao JavaScript e algumas outras linguagens que eu ainda não domino tanto quanto. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
				</div>
			</article>
			<div class="picture-presentation-container">
				<div class="picture-presentation"></div>
			</div>
		</div>
		<div class="content-profile">
			<article class="profile-article">
				<h3>Music</h3>
				<h4>Um pequeno desenvolvedor</h4>
				<div id="music-profile-article-text" class="profile-article-text">
					<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
					<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
					<p
						id="music-read-more"
						class="read-more"
						v-on:click="readMore($event)"
						data-read-more-sit="close"
					>Read More</p>
					<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
					<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
					<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
					<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
					<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal ainda é o PowerBuilder, mas, dedico meus estudos e novos trabalhos ao JavaScript e algumas outras linguagens que eu ainda não domino tanto quanto. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
				</div>
			</article>
			<div class="picture-presentation-container">
				<div class="picture-presentation"></div>
			</div>
		</div>
		<div class="content-profile">
			<article class="profile-article">
				<h3>Alien</h3>
				<h4>Um pequeno desenvolvedor</h4>
				<div id="alien-profile-article-text" class="profile-article-text">
					<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
					<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
					<p
						id="alien-read-more"
						class="read-more"
						v-on:click="readMore($event)"
						data-read-more-sit="close"
					>Read More</p>
					<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
					<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
					<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
					<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
					<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal ainda é o PowerBuilder, mas, dedico meus estudos e novos trabalhos ao JavaScript e algumas outras linguagens que eu ainda não domino tanto quanto. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
				</div>
			</article>
			<div class="picture-presentation-container">
				<div class="picture-presentation"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			readMore: function(event) {
				const clickedElementId = event.target.id;

				const profileArticleTextElementId = `${clickedElementId.substr(
					0,
					clickedElementId.indexOf("-")
				)}-profile-article-text`;

				const profileArticleTextElement = document.getElementById(
					profileArticleTextElementId
				);

				const readMoreSit = event.target.getAttribute("data-read-more-sit");

				if (readMoreSit === "close") {
					event.target.innerHTML = "Read Less";
					profileArticleTextElement.style.height = "auto";
					event.target.setAttribute("data-read-more-sit", "open");
				} else {
					event.target.innerHTML = "Read More";
					profileArticleTextElement.style.height = "200px";
					window.scrollTo(0, event.pageY - event.layerY - 250);
					event.target.setAttribute("data-read-more-sit", "close");
				}
			}
		}
	};
</script>

<style lang="scss">
	@media (max-width: 400px) {
		.profile {
			position: relative;
			height: auto;
			display: flex;
			flex-direction: column;
			background-color: #e0e3f4;
		}

		.my-profile {
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

		.content-profile {
			margin-left: unset;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: unset;
			background-color: initial;
			box-shadow: initial;
			border-radius: 2px;
            margin-bottom: 10px;
		}

		.profile-article {
			flex-grow: 2;
			background-color: initial;
			max-height: unset;
			width: unset;
			padding-top: 30px;
			padding-left: 30px;
			padding-right: 30px;
			text-align: justify;
			overflow-y: unset;

			h3 {
				font-size: 2em;
				margin: 0px;
				font-family: "Bebas Neue", sans-serif;
				letter-spacing: 3px;
			}

			h4 {
				font-size: 1.6em;
				margin: 0px;
				font-family: "Bebas Neue", sans-serif;
				letter-spacing: 1px;
				font-weight: 200;
			}

			.profile-article-text {
				display: block;
				overflow: hidden;
				height: 200px;
				position: relative;

				p {
					font-size: 0.9em;
					letter-spacing: 0.5px;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
						Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
						"Segoe UI Symbol";
					text-indent: 2em;
				}

				.read-more {
					font-size: 1.3em;
					font-family: "Bebas Neue", sans-serif;
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					text-align: center;
					margin: 0;
					padding: 10px 0 0 0;
					cursor: pointer;
					text-indent: unset;
					background-image: linear-gradient(
						to bottom,
						rgba(224, 227, 244, 0) 10%,
						rgba(224, 227, 244, 1) 31%,
						rgba(224, 227, 244, 1) 47%
					);
				}
			}
		}

		.profile-dev {
			background-image: url("./../../assets/skills-imgs/dream/dev.jpg");
		}

		.profile-human {
			background-image: url("./../../assets/skills-imgs/dream/human.jpg");
		}

		.profile-music {
			background-image: url("./../../assets/skills-imgs/dream/music.jpg");
		}

		.profile-alien {
			background-image: url("./../../assets/skills-imgs/dream/alien.jpg");
		}

		.picture-presentation-container .picture-presentation {
			margin-top: 20px;
			box-shadow: unset;
		}
	}
</style>
