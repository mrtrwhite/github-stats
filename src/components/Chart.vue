<template>
	<div class="canvas-wrapper">
        <canvas ref="chartWrapper"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    data () {
        return {
            chart: {}
        }
    },
    props: ['items'],
    mounted () {
        this.chart = new Chart(this.$refs.chartWrapper, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Latest Commits',
                        data: this.commits
                    },
                    {
                        label: 'Latest Releases',
                        data: this.releases,
                        hidden: true
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: 'Stars'
                            }
                        }
                    ],
                    xAxes: [
                        {
                            type: 'time',
                            scaleLabel: {
                                display: true,
                                labelString: 'Time'
                            },
                            time: {
                                tooltipFormat: 'Do MMMM YYYY',
                                unit: 'month'
                            }
                        }
                    ]
                },
                tooltips: {
                    callbacks: {
                        label: (tooltipItem, data) => {
                            return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem.index].label;
                        }
                    }
                },
                // plugins: {
                //     zoom: {
                //         pan: {
                //             enabled: true,
                //             mode: 'y'
                //         },
                //         zoom: {
                //             enabled: true,
                //             mode: 'y'
                //         }
                //     }
                // }
            },
        });
    },
    computed: {
        commits () {
            return this.items.map((item) => {
                return {
                    label: item.name,
                    x: item.lastCommitDate,
                    y: item.stars
                }
            });
        },
        releases () {
            return this.items.filter((item) => {
                return item.lastRelease;
            })
            .map((item) => {
                return {
                    label: item.name,
                    x: item.lastCommitDate,
                    y: item.stars
                }
            });
        },
    }
}
</script>

<style lang="scss">
    // .canvas-wrapper {}
</style>