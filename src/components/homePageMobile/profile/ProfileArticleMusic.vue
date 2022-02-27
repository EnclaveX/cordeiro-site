<template>
	<div class="profile-m-content">
		<div class="profile-m-picture-container">
			<div class="profile-m-picture profile-m-music"></div>
		</div>
		<article class="profile-m-article">
			<h3>{{$t('profile.music')}}</h3>
			<h4>{{$t('profile.musicTitle')}}</h4>
			<div id="music-profile-article-text" class="profile-m-article-text">
				<p>No mesmo ano que comecei a ser desenvolvedor, iniciei um caminho na música, meu maior e melhor hobby.</p>
				<p>Acredito que todos precisem de algo para fugir, para se ver de um outro angulo, para entender como outras partes do mundo funcionam. Em mim a arte sempre esteve muito presente, ainda mais a música.</p>
				<p>O mundo sempre foi muito bom pra mim, eu tive muito tempo para me dedicar, já cheguei a imaginar que seria muito mais do que um passatempo no meu quarto. Já tive inúmeras bandas, mas nada nunca deu muito certo.</p>
				<p>Hoje levo apenas como diversão, uma forma de encarar o mundo de um jeito mais fácil.</p>
				<br>
				<p>Ainda tenho alguns links interessantes que sairam de mim para curtir. Acesse:</p>
				<br>
				<div class="profile-m-enclave">
					<div class="profile-m-enclave-title">
						<h5>Enclave</h5>
						<div class="profile-m-icon-container">
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
				<p
					id="music-read-more"
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

<style lang="scss">
	.profile-m-music {
		background-image: url("./../../../assets/skills-imgs/dream/music.jpg");
	}
	
	.profile-m-enclave-title {
		display: flex;
		flex-direction: row;

		h5 {
			margin-right: 5px;
			font-size: 1.4em;
			font-family: "Bebas Neue", sans-serif;
			letter-spacing: 1px;
		}

		.profile-m-icon-container {
			font-size: 0.8em;
		}
	}
</style>
