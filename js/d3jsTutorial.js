/** this is how we start d3js with javascript **/
function start ()
{
    d3.select("body")
        .append("p")
        .text("Load text with d3.js! today");

    console.log(d3);
}
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

function scaling() {
  const graphData = [10, 800, 100, 1200],
    w = 800,
    h = 800;

  let graphScaling = d3.scaleLinear()
    .domain([0,1200])
    .range([0,w]);

  const canvas = d3.select(".graphContainer")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

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

}

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
