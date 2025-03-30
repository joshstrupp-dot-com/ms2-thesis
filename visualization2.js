// Create the second SVG canvas
function createVisualization2() {
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  const svg2 = d3
    .select("#visualization2")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Add visualization code for the second SVG
  // This is just a placeholder for now
  svg2
    .append("text")
    .attr("x", 50)
    .attr("y", 50)
    .text("Visualization 2 - Add your code here");
}
