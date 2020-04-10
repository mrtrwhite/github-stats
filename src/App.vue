<template>
	<div id="app">
		<div v-if="!isLoading">
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

					this.items = response.data;
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