

var Plotly = require('plotly.js/lib/core');
Plotly.register([    
    require('plotly.js/lib/bar'),
    require('plotly.js/lib/pie'),
    require('plotly.js/lib/scatter')       
]);

module.exports = Plotly;