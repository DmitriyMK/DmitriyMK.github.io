$(window).load(function(){$("#preloader").find("i").fadeOut().end().delay(400).fadeOut("slow")}),$(document).ready(function(){$("#nav").burgerMenu({buttonBg:"none",lineColor:"green",menuBackground:"transparent",linkBackground:"black",linkColor:"white",linkBorderBottom:"none"})});var chart=new Chartist.Line(".ct-chart1",{labels:["Создание ОСББ. Установка приборов учета","Энергоаудит. Разработка технико-экономического обоснования","Определение источников финансирования. Получение согласия жильцов на реализацию проекта","Реализация проекта. Контроль качества"],series:[[3,5,7,9,11]]});chart.on("draw",function(n){if("point"===n.type){var e=new Chartist.Svg("path",{d:["M",n.x,n.y+15,"L",n.x+15,n.y-8,"L",n.x-15,n.y-8,"z"].join(" "),style:"fill-opacity: 1"},"ct-area");n.element.replace(e)}});var data={labels:["Затраты на отопление","Уменьшение теплопотерь через стены","Уменьшение теплопотерь через перекрытия","Уменьшение теплопотерь через окна"],series:[40,30,30]},options={labelInterpolationFnc:function(n){return n[0]}},responsiveOptions=[["screen and (min-width: 640px)",{chartPadding:30,labelOffset:100,labelDirection:"explode",labelInterpolationFnc:function(n){return n}}],["screen and (min-width: 1024px)",{labelOffset:80,chartPadding:20}]];new Chartist.Pie(".ct-chart2",data,options,responsiveOptions);
//# sourceMappingURL=script-dist.js.map