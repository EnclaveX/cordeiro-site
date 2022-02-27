<template>
	<div class="lifeline" id="lifeline">
		<PageTitle title="lifeline.myLifeline" type="black"></PageTitle>
		<div class="lifeline-m-content">
			<LifelineBar :years="years"></LifelineBar>
			<LifelineScrollOverButton :btnType="'R'"></LifelineScrollOverButton>
			<LifelineScrollOverButton :btnType="'L'"></LifelineScrollOverButton>
			<LifelineDescription :yearId="yearId" :years="years"></LifelineDescription>
		</div>
	</div>
</template>

<script>
	import PageTitle from "./../../general/PageTitle";
	import lifelineYearsData from "./../../../data/lifelineYearsData.json";
	import LifelineBar from "./LifelineBar";
	import LifelineDescription from "./LifelineDescription";
	import LifelineScrollOverButton from "./LifelineScrollOverButton";

	export default {
		components: {
			PageTitle,
			LifelineBar,
			LifelineScrollOverButton,
			LifelineDescription
		},
		data: function() {
			return {
				scrollingYears: false,
				yearId: 0,
				years: []
			};
		},
		created() {
			this.years = lifelineYearsData.years;
		},
		methods: {
			selectYear(year) {
				this.yearId = year;
			}
		}
	};
</script>

<style lang="scss">
	@media (max-width: 400px) {
		.lifeline {
			position: relative;
			height: auto;
			padding-bottom: 5%;
			width: 100vw;
			display: flex;
			flex-direction: column;
			background-color: #e0e3f4;
		}

		.lifeline-m-content {
			position: relative;
			width: 95%;
			height: auto;
			margin-left: auto;
			margin-right: auto;
			margin-top: 30px;
			display: grid;
			grid-template-columns: 40px 1fr 40px;
			grid-template-rows: 40px 60px 30px 1fr;
			max-height: 90%;
			background-color: #ffffff55;
			padding: 10px 10px;
			border-radius: 2px;
			box-shadow: 10px 10px 40px -10px #00000055;
		}

		
	}
</style>
