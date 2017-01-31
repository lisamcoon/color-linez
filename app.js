
//Width and height
var kCellCount = 9;
var kBallRadius = 35;
var kSpacing = kBallRadius/2;
var kCellSize = kBallRadius*1.3;
var kBoardSize = kCellSize * kCellCount * 1.4;
var kNewBallCount = 3;
var kMinMatchBallCount = 5;

var kMarginSize = 30;

var board = [];
for (var i=0;i<kCellCount;i++) {
    for (var j=0;j<kCellCount;j++) {
        board[j*kCellCount + i] = {
            cx : (i + 0.5) * kCellSize,
            cy : (j + 0.5) * kCellSize,
            x : i * kCellSize,
            y : j * kCellSize,
            color: "none",
        }
    }
}

//Create SVG element
var svg = d3.select("body")
            .append("svg")
                .attr("width", kBoardSize)
                .attr("height", kBoardSize)
            // .append("rect")
            // .attr("width", kBoardSize)
            // .attr("height", kBoardSize)
            // .attr("stroke", "grey")
            ;


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
var canvas = svg.append("g")
            .attr("transform", "translate(" + kMarginSize + ", " +  kMarginSize + ")")
            ;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
var chesses = canvas.selectAll("circle")
    .data(board)
    .enter()
    .append("circle")
        .attr("cx", function(d, i) { return d.cx; })
        .attr("cy", function(d, i) { return d.cy; })
        .attr("r", kBallRadius / 2)
        .attr("fill", function(d, i) { return d.color; })
        .attr("stroke", "none")
    ;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
var cells = canvas.selectAll("rect")
    .data(board)
    .enter()
    .append("rect")
        .attr("x", function(d, i) { return d.x; })
        .attr("y", function(d, i) { return d.y; })
        .attr("width", kCellSize)
        .attr("height", kCellSize)
        .attr("fill", "none")
        .attr("stroke", "grey")
    ;