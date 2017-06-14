function barGraph() {
  // set variables
  const margin = {top: 20, right: 20, bottom: 100, left: 60};
  const width = 800 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  let x = d3.scaleBand().rangeRound([0,width]).paddingInner(0.5);
  let y = d3.scaleLinear().range([height,0]);

  // draw axes
  let xAxis = d3.axisBottom()
    .scale(x)
    .ticks(6);

  let yAxis = d3.axisLeft()
    .scale(y)
    .ticks(5);

  // create svg element
  let svg = d3.select("#barGraph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // get data
  d3.json("data/myData.json", function (data) {
    x.domain(data.map(function (d) {
      return d.name;
    }));

    y.domain([0, d3.max(data, function (d) {
      return d.rank;
    })]);

    // labels
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.5em")
      .attr("dy", "-0.55em")
      .attr("y", 30)
      .attr("transform", "rotate(-45)");

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", "0.8em")
      .style("text-anchor", "end")
      .text("Member Rank");

    svg.selectAll("bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", "darksalmon")
      .attr("x", function (d) { return x(d.name); })
      .attr("width", x.bandwidth())
      .attr("y", function (d) { return y(d.rank); })
      .attr("height", function (d) {
        return height - y(d.rank);
      });
  })
}
