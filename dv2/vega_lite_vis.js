var vg_1 = "line_2010-2019.vg.json";
var vg_2 = 'map.vg.json'
var vg_3 = 'pie.vg.json'
var vg_4 = 'bubbleplot_2010-2019.vg.json'
var vg_5 = 'bar.vg.json'

vegaEmbed("#choropleth_map", vg_2).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#line_chart", vg_1).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#pie_chart", vg_3).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#bubble_plot", vg_4).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#bar_chart", vg_5).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);