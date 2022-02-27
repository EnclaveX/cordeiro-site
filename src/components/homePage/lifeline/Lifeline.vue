<template>
	<div class="lifeline" id="lifeline">
		<PageTitle title="lifeline.myLifeline" type="black"></PageTitle>
		<div class="lifeline-content">
			<LifelineBar :years="years"></LifelineBar>
			<LifelineScrollOverButton :btnType="'R'"></LifelineScrollOverButton>
			<LifelineScrollOverButton :btnType="'L'"></LifelineScrollOverButton>
			<LifelineDescription :yearId="yearId" :years="years" ></LifelineDescription>
		</div>
	</div>
</template>

<script>
	import PageTitle from "./../../general/PageTitle";
	import LifelineScrollOverButton from "./LifelineScrollOverButton";
	import LifelineBar from "./LifelineBar"
	import LifelineDescription from './LifelineDescription'
	import lifelineYearsData from './../../../data/lifelineYearsData.json'

	export default {
		components: {
			PageTitle,
			LifelineScrollOverButton,
			LifelineBar,
			LifelineDescription
		},
		methods: {
			selectYear(year) {
				this.yearId = year
			}
		},
		created() {
			this.years = lifelineYearsData.years
		},
		data: function() {
			return {
				yearId: 0,
				years: []
			};
		},
	};
</script>

<style lang="scss">
	.lifeline {
		position: relative;
		height: auto;
		width: 100vw;
		display: flex;
		flex-direction: column;
		background-color: #e0e3f4;
	}

	.lifeline-content {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1%;
		display: grid;
		grid-template-columns: 40px 1fr 40px;
		grid-template-rows: 40px 60px 30px 150px;
		background-color: #ffffff55;
		padding: 10px 10px;
		border-radius: 2px;
		box-shadow: 10px 10px 40px -10px #00000055;
	}
	
	@media (max-width: 600px) {
		.lifeline {
			height: 70vh;
		}
	}
</style>
