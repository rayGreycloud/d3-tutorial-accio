function svgExample() {
  var canvas = d3.select("body")
    .append("svg")
    .attr("width", 700)
    .attr("height", 700);

  var circle = canvas.append("circle")
    .attr("cx", 160)
    .attr("cy", 200)
    .attr("r", 50)
    .attr("fill", "blue");

  var rectangle1 = canvas.append("rect")
    .attr("x", 0)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "red");

  var rectangle2 = canvas.append("rect")
    .attr("x", 220)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "yellow");

  var line = canvas.append("line")
    .attr("x1", 0)
    .attr("x2", 320)
    .attr("y1", 150)
    .attr("y2", 150)
    .attr("stroke", "green")
    .attr("stroke-width", 3);
}
