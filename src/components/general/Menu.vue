<template>
	<div>
		<nav ref="menu" :class="{ 'menu': true, 'menu-fixed': menuFixed }">
			<ul>
				<li>
					<a href="/homePage">{{$t('home')}}</a>
				</li>
				<li>
					<a href="/portfolio">{{$t('portifolio')}}</a>
				</li>
				<li>
					<a href="/blog">{{$t('blog')}}</a>
				</li>
				<li>
					<a href="/contact">{{$t('contact')}}</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	import { useI18n } from "vue-i18n";

	export default {
		data() {
			return {
				menuFixed: false,
				menuInitialTopPosition: 0
			};
		},
		setup() {
			const { t, locale } = useI18n();

			return { t, locale };
		},
		created() {
			window.addEventListener("scroll", this.handleScroll);
		},
		mounted() {
			this.menuInitialTopPosition =
				this.$refs.menu && this.$refs.menu.getBoundingClientRect().top
					? this.$refs.menu.getBoundingClientRect().top
					: 0;
		},
		destroyed() {
			window.removeEventListener("scroll", this.handleScroll);
		},
		methods: {
			handleScroll(event) {
				const menuActualTopPosition =
					this.$refs.menu && this.$refs.menu.getBoundingClientRect().top
						? this.$refs.menu.getBoundingClientRect().top
						: 0;

				if (window.scrollY >= this.menuInitialTopPosition) {
					this.menuFixed = true;
				} else {
					this.menuFixed = false;
				}
			}
		}
	};
</script>

<style lang="scss">
	.menu {
		position: absolute;
		top: 40px;
		width: 90%;
		height: 50px;
		right: 0px;
		left: 0px;
		margin-left: auto;
		background-color: #3d3d3d;
		border-radius: 5px;
		z-index: 5;
	}

	.menu-fixed {
		position: fixed;
		top: 0px;
	}

	nav.menu > ul {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		height: 100%;

		li {
			list-style: none;
			width: 100%;
			transition: background-color 0.3s ease;
		}

		li:hover {
			background-color: #26272c;
			list-style: none;
		}
	}

	li > a {
		text-decoration: none;
		color: #e0e3f4;
		font-family: "Bebas Neue", sans-serif;
		font-size: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		transition: font-size 0.3s ease;
	}

	li > a:hover {
		font-size: 34px;
	}
</style>
