function donutChart() {

  d3.json("data/myData.json", function (data) {
    // Donut chart radius
    const radius = 200;
    // Colors for slices
    const color = d3.scaleOrdinal()
      .range(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);
    // Create svg
    const canvas = d3.select(".donutContainer")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 1000);
    // Move everything for better viewing
    const group = canvas.append("g")
      .attr("transform", "translate(500,350)");
    // Define arc
    const arc = d3.arc()
      // Eliminate innerRadius for pie chart
      .innerRadius(300)
      .outerRadius(radius);
    // Push data into pie
    const pie = d3.pie()
      .value(function (d) {
        return d.rank;
      });
    // Create the Arc and attach arc class
    const theArc = group.selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");
    // Fill arcs with colors
    theArc.append("path")
      .attr("d", arc)
      .attr("fill", function (d) {
        return color(d.data.rank)
      });
    // Place text in middle of path
    theArc.append("text")
      .attr("transform", function (d) {
        return `translate(${arc.centroid(d)})`;
      })
      .attr("dy", "0.15em")
      .text(function (d) {
        return d.data.name;
      });
  });
}
