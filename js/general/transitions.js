function transitions() {

  const w = 800,
    h = 600;

  const canvas = d3.select(".transitionsContainer")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  const rect = canvas.append("rect")
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "darksalmon");

  const circle = canvas.append("circle")
    .attr("cx", 50)
    .attr("cy", 200)
    .attr("r", 50)
    .attr("fill", "darkslateblue");

  rect.transition()
    .duration(1000)
    // .delay(1000)
    .attr("width", 200)
    .attr("transform", "translate(200,0)")
    .transition()
    .attr("transform", "translate(200,200)")
    .on("start", function () {
      d3.select(this)
        .attr("fill", "darkkhaki")
    })

  circle.transition()
    .duration(2000)
    .delay(2000)
    .attr("cx", 200)
    .on("end", function () {
      d3.select(this)
        .attr("fill", "darkseagreen");
    });
}
