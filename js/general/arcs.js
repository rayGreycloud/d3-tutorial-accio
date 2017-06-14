function arcs() {

  const canvas = d3.select(".arcsContainer")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  const lineData = [
    {x: 10, y: 20},
    {x: 100, y: 100},
    {x: 10, y: 200}
  ];

  const group = canvas.append("g")
    .attr("transform", "translate(100,100)");

  let line = d3.line()
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; });

  group.selectAll("path")
    .data([lineData])
    .enter()
    .append("path")
    .attr("d", line)
    .attr("fill", "cornsilk")
    .attr("stroke", "darkslateblue")
    .attr("stroke-width", 5);

  const radius = 50;
  const p = Math.PI * 2;

  const arc = d3.arc()
    .innerRadius(radius - 10)
    .outerRadius(radius)
    .startAngle(0)
    .endAngle(p);

  group.append("path")
    .attr("d", arc);

}
