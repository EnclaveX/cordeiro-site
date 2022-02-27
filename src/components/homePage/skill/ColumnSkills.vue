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
			skills: Array
		}
	};
</script>

<style lang="scss">
	.skill-name {
		color: #e0e3f4;
		width: 50%;
	}

	.skill-percent {
		color: #e0e3f4;
	}

	.skill-content {
		width: 55%;
		height: 100%;
		margin-top: auto;
		margin-bottom: auto;
		margin-right: 10px;
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
</style>
