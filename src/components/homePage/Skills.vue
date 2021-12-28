<template>
	<div class="skills">
		<div class="my-skills">
			<h2>{{$t('mySkills')}}</h2>
			<div class="under-my-skills"></div>
			<div ref="skillList" class="skills-list">
				<ul class="hard-skills">
					<li>
						<p>English</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">70%</div>
						</div>
					</li>
					<li>
						<p>CSS</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">80%</div>
						</div>
					</li>
					<li>
						<p>HTML</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">80%</div>
						</div>
					</li>
					<li>
						<p>JavaScript</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">65%</div>
						</div>
					</li>
					<li>
						<p>VueJs</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">65%</div>
						</div>
					</li>
					<li>
						<p>NodeJS</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">65%</div>
						</div>
					</li>
					<li>
						<p>PowerBuilder</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">95%</div>
						</div>
					</li>
					<li>
						<p>PostgreSQL</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">80%</div>
						</div>
					</li>
				</ul>
				<ul class="soft-skills">
					<li>
						<p>Problem-Solving</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">90%</div>
						</div>
					</li>
					<li>
						<p>Work Ethic</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">100%</div>
						</div>
					</li>
					<li>
						<p>Teamwork</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">90%</div>
						</div>
					</li>
					<li>
						<p>Communication</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">90%</div>
						</div>
					</li>
					<li>
						<p>Creativity</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">90%</div>
						</div>
					</li>
					<li>
						<p>Adaptability</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">100%</div>
						</div>
					</li>
					<li>
						<p>Leadership</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">80%</div>
						</div>
					</li>
					<li>
						<p>Empathy</p>
						<div class="skill-content">
							<div class="skill-empty">
								<div class="skill-bar"></div>
							</div>
							<div class="skill-percent">100%</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { useI18n } from "vue-i18n";
	export default {
		setup() {
			const { t, locale } = useI18n();

			return { t, locale };
		},
		created() {
			window.addEventListener("scroll", this.handleScroll);
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
					skillList.classList.add("skill-list-animation");
				}
			}
		}
	};
</script>

<style  lang="scss">
	.skills {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		background-color: #1d1d1d;
		flex-direction: column;
		z-index: 6;
	}

	.my-skills {
		top: 60px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0px;
		height: 100px;
		width: 90%;
		position: relative;
		color: #e0e3f4;
		margin-bottom: 20px;

		.under-my-skills {
			height: 2px;
			background-color: #00e8fc;
			width: 30%;
			margin-top: 0px;
			margin-left: auto;
			margin-right: auto;
			box-shadow: 0px 0px 10px 5px rgba(0, 232, 252, 0.56);
		}

		h2 {
			height: 90px;
			top: 2px;
			background-color: transparent;
			font-size: 5em;
			font-family: "Bebas Neue", sans-serif;
			width: 40%;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
			letter-spacing: 0.02em;
		}
	}

	@keyframes Animation {
		0% {
			background-position: 10% 0%;
		}
		100% {
			background-position: 91% 100%;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.skill-list-animation {
			animation: Animation 5s ease forwards;
		}
	}

	.skills-list {
		border-radius: 5px;
		height: 70vh;
		background: rgb(31, 236, 255);
		background: linear-gradient(
			121deg,
			rgba(31, 236, 255, 0.2920518549216562) 12%,
			rgba(252, 252, 252, 0.16880255520176823) 27%,
			rgba(81, 240, 255, 0.49933476808692223) 44%,
			rgba(255, 255, 255, 0.10997902579000352) 60%,
			rgba(116, 243, 255, 0.5301470930168943) 71%,
			rgba(255, 255, 255, 0.10997902579000352) 89%
		);
		background-size: 600% 600%;
		margin-top: 20px;
		display: flex;
		justify-content: flex-start;

		ul {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			width: 50%;

			li {
				font-family: "Bebas Neue", sans-serif;
				margin-left: 40px;
				font-size: 2.2em;
				list-style: none;
				display: flex;

				p {
					width: 36%;
					font-size: 0.8em;
				}

				.skill-content {
					width: 60%;
					height: 100%;
					margin-top: auto;
					margin-bottom: auto;
					display: flex;
					flex-direction: column;

					.skill-empty {
						width: 100%;
						height: 4px;
						background-color: #1d1d1d44;
						border-radius: 2px;
						margin-top: auto;

						.skill-bar {
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
					.skill-percent {
						align-self: flex-end;
						font-size: 0.5em;
					}
				}
			}
		}

		.hard-skills {
			li:nth-child(1) .skill-bar {
				width: 70%;
			}
			li:nth-child(2) .skill-bar {
				width: 80%;
			}
			li:nth-child(3) .skill-bar {
				width: 80%;
			}
			li:nth-child(4) .skill-bar {
				width: 65%;
			}
			li:nth-child(5) .skill-bar {
				width: 65%;
			}
			li:nth-child(6) .skill-bar {
				width: 65%;
			}
			li:nth-child(7) .skill-bar {
				width: 95%;
			}
			li:nth-child(8) .skill-bar {
				width: 80%;
			}
		}

		.soft-skills {
			li:nth-child(1) .skill-bar {
				width: 90%;
			}
			li:nth-child(2) .skill-bar {
				width: 100%;
			}
			li:nth-child(3) .skill-bar {
				width: 90%;
			}
			li:nth-child(4) .skill-bar {
				width: 90%;
			}
			li:nth-child(5) .skill-bar {
				width: 90%;
			}
			li:nth-child(6) .skill-bar {
				width: 100%;
			}
			li:nth-child(7) .skill-bar {
				width: 80%;
			}
			li:nth-child(8) .skill-bar {
				width: 100%;
			}
		}
	}
</style>
