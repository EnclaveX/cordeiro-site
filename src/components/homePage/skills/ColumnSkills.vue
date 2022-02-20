<template>
	<ul class="column-skills">
		<li v-for="item in skills" :key="item.id">
			<p class="skill-name">{{item.name}}</p>
			<div class="skill-content">
				<div class="skill-empty">
					<div :data-percent="item.percent" class="skill-bar"></div>
				</div>
				<div class="skill-percent">{{`${item.percent}%`}}</div>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			skills: String
		}
	};
</script>

<style lang="scss">
	.skill-name {
		color: #e0e3f4;
	}

	.skill-percent {
		color: #e0e3f4;
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

	.skills-list {
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
			}
		}
	}
</style>
