var vg_1 = "bubbleplot_total_energy.vg.json";
var vg_2 = 'map.vg.json'

vegaEmbed("#choropleth_map", vg_2).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#bubble_plot", vg_1).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);
