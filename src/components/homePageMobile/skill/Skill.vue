<template>
	<div id="skills" class="skills">
		<PageTitle title="skills.mySkills" type="white"></PageTitle>
		<div ref="skillList" class="skills-m-list">
			<ul class="hard-m-skills">
				<li v-for="item in skills" :key="item.id">
					<p>{{item.name}}</p>
					<div class="skill-m-content">
						<div class="skill-m-empty">
							<div :data-percent="item.percent" class="skill-m-bar"></div>
						</div>
					</div>
					<div class="skill-m-percent">{{`${item.percent}%`}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { useI18n } from "vue-i18n";
	import PageTitle from "./../../general/PageTitle";
	
	export default {
		components: {
			PageTitle
		},
		setup() {
			const { t, locale } = useI18n();

			return { t, locale };
		},
		created() {
			window.addEventListener("scroll", this.handleScroll);

			this.skills = [
				{ name: "CSS", id: "sk-css", percent: 80 },
				{ name: "HTML", id: "sk-html", percent: 80 },
				{ name: "JavaScript", id: "sk-js", percent: 75 },
				{ name: "TypeScript", id: "sk-ts", percent: 65 },
				{ name: "VueJS", id: "sk-vue", percent: 65 },
				{ name: "NodeJS", id: "sk-node", percent: 65 },
				{ name: "DDD", id: "sk-ddd", percent: 75 },
				{ name: "TDD", id: "sk-tdd", percent: 75 },
				{ name: "SOLID", id: "sk-sd", percent: 75 },
				{ name: "PowerBuilder", id: "sk-pb", percent: 95 },
				{ name: "PostgreSQL", id: "sk-pg", percent: 80 },
				{ name: "MongoDB", id: "sk-mdb", percent: 65 },
				{ name: this.$t("skills.english"), id: "sk-eng", percent: 60 },
				{ name: this.$t("skills.agile"), id: "sk-ag", percent: 80 },
				{ name: this.$t("skills.problemSolving"), id: "sk-ps", percent: 90 },
				{ name: this.$t("skills.workEthic"), id: "sk-we", percent: 100 },
				{ name: this.$t("skills.teamwork"), id: "sk-tw", percent: 95 },
				{ name: this.$t("skills.communication"), id: "sk-com", percent: 90 },
				{ name: this.$t("skills.creativity"), id: "sk-crv", percent: 90 },
				{ name: this.$t("skills.adaptability"), id: "sk-ada", percent: 100 },
				{ name: this.$t("skills.leadership"), id: "sk-lead", percent: 80 },
				{ name: this.$t("skills.empathy"), id: "sk-epty", percent: 100 }
			];
		},
		mounted() {
			this.fullingProgressBarSkill();
		},
		destroyed() {
			window.removeEventListener("scroll", this.handleScroll);
		},
		methods: {
			handleScroll(event) {
				const skillTopPosition =
					this.$refs.skillList && this.$refs.skillList.getBoundingClientRect().top
						? this.$refs.skillList.getBoundingClientRect().top
						: 0;

				const skillBottomPosition =
					this.$refs.skillList &&
					this.$refs.skillList.getBoundingClientRect().bottom
						? this.$refs.skillList.getBoundingClientRect().bottom
						: 0;

				let skillList = document.querySelector(".skills-list");

				if (skillTopPosition > 0 && skillBottomPosition > 0) {
					skillList.classList.add("skill-m-list-animation");
				}
			},
			fullingProgressBarSkill: () => {
				const bars = Array.from(document.querySelectorAll(".skill-bar"));

				bars.map(e => {
					e.style.width = `${e.dataset.percent}%`;
				});
			}
		},
		data: () => {
			return {
				skills: []
			};
		}
	};
</script>

<style  lang="scss">
	@media (max-width: 400px) {
		.skills {
			position: relative;
			width: 100vw;
			height: auto;
			display: flex;
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='937' preserveAspectRatio='none' viewBox='0 0 1920 937'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1795%26quot%3b)' fill='none'%3e%3crect width='1920' height='937' x='0' y='0' fill='url(%23SvgjsRadialGradient1796)'%3e%3c/rect%3e%3cpath d='M1175.22-158.6C978.94-20.06 1097.16 689.64 746.92 701.66 396.67 713.68 117.16 406.11-109.69 401.82' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1336.48-63.29C1171.92-33.2 1260.05 355.19 834.73 379.43 409.4 403.67 97.37 730.27-168.78 735.49' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M916.62-64.21C738.32-22.84 723.16 406.67 397.67 452.25 72.18 497.83 27.08 733.06-121.28 742.72' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M969.72-14.7C827.96 61.59 895.74 533.3 635.77 535.88 375.8 538.46 148.06 269.28-32.13 264.15' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1516.72-85.87C1207.97-10.32 1100.86 813.55 628.15 823.51 155.44 833.47-28.81 563.87-260.42 561.15' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1795'%3e%3crect width='1920' height='937' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='100%25' cy='50%25' r='1976.33' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient1796'%3e%3cstop stop-color='rgba(48%2c 46%2c 46%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(29%2c 29%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");
			flex-direction: column;
			z-index: 6;
		}

		@keyframes skill-m-glass-shine {
			0% {
				background-position: 10% 0%;
			}
			100% {
				background-position: 91% 100%;
			}
		}

		@media (prefers-reduced-motion: no-preference) {
			.skill-m-list-animation {
				animation: skill-m-glass-shine 5s ease forwards;
			}
		}

		.skills-m-list {
			width: 95%;
			margin: 0 auto;
			border-radius: 2px;
			height: auto;
			background: linear-gradient(
				121deg,
				rgba(50, 50, 50, 0.8920518549216562) 12%,
				rgba(50, 50, 50, 0.86880255520176823) 27%,
				rgba(50, 50, 50, 0.99933476808692223) 44%,
				rgba(50, 50, 50, 0.80997902579000352) 60%,
				rgba(50, 50, 50, 0.8301470930168943) 71%,
				rgba(50, 50, 50, 0.90997902579000352) 89%
			);
			background-size: 600% 600%;
			margin-top: 30px;
			margin-bottom: 30px;
			display: unset;
			justify-content: flex-start;

			ul {
				display: flex;
				flex-direction: column;
				justify-content: unset;
				height: auto;
				width: 100%;

				li {
					font-family: "Bebas Neue", sans-serif;
					margin-left: 10px;
					height: 10%;
					font-size: 1.6em;
					color: #e0e3f4;
					list-style: none;
					display: flex;

					p {
						width: 36%;
						font-size: 0.7em;
					}

					.skill-m-content {
						width: 50%;
						height: 100%;
						margin-top: auto;
						margin-bottom: auto;
						display: flex;
						flex-direction: column;

						.skill-m-empty {
							width: 100%;
							height: 4px;
							background-color: #1d1d1d44;
							border-radius: 2px;
							margin-top: auto;

							.skill-m-bar {
								height: 4px;
								border-radius: 2px;
								background-color: #e2284d;
								margin-top: auto;
								margin-bottom: auto;
								box-shadow: 0px 0px 10px 5px rgba(226, 40, 77, 0.56);
								-webkit-box-shadow: 0px 0px 10px 5px rgba(226, 40, 77, 0.56);
								-moz-box-shadow: 0px 0px 10px 5px rgba(226, 40, 77, 0.56);
							}
						}
					}
					.skill-m-percent {
						align-self: flex-end;
						font-size: 0.6em;
						margin-left: 15px;
					}
				}
			}
		}
	}
</style>
