<template>
	<div class="profile">
		<div class="my-profile">
			<h2>{{$t('myProfile')}}</h2>
		</div>
		<div ref="profileTab" class="content-profile">
			<div class="profile-tab">
				<div class="profile-tab-index human" v-on:click="animateButton($event, 'human')">
					<p>Human</p>
				</div>
				<div class="profile-tab-index dev" v-on:click="animateButton($event, 'dev')">
					<p>Developer</p>
				</div>
				<div class="profile-tab-index music" v-on:click="animateButton($event, 'music')">
					<p>Music</p>
				</div>
				<div class="profile-tab-index alien" v-on:click="animateButton($event, 'alien')">
					<p>Alien</p>
				</div>
			</div>
			<div class="container-profile">
				<div class="profile-row" v-for="item in 7" :key="item">
					<div class="hexagon middle" v-for="hex in 5" :key="hex">
						<div class="hexagon-front profile-human"></div>
						<div class="hexagon-back profile-human"></div>
					</div>
					<div class="hexagon" v-if="item % 2 === 0">
						<div class="hexagon-front profile-human"></div>
						<div class="hexagon-back profile-human"></div>
					</div>
				</div>
			</div>
			<div class="profile-article">
				<div>
					<transition name="fade">
						<article v-show="profileType=='dev'" :key="1">
							<h3>Developer</h3>
							<h4>Um pequeno desenvolvedor</h4>
							<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
							<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
							<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
							<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
							<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
							<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
							<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal ainda é o PowerBuilder, mas, dedico meus estudos e novos trabalhos ao JavaScript e algumas outras linguagens que eu ainda não domino tanto quanto. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
						</article>
					</transition>
				</div>
				<div>
					<transition name="fade">
						<article v-show="profileType=='human'" :key="2">
							<h3>Human</h3>
							<h4>Um ser humano melhor</h4>
							<p>Nasci em uma família classe média bem baixa, em uma cidade pequena com sentimento de cidade grande, nada de novo sobre o sol. Criciúma nunca chegou a ser uma metrópole, até por isso era comum poder brincar na rua.</p>
							<p>Tive uma mãe presente e super protetora, um pai ausente e com problemas de saúde, vivi com avós e tias muito próximos, era uma família até certo ponto comum, se for olhar para trás, isso me moldou de uma forma muito interessante.</p>
							<p>Cresci rodeado de problemas pessoais, os quais eu não tinha muito como resolver, apenas aceitava, é difícil para uma criança a separação dos pais, mas para mim, ali estava a solução dos meus problemas.</p>
							<p>Vi minha mãe sofrer pra pagar as contas e vi meu pai continuar a vida bohemia que ele tinha. Novamente, vejo como isso moldou meu caráter.</p>
							<p>Cresci, me profissinalizei, tive meus relacionamentos, minhas separações, adquiri bens e ao mesmo tempo não adquiri nada. Mas me vi com sorte.</p>
							<p>Ainda não ganhei na Mega-Sena, não recebi heranças milionárias, mas me vejo com sorte. Eu olho para trás e penso que ter chegado aqui hoje, desta forma não era o caminho mais fácil.</p>
							<p>Estou casado, morando em um bom apartamento no centro da cidade, podendo viajar e comer bem. Podendo trabalhar com o que eu amo. Isso pode ser chamado de sorte, não vejo de outra forma.</p>
							<p>Tudo aconteceu como tinha que acontecer e foi melhorando a cada ponto. Percebi que estava me tornando um ser humano melhor a cada dia que passava. Mas também me vi um ser humano pior, dependia do ponto de vista.</p>
						</article>
					</transition>
				</div>
				<div>
					<transition name="fade">
						<article v-show="profileType=='music'" :key="3">
							<h3>Developer</h3>
							<h4>Um pequeno desenvolvedor</h4>
							<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
							<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
							<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
							<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
							<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
							<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
							<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal ainda é o PowerBuilder, mas, dedico meus estudos e novos trabalhos ao JavaScript e algumas outras linguagens que eu ainda não domino tanto quanto. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
						</article>
					</transition>
				</div>
				<div>
					<transition name="fade">
						<article v-show="profileType=='alien'" :key="4">
							<h3>Developer</h3>
							<h4>Um pequeno desenvolvedor</h4>
							<p>Como desenvolvedor, minha vida começou cedo. Sempre fui muito timido, curioso e com uma grande vontade de aprender e vivenciar a tecnologia. Tudo que envolvia essa palavra, me fascinava. Aprendi a fazer meus primeiros 'ifs' e 'switchs' criando pequenos RPG's em uns softwares antigos, aonde eu entendi a primeira vez o que era programação.</p>
							<p>Após meu primeiro contato, eu sabia mais ou menos em que eu poderia ser bom. Envolvia matemática e estatística, eram algumas das poucas matérias que eu realmente me destacava. Nem falo por ser um bom aluno, mas é que aquele tipo de conhecimento parecia entrar na minha cabeça de um modo mais simples, tudo parecia mais fácil. Então, talvez fosse por aí o caminho.</p>
							<p>Tive a sorte de ter um primo que me direcionasse. Ter alguém que nos dê um norte é tão necessário quanto água. Não tinha meu pai presente, minha mãe sempre teve a cabeça muito sonhadora, eu precisava ter o dissernimento por mim mesmo, era difícil, mas acho que deu certo.</p>
							<p>Cursei desenvolvimento de software no ensino médio e assim que sai acreditava ser acima dos demais, cheguei no mercado de trabalho e vi que não tinha a mínima noção do que me esperava. Deu certo, aos trancos e barrancos, mas deu certo. Tive trabalho em aprender PowerBuilder, era uma linguagem já morta, sem comunidade ativa, apenas com o conhecimento de dentro da empresa basicamente. Mas isso me ensinou a ser persistente e a resolver meus problemas. Junto com o PowerBuilder, o trabalho com banco de dados, foi minha primeira paixão. Tratar os dados de forma que pudesse trazer resultados a quem necessitava, melhorar desempenho e trazer qualidade na informação ao usuário sempre me deixou animado. Era outro tipo de conhecimento que me parecia tão simples (Parece que foi ontem que eu estudava conjuntos com laranjas e maçãs.).</p>
							<p>Pouco antes de iniciar no mercado de trabalho, iniciei minha faculdade, a qual deixei muito de lado devido a minha dedicação ao trabalho, mas, finalizei com louvor depois de tanto tempo. Tive uma ótima nota em meu trabalho final, o qual tenho muito orgulho de apresentar e falar sobre. Estudar sobre uma tecnologia como a blockchain me deixava animado, coisa que eu não ficava com meu serviço, pois, tudo já parecia muito do mesmo. Durante esse período de trabalho finais, me dediquei a estudar muito javascript, tendo NodeJS e VueJS como meus objetivos principais, precisava disso para finalizar meu objetivo e claro, também vi ali a oportunidade de um futuro, a partir dali quis me tornar realmente um desenvolvedor fullstack.</p>
							<p>Tudo isso ficou em minha cabeça, tanto que após 10 anos de serviço em uma única empresa, decidi sair e enxergar o mundo com outro ponto de vista, abraçar novas oportunidades. Tinha medo de ficar estagnado, mas, também tinha medo do novo. Fico feliz que tenha dado certo. Após tanto tempo, um novo desafio nos rejuvenesce e acalma a alma, por mais complexo que seja.</p>
							<p>Hoje trabalho com análise de sistemas e ainda como desenvolvedor. Minha linguagem principal ainda é o PowerBuilder, mas, dedico meus estudos e novos trabalhos ao JavaScript e algumas outras linguagens que eu ainda não domino tanto quanto. É divertido gastar horas estudando e desenvolvendo meus projetos, isso me faz sentir útil. Acho que todos deveriam ter a oportunidade de trabalhar com o que amam ao menos uma vez na vida.</p>
						</article>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				profileType: "human"
			};
		},
		methods: {
			animateButton: function(event, type) {
				this.changeProfile(event, type);

				let ripples = document.createElement("div");

				ripples.style.left = event.offsetX + "px";
				ripples.style.top = event.offsetY + "px";

				ripples.classList.add("click-effect");

				event.target.appendChild(ripples);

				setTimeout(() => {
					ripples.remove();
				}, 800);
			},
			changeProfile: async function(event, type) {
				const hexagonList = Array.from(
					document.querySelectorAll(".hexagon-front")
				);
				const randomHexagonList = hexagonList.sort(() => Math.random() - 0.5);

				this.profileType = "";

				await randomHexagonList.forEach((e, index, total) => {
					setTimeout(() => {
						e.classList.add("empty-hexagon");
					}, index * 10);

					setTimeout(() => {
						e.classList.remove("profile-dev");
						e.classList.remove("profile-human");
						e.classList.remove("profile-music");
						e.classList.remove("profile-alien");
						e.classList.add(`profile-${type}`);
					}, 850);

					setTimeout(() => {
						e.classList.remove("empty-hexagon");
						if (index + 1 === total.length) {
							this.profileType = type;
						}
					}, index * 10 + 1000);
				});
			}
		}
	};
</script>

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1.5s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.profile-article {
		flex-grow: 2;
		background-color: #1d1d1d11;
		max-height: 710px;
		width: auto;
		padding-top: 30px;
		padding-left: 50px;
		padding-right: 50px;
		text-align: justify;
		overflow-y: scroll;

		h3 {
			font-size: 3em;
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

		p {
			font-size: 1.5em;
			letter-spacing: 0.5px;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
				Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
				"Segoe UI Symbol";
			text-indent: 2em;
		}
	}

	.click-effect {
		position: absolute;
		background: #fff;
		transform: translate(-50%, -50%);
		pointer-events: none;
		border-radius: 50%;
		animation: ripples-animation 0.8s linear;
	}

	@keyframes ripples-animation {
		0% {
			width: 0px;
			height: 0px;
			opacity: 0.5;
		}
		100% {
			width: 500px;
			height: 500px;
			opacity: 0;
		}
	}

	.profile {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #ffffff55;
	}

	.my-profile {
		margin-top: 1%;
		margin-bottom: -2%;
		height: 17%;
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

	.content-profile {
		margin-left: 5%;
		display: flex;
		flex-direction: row;
		width: 90%;
		box-shadow: 10px 10px 40px 0px #00000055;
		border-radius: 2px;
	}

	.profile-tab {
		height: 100%;
		max-width: 7.5%;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.profile-tab-index {
		position: relative;
		height: 25%;
		background: #1d1d1d;
		letter-spacing: 1px;
		overflow: hidden;
		cursor: pointer;
		transition: 0.2s;

		p {
			position: relative;
			font-family: "Bebas Neue", sans-serif;
			color: #e0e3f4;
			font-size: 2.2em;
			height: 100%;
			width: 100%;
			margin: auto;
			text-align: center;
			transform: translateX(-50%) translateY(-50%) rotate(-90deg);
			top: 50%;
			left: 100%;
			user-select: none;
			transition: 0.2s;
		}
	}

	.profile-tab-index:hover {
		background-color: #292929;
	}

	.container-profile {
		background-color: #1d1d1d;
		min-width: 710px;
		height: 710px;
		overflow: hidden;
		position: relative;
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

	$initial-value-top-hexagon: -5%;
	$increment-top-hexagon: 18.5%;

	@for $i from 1 through 7 {
		$odd-even-aux: 0;

		@if $i % 2 == 0 {
			$odd-even-aux: 1;
		} @else {
			$odd-even-aux: 0;
		}

		.profile-row:nth-child(#{$i}) {
			height: 20%;
			display: flex;
			width: 100% + (20% * $odd-even-aux);
			.hexagon {
				background-size: 710px;
				position: relative;
				left: -8.35% * $odd-even-aux;
				top: -25% * $i;
				height: 100%;
				width: 50%;
				clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
				margin: 0px;
				width: 100%;
				height: 100%;
			}

			.hexagon-front,
			.hexagon-back {
				width: 100%;
				height: 100%;
				overflow: hidden;
				backface-visibility: hidden;
				position: absolute;
				transition: transform 0.6s linear;
			}
			.hexagon-front {
				transform: rotateY(0deg);
			}
			.hexagon-back {
				transform: rotateY(180deg);
			}

			.empty-hexagon.hexagon-front {
				transform: rotateY(-180deg);
			}
		}

		$initial-value-left-hexagon: 0%;
		$increment-left-hexagon: 25%;

		$total-itens: 5;

		@if $odd-even-aux == 1 {
			$total-itens: 6;
			$initial-value-left-hexagon: -12.5%;
		}

		.profile-row:nth-child(#{$i}) {
			@for $l from 1 through $total-itens {
				.hexagon:nth-child(#{$l}) {
					.hexagon-front,
					.hexagon-back {
						background-position: top
							calc(#{$initial-value-top-hexagon})
							left
							calc(#{$initial-value-left-hexagon});
						background-color: black;
					}

					$initial-value-left-hexagon: $initial-value-left-hexagon +
						$increment-left-hexagon;
				}
			}
		}

		$initial-value-top-hexagon: $initial-value-top-hexagon +
			$increment-top-hexagon;
	}
</style>
