<template>
	<router-view v-slot="{ Component }">
		<!-- <Menu></Menu> -->
		<div class="container">
			<transition name="fade" class="contain">
				<component :is="Component"/>
			</transition>
		</div>
	</router-view>
</template>

<script>
	import { useI18n } from "vue-i18n";
	import Menu from "./components/general/Menu";

	export default {
		components: {
			Menu
		},
		name: "App",
		setup() {
			const { t, locale } = useI18n();

			return { t, locale };
		},
		mounted() {
			this.$router.push({ path: `/HomePage` });
		}
	};
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		overflow-x: hidden;
	}

	.contain {
		position: absolute;
		top: 0px;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
