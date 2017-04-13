var margin = {top: 20, right: 20, bottom: 20, left: 20};


var width = window.outerWidth*0.9 - margin.left - margin.right,
    height = 40

//Parses date for correct time format
var parseDate = d3.time.format("%Y-%m").parse;

//Divides date for tooltip placement
var bisectDate = d3.bisector(function(d) { return d.date; }).left;

//Appends the svg to the chart-container div
var svg = d3.select(".g-chart").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Creates the xScale
var xScale = d3.time.scale()
  .range([0, width]);

//Creates the yScale
var yScale = d3.scale.linear()
  .range([height, 0]);

//line function convention (feeds an array)
var line = d3.svg.line()
  .x(function(d) { return xScale(d.date); })
  .y(function(d) { return yScale(d.num); });

//Loads the data
d3.csv("data.csv", ready);

function ready(err, data) {

	if (err) throw "error loading data";

	//FORMAT data
	data.forEach(function(d) {
		d.num = +Math.floor(Math.random()*100);
    d.date = parseDate(d.date);
	});


  data.sort(function(a,b) { return a.date - b.date; });

  //Defines the xScale max
  xScale.domain(d3.extent(data, function(d) { return d.date; }));

  //Defines the yScale max
  yScale.domain(d3.extent(data, function(d) { return d.num; }));

  //Binds the data to the line
  var drawline = svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

  //Tooltips
  var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  //Adds circle to focus point on line
  focus.append("circle")
      .attr("r", 4);

  //Adds text to focus point on line
  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  //Creates larger area for tooltip
  var overlay = svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  //Tooltip mouseovers
  function mousemove() {
    var x0 = xScale.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + xScale(d.date) + "," + yScale(d.num) + ")");
    focus.select("text").text(d.num);
  };

  //RESPONSIVENESS
  d3.select(window).on("resize", resized);

  function resized() {

    //new margin
    var newMargin = {top: 10, right: 80, bottom: 20, left: 50};

    //Get the width of the window
    var w = d3.select(".g-chart").node().clientWidth;
    console.log("resized", w);

    //Change the width of the svg
    d3.select("svg")
      .attr("width", w);

    //Change the xScale
    xScale
      .range([0, w - newMargin.right]);

    //Update the line
    line = d3.svg.line()
      .x(function(d) { return xScale(d.date); })
      .y(function(d) { return yScale(d.num); });

    d3.selectAll('.line')
      .attr("d", line);
  };

}

// initial scale
d3.select("svg").attr("width", d3.select(".g-chart").node().clientWidth);
