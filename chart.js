axios.get('/page-data/index/page-data.json')
    .then((response) => {
        if(typeof response.data.result.pageContext.data === undefined) {
            return;
        }

        var apiData = response.data.result.pageContext.data;

        var chart = new Chart(document.getElementById('chart'), {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Latest Commits',
                        data: apiData.map((item) => {
                            return {
                                label: item.name,
                                x: item.lastCommitDate,
                                y: item.stars
                            }
                        })
                    },
                    {
                        label: 'Latest Releases',
                        data: apiData.filter((item) => {
                            return item.lastRelease;
                        })
                        .map((item) => {
                            return {
                                label: item.name,
                                x: item.lastCommitDate,
                                y: item.stars
                            }
                        }),
                        hidden: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
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
        })
    })
    .catch((error) => {
        console.log(error);
    });