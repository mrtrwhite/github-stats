<template>
	<div id="app">
		<div v-if="!isLoading" class="container">
			<div class="intro">
				<h1 class="title">Github Stats</h1>
				<p class="text">
					This page lists the top 1000 most-starred Github repos alongside the date on which they were last committed to and released.
					Its purpose is to help developers decide which open source tools to use in their own projects.
				</p>
				<p>Last updated: {{ lastUpdated }}</p>
			</div>
			<Chart :items="items" />
			<Table :items="items" />
		</div>
	</div>
</template>

<script>
import axios from 'axios';

import Table from './components/Table';
import Chart from './components/Chart';

export default {
	name: 'App',
	data () {
		return {
			lastUpdated: '',
			items: [],
			isLoading: false
		}
	},
	components: {
		Table,
		Chart
	},
	methods: {
		getData () {
			this.isLoading = true;

			axios.get('http://github-stats-api.test')
				.then((response) => {
					if(!response.data) {
						return;
					}

					this.items = response.data.data;
					this.lastUpdated = response.data.last_updated;
					this.isLoading = false;
				})
				.catch((error) => {
					console.log(error);
					this.isLoading = false;
				});
		},
	},
	created () {
		this.getData();
	}
}
</script>

<style lang="scss">
	@import url('./assets/scss/normalize.scss');

	html,
	body {
		font-family: "Open Sans", sans-serif;
		font-size: 16px;
		line-height: 1.5rem;
	}

	body * {
		box-sizing: border-box;
	}

	.container {
		width: 100%;
		padding: 0 20px;
		max-width: 1280px;
		margin: 0 auto;
	}

	.title {
		font-family: "Miriam Libre", sans-serif;
		font-weight: 100;
		font-size: 2.5rem;
		line-height: 3rem;
		text-align: center;
	}

	.subtitle {
		font-family: "Miriam Libre", sans-serif;
		font-weight: 100;
		font-size: 1.8rem;
	}

	.intro {
		max-width: 800px;
		margin: 40px auto 60px auto;
		text-align: center;
	}
</style>