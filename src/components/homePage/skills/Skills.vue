<template>
	<div id="skills" class="skills">
		<PageTitle title="skills.mySkills" type="white"></PageTitle>
		<div ref="skillList" class="skills-list">
			<ColumnSkills :skills="hardSkills"></ColumnSkills>
			<ColumnSkills :skills="softSkills"></ColumnSkills>
		</div>
	</div>
</template>

<script>
	import { useI18n } from "vue-i18n";
	import PageTitle from "./../../general/PageTitle";
	import ColumnSkills from "./ColumnSkills";

	export default {
		components: {
			PageTitle,
			ColumnSkills
		},
		setup() {
			const { t, locale } = useI18n();

			return { t, locale };
		},
		mounted() {
			this.fullingProgressBarSkill();
		},
		methods: {
			fullingProgressBarSkill: () => {
				const bars = Array.from(document.querySelectorAll(".skill-bar"));

				bars.map(e => {
					e.style.width = `${e.dataset.percent}%`;
				});
			}
		},
		data: () => {
			return {
				hardSkills: [
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
					{ name: "MongoDB", id: "sk-mdb", percent: 65 }
				],
				softSkills: [
					{ name: "English", id: "sk-eng", percent: 60 },
					{ name: "Agile", id: "sk-ag", percent: 80 },
					{ name: "Problem-Solving", id: "sk-ps", percent: 90 },
					{ name: "Work-Ethic", id: "sk-we", percent: 100 },
					{ name: "Teamwork", id: "sk-tw", percent: 95 },
					{ name: "Communication", id: "sk-com", percent: 90 },
					{ name: "Creativity", id: "sk-crv", percent: 90 },
					{ name: "Adaptability", id: "sk-ada", percent: 100 },
					{ name: "Leadership", id: "sk-lead", percent: 80 },
					{ name: "Empathy", id: "sk-epty", percent: 100 }
				]
			};
		}
	};
</script>

<style  lang="scss">
	.skills {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='937' preserveAspectRatio='none' viewBox='0 0 1920 937'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1795%26quot%3b)' fill='none'%3e%3crect width='1920' height='937' x='0' y='0' fill='url(%23SvgjsRadialGradient1796)'%3e%3c/rect%3e%3cpath d='M1175.22-158.6C978.94-20.06 1097.16 689.64 746.92 701.66 396.67 713.68 117.16 406.11-109.69 401.82' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1336.48-63.29C1171.92-33.2 1260.05 355.19 834.73 379.43 409.4 403.67 97.37 730.27-168.78 735.49' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M916.62-64.21C738.32-22.84 723.16 406.67 397.67 452.25 72.18 497.83 27.08 733.06-121.28 742.72' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M969.72-14.7C827.96 61.59 895.74 533.3 635.77 535.88 375.8 538.46 148.06 269.28-32.13 264.15' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1516.72-85.87C1207.97-10.32 1100.86 813.55 628.15 823.51 155.44 833.47-28.81 563.87-260.42 561.15' stroke='rgba(60%2c 59%2c 76%2c 0.8666666666666667)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1795'%3e%3crect width='1920' height='937' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='100%25' cy='50%25' r='1976.33' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient1796'%3e%3cstop stop-color='rgba(48%2c 46%2c 46%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(29%2c 29%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");
		flex-direction: column;
		z-index: 6;
	}

	@keyframes glass-shine {
		0% {
			background-position: 10% 0%;
		}
		100% {
			background-position: 91% 100%;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.skill-list-animation {
			animation: glass-shine 5s ease forwards;
		}
	}

	.skills-list {
		border-radius: 2px;
		height: 70vh;
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
		display: flex;
		justify-content: flex-start;
		margin: 0 4%;
	}

	@media (max-height: 600px) {
		.skills-list {
			ul {
				li {
					p {
						font-size: 0.5em;
					}
				}
			}
		}
	}
</style>
