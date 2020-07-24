window.onload = function () {
	var pickRate = new CanvasJS.Chart("PickRate", {
		theme: "dark2", 
		animationEnabled:true, animationDuration: 2000,
		axisX:{ labelFontWeight: "bold" },
		axisY:{ labelFontWeight: "bold" },
		
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "이즈리얼",  y: 40.03  },
				{ label: "애쉬", y: 29.92  },
				{ label: "리신", y: 22.86  },
				{ label: "사일러스",  y: 20.17  },
				{ label: "카이사",  y: 19.63  }
			]
		}
		]
	});

	var banRate = new CanvasJS.Chart("BanRate", {
		theme: "dark2",
		animationEnabled:true, animationDuration: 2000,
		axisX:{ labelFontWeight: "bold" },
		axisY:{ labelFontWeight: "bold" },
        
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "다리우스",  y: 37.75  },
				{ label: "제드", y: 32.35  },
				{ label: "야스오", y: 29.13  },
				{ label: "블리츠크랭크",  y: 26.75  },
				{ label: "리신",  y: 19.98  }
			]
		}
		]
	});

	var winRate = new CanvasJS.Chart("WinRate", {
		theme: "dark2",
		animationEnabled:true, animationDuration: 2000,
		axisX:{ labelFontWeight: "bold" },
		axisY:{ labelFontWeight: "bold" },
        
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "쉬바나",  y: 52.83  },
				{ label: "클레드", y: 52.80  },
				{ label: "바드", y: 52.66  },
				{ label: "애쉬",  y: 52.59  },
				{ label: "바이",  y: 52.55  }
			]
		}
		]
	});

	pickRate.render();
	banRate.render();
	winRate.render();
}