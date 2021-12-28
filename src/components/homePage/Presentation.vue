<template>
	<div class="titles">
		<div class="content">
			<transition name="fade">
				<div class="presentation">
					<div class="title">
						<p>{{$t('presentation-title')}}</p>
						<div class="under-presentation"></div>

						<p class="sub-title">software analyst | Fullstack Developer</p>
						<p
							class="description"
						>Technology is a passion of mine and everyday is a new opportunity to learn something new.</p>
					</div>
				</div>
			</transition>
		</div>
		<div class="picture-presentation"></div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.titles {
		height: 100vh;
		width: 100%;
		font-family: "Bebas Neue", sans-serif;
		z-index: 2;
		display: grid;
		grid-template-columns: 63% 37%;
		grid-template-rows: 100%;
		align-items: center;
		justify-content: center;
		background-color: #1d1d1d;
	}

	.content {
		grid-column-start: 1;
		padding-left: 20px;
		height: 100%;
	}

	.picture-presentation {
		height: 25vw;
		width: 25vw;
		background-color: #e0e3f4;
		grid-column-start: 2;
		border-radius: 50%;
		max-width: 800px;
		max-height: 800px;
		-webkit-box-shadow: 5px 5px 25px 16px #636363;
		box-shadow: 5px 5px 25px 16px #636363;
	}

	.presentation {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		z-index: 5;
		margin-left: 2%;
	}

	.under-presentation {
		position: relative;
		top: -20px;
		height: 2px;
		background-color: #00e8fc;
		width: 100%;
		margin-top: 0px;
		margin-right: auto;
		box-shadow: 0px 0px 10px 5px rgba(0, 232, 252, 0.56);
	}

	.title {
		width: auto;
		font-size: 100px;
		color: #e0e3f4;
		.sub-title {
			font-size: 0.2em;
			color: #e0e3f4;
			letter-spacing: 0.9px;
		}
	}

	.description {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
			Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-size: 18px;
		line-height: 174%;
		letter-spacing: 0.02em;
		color: rgb(119, 119, 119);
		margin-top: 20px;
		text-align: left;
	}
</style>
