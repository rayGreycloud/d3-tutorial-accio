function importData() {

  d3.json("data/myData.json", function (data) {

    const canvas = d3.select(".importDataContainer")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 700);

    canvas.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", function (d) {
        return d.rank * 10;
      })
      .attr("height", 50)
      .attr("y", function (d, i) {
        return i * 80
      })
      .attr("fill", "darkslateblue");

    canvas.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("fill", "#ffffff")
      .attr("y", function (d, i) {
        return i * 80 + 30;
      })
      .attr("x", 5)
      .text(function (d) {
        return `${d.name} rank: ${d.rank}`;
      })
  })

}
