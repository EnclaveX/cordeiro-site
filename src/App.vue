<template>
  <HomePage/>
</template>

<script>
	import { useI18n } from "vue-i18n";
  import HomePage from './components/HomePage.vue'
	export default {
		name: "App",
		setup() {
			const { t, locale } = useI18n();

      return {t, locale}
		},
    components: {
      HomePage
    }
	};
</script>

<style>
  * {
    box-sizing: border-box
  }
</style>
