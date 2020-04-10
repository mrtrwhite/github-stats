<template>
	<div>
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
                        label: false,
                        data: this.dataPoints
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
                }
            }  
        });
    },
    computed: {
        dataPoints () {
            return this.items.map((item) => {
                return {
                    label: item.name,
                    x: item.lastCommitDate,
                    y: item.stars
                }
            });
        }
    }
}
</script>