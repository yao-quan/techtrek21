<!DOCTYPE html>
<meta charset="utf-8">

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>

<!-- Create a div where the graph will take place -->
<div id="body"></div>

// App Config
const app = express();
const port = process.env.PORT || 8001; // Using 8001 because rarely used

// Middleware
app.use(express.json());
app.use(Cors()); // Enables CORS

// DB Config
const connection_url =
  "mongodb+srv://techtrek21:techtrek21@techtrek-21.hjfbd.mongodb.net/dbs-techtrek-21?retryWrites=true&w=majority";
mongoose.connect(connection_url);

// API Listener
app.listen(port, () => {
  console.log("Listening on localhost:" + port);
});

// API Endpoint
app.get("/", (req, res) => {
  res.status(200).send("Endpoint connected");
});


// Set graph margins and dims
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 960 - margin.left - margin.right,
    height = 960 - margin.top - margin.bottom;

// Append with SVG
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")")

// Load Json
d3.json('./projects/project.json', function (d) {
	

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.name; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 100000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.Country); })
    .attr("y", function(d) { return y(d.Value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Value); })
    .attr("fill", "#69b3a2")

})
