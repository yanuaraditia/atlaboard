var ctx = document.getElementById('myChart').getContext('2d');
var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "rgb(54, 179, 126)");
gradientStroke.addColorStop(1, "rgb(0, 82, 204)");
var backFill = ctx.createLinearGradient(500,0,100,0);
backFill.addColorStop(0, "rgb(222, 53, 11)");
backFill.addColorStop(1, "rgb(255, 139, 0)");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Data A",
            borderColor:               gradientStroke,
            pointBorderColor:          gradientStroke,
            pointBackgroundColor:      gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor:     gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [70, 80, 100, 170, 50, 20, 80]
        },
        {
            label: "Data B",
            borderColor:               backFill,
            pointBorderColor:          backFill,
            pointBackgroundColor:      backFill,
            pointHoverBackgroundColor: backFill,
            pointHoverBorderColor:     backFill,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [90, 80, 60, 177, 55, 21, 79]
        }
        ]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
}],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
},
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

var ctx = document.getElementById('pieChart').getContext('2d');
var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "rgb(54, 179, 126)");
gradientStroke.addColorStop(1, "rgb(0, 82, 204)");
var backFill = ctx.createLinearGradient(500,0,100,0);
backFill.addColorStop(0, "rgb(222, 53, 11)");
backFill.addColorStop(1, "rgb(255, 139, 0)");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Data A",
            backgroundColor: [
                '#ffcc00',
                '#aacc00',
                '#ddaa00',
                '#cc00aa',
                '#aaaac0',
                '#c0c0c0',
                '#00aa0d'
            ],
            fill: false,
            data: [70, 80, 100, 170, 50, 20, 80]
        }]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
}],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
},
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});