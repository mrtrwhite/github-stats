var commits = window.apiData.map((item) => {
    return {
        label: item.name,
        x: item.lastCommitDate,
        y: item.stars
    }
});

var releases = window.apiData.filter((item) => {
        return item.lastRelease;
    })
    .map((item) => {
        return {
            label: item.name,
            x: item.lastCommitDate,
            y: item.stars
        }
    });

var chart = new Chart(document.getElementById('chart'), {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Latest Commits',
                data: commits
            },
            {
                label: 'Latest Releases',
                data: releases,
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