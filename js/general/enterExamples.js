function enterExamples() {

  const data = [200, 100, 50, 25],
    w = 800,
    h = 600;

  const canvas = d3.select(".graphContainer")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  const box = canvas.append("rect")
    .attr("width", 300)
    .attr("height", 300)
    .attr("fill", "darkseagreen");

  const boxes = canvas.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", function (d) { return d; })
    .attr("height", function (d) { return d; })
    .attr("fill", "darkslateblue")
    .attr("stroke", "darksalmon");
}
