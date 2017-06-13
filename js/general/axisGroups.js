function axisGroups() {

  const graphData = [10, 800, 100, 1200],
    w = 800,
    h = 800;

  let graphScaling = d3.scaleLinear()
    .domain([0,1200])
    .range([0,w]);

  let axis = d3.axisBottom()
    .ticks(5)
    .scale(graphScaling);

  const canvas = d3.select(".graphContainer")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(0,20)");

  let graphBars = canvas.selectAll("rect")
    .data(graphData)
    .enter()
    .append("rect")
    .attr("fill", "darksalmon")
    .attr("width", function (d) {
      return graphScaling(d);
    })
    .attr("height", 20)
    .attr("y", function (d,i) {
      return i * 50;
    });

  canvas.append("g")
    .attr("transform", "translate(0, 200)")
    .call(axis);

}
