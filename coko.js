// Fiktivní data ve formátu JSON
var data = [
    { "year": 1970, "price": 1.2 },
    { "year": 1971, "price": 1.3 },
    { "year": 1972, "price": 1.4 },
    // ...
    { "year": 2020, "price": 2.0 }
];

var svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 300);

var x = d3.scaleLinear()
    .domain([1970, 2020])
    .range([0, 500]);

var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.price; })])
    .range([300, 0]);

var line = d3.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.price); });

svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line);
