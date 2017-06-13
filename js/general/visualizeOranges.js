function visualizeOranges() {
  const orangeData = [10, 30, 50, 100];

  let canvas = d3.select(".orangeContainer")
    .append("svg")
    .attr("width", 768)
    .attr("height", 1024);

  let oranges = canvas.selectAll("circle")
    .data(orangeData)
    .enter()
    .append("circle")
    .attr("fill", "orange")
    .attr("cx", function (d,i) {
      return d + (i * 100);
    })
    .attr("cy", function (d) {
      return d;
    })
    .attr("r", function (d) {
      return d;
    });
}
