
    var chart = new CanvasJS.Chart("PickRate", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "GDP per Capita - 2016"
        },
        subtitles: [{
            text: "In USD",
            fontSize: 16
        }],
        axisY: {
            prefix: "$",
            scaleBreaks: {
                customBreaks: [{
                    startValue: 10000,
                    endValue: 35000
                }]
            }
        },
        data: [{
            type: "column",
            yValueFormatString: "$#,##0.00",
            dataPoints: [
                { label: "USA", y: 57466.787 },
                { label: "Austraila", y: 49927.82 },
                { label: "UK", y: 39899.388 },
                { label: "UAE", y: 37622.207 },
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("BanRate", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "GDP per Capita - 2016"
        },
        subtitles: [{
            text: "In USD",
            fontSize: 16
        }],
        axisY: {
            prefix: "$",
            scaleBreaks: {
                customBreaks: [{
                    startValue: 10000,
                    endValue: 35000
                }]
            }
        },
        data: [{
            type: "column",
            yValueFormatString: "$#,##0.00",
            dataPoints: [
                { label: "USA", y: 57466.787 },
                { label: "Austraila", y: 49927.82 },
                { label: "UK", y: 39899.388 },
                { label: "UAE", y: 37622.207 },
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("WinRate", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "GDP per Capita - 2016"
        },
        subtitles: [{
            text: "In USD",
            fontSize: 16
        }],
        axisY: {
            prefix: "$",
            scaleBreaks: {
                customBreaks: [{
                    startValue: 10000,
                    endValue: 35000
                }]
            }
        },
        data: [{
            type: "column",
            yValueFormatString: "$#,##0.00",
            dataPoints: [
                { label: "USA", y: 57466.787 },
                { label: "Austraila", y: 49927.82 },
                { label: "UK", y: 39899.388 },
                { label: "UAE", y: 37622.207 },
            ]
        }]
    });
    chart.render();
