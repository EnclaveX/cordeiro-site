<template>
	<div class="profile-m-content">
		<div class="profile-m-picture-container">
			<div class="profile-m-picture profile-m-alien"></div>
		</div>
		<article class="profile-m-article">
			<h3>{{$t('profile.alien')}}</h3>
			<h4>{{$t('profile.alienTitle')}}</h4>
			<div id="alien-profile-article-text" class="profile-m-article-text">
				<p>De todos os meus estudos recentes, o que me fascina além do desenvolvimento, são os estudos de astronomia.</p>
				<p>Levo com outro hobby poder estudar e entender as coisas que acontecem ao nosso redor no universo.</p>
				<p>Documentário, atrás de documentário. Podcast atrás de podcast. São coisas que vão além da nossa compreensão, isso me deixa muito intrigado.</p>
				<p>Sempre soube que o que há dentro do nosso planeta é tão vasto quanto o que há la fora, mas as estrelas são tão fascinantes que se torna impossivel não admira-las e tentar entende-las.</p>
				<p>Usarei esse cantinho para poder citar alguns conteudos que eu encontrar de interessante a esse respeito.</p>
				<p>Vida longa e próspera.</p>
				<p
					id="alien-read-more"
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
	.profile-m-alien {
		background-image: url("./../../../assets/skills-imgs/dream/alien.jpg");
	}
</style>
