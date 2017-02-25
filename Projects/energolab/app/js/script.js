	/*LOADER*/
	$(window).load(function() {
		$('#preloader').find('i').fadeOut().end().delay(400).fadeOut('slow');
	});


	$(document).ready(function() {

		/*burger menu*/
		$('#nav').burgerMenu({
			buttonBg: 'none',
			lineColor: 'green',
			menuBackground: 'transparent',
			linkBackground: 'black',
			linkColor: 'white',
			linkBorderBottom: 'none'
		});

	}); /*ready(function()*/


/*GRAPH*/


var chart = new Chartist.Line('.ct-chart1', {
  labels: ["Создание ОСББ. Установка приборов учета", "Энергоаудит. Разработка технико-экономического обоснования", "Определение источников финансирования. Получение согласия жильцов на реализацию проекта", "Реализация проекта. Контроль качества"],
  series: [
    [3, 5, 7, 9, 11]
  ]
});

// Listening for draw events that get emitted by the Chartist chart
chart.on('draw', function(data) {
  // If the draw event was triggered from drawing a point on the line chart
  if(data.type === 'point') {
    // We are creating a new path SVG element that draws a triangle around the point coordinates
    var triangle = new Chartist.Svg('path', {
      d: ['M',
        data.x,
        data.y + 15,
        'L',
        data.x + 15,
        data.y - 8,
        'L',
        data.x - 15,
        data.y - 8,
        'z'].join(' '),
      style: 'fill-opacity: 1'
    }, 'ct-area');

    // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
    data.element.replace(triangle);
  }
});


  // Initialize a Line chart in the container with the ID chart1
/*  new Chartist.Line('#chart1', {
    labels: [1, 2, 3, 4],
    series: [[100, 120, 180, 200]]
  });*/



  // Initialize a Line chart in the container with the ID chart2
/*  new Chartist.Bar('#chart2', {
    labels: [1, 2, 3, 4],
    series: [[5, 2, 8, 3]]
  });*/

  var data = {
  labels: ['Затраты на отопление', 'Уменьшение теплопотерь через стены', 'Уменьшение теплопотерь через перекрытия', 'Уменьшение теплопотерь через окна'],
  series: [40, 30, 30]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('.ct-chart2', data, options, responsiveOptions);







/*
  new Chartist.Line('#chart2', {
    labels: ['Затраты на отопление', 'Уменьшение теплопотерь через стены', 'Уменьшение теплопотерь через перекрытия', 'Уменьшение теплопотерь через окна'],
    series: [[100, 80, 60, 50]]
  });*/




