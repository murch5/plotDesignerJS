


$('head').append('<link rel="stylesheet" type="text/css" href="plotSpyder.css">');

//Select body element and assign to var

var body = $("body").append("<div>")

var  plotSpyderMain = $("<div>",{id:"plotSpyderMain"}).appendTo("body")
var  headerDIV = $("<div>",{id:"headerDIV"}).appendTo("#plotSpyderMain")
var  menuDIV = $("<div>",{id:"menuDIV"}).appendTo("#plotSpyderMain")
var tabList = $("<ul>",{id:"tabList"}).appendTo("#menuDIV")
var tab1 = $("<li>",{id:"tab1"}).appendTo("#tabList")
var tab1entry = $("<a>",{id:"Layout",href:"#chartTypeDIV"}).appendTo("#tab1")
var tab2 = $("<li>",{id:"tab2"}).appendTo("#tabList")
var tab2entry = $("<a>",{id:"Data",href:"#dataDIV"}).appendTo("#tab2")

$("#Layout").text("Layout")
$("#Data").text("Data")


var  chartTypeDIV = $("<div>",{id:"chartTypeDIV"}).appendTo("#menuDIV")
var  dataDIV = $("<div>",{id:"dataDIV"}).appendTo("#menuDIV")

var plotTitleLabel = $("<label>",{id:"plotTitleLbl",for:"#Title", class:"fieldLbl"}).text("Plot Title:").appendTo("#chartTypeDIV")
var titleInput = $("<input>",{id:"Title",name:"Title",size:80}).appendTo("#chartTypeDIV")



$("<br>").appendTo("#chartTypeDIV")
$("<br>").appendTo("#chartTypeDIV")
$("<br>").appendTo("#chartTypeDIV")

var gridSizeX = $("<label>",{id:"gridXlbl",for:"#X", class:"fieldLbl"}).text("Grid X:").appendTo("#chartTypeDIV")
var gridSizeXinput = $("<input>",{id:"X",name:"X",size:3}).appendTo("#chartTypeDIV")
var gridSizeY = $("<label>",{id:"gridXlbl",for:"#X", class:"fieldLbl"}).text("Grid Y:").appendTo("#chartTypeDIV")
var gridSizeYinput = $("<input>",{id:"Y",name:"Y",size:3}).appendTo("#chartTypeDIV")
var numPlots = $("<label>",{id:"numPlotsLbl",for:"#numPlots", class:"fieldLbl"}).text("Number of Plots:").appendTo("#chartTypeDIV")
var numPlotsinput = $("<input>",{id:"numPlots",name:"numPlots",size:3}).appendTo("#chartTypeDIV")
var createLattice = $("<button>",{id:"CreateLattice",class:"ui-button ui-widget ui-corner-all"}).text("Create Grid").appendTo("#chartTypeDIV")

$("<br>").appendTo("#chartTypeDIV")
$("<br>").appendTo("#chartTypeDIV")

var gridDIV = $("<div>",{id:"gridDIV"}).appendTo("#chartTypeDIV")

//
//
$(document).ready(function() {

  $( function() {
    var handle = $( "#plotSliderHandle" );
      $( "#plotSlider" ).slider({
        create: function() {
          handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
           handle.text( ui.value );
        }

      });
    //  $( "#amount" ).val( $( "#plotSlider" ).slider( "value" ) );
    } );

    $( function() {
      $( "#menuDIV" ).tabs();
    } );

});


$("<br>").appendTo("#chartTypeDIV")
$("<br>").appendTo("#chartTypeDIV")
var plotSlider = $("<div>",{id:"plotSlider"}).appendTo("#chartTypeDIV")
var plotSliderHandle = $("<div>",{id:"plotSliderHandle",class:"ui-slider-handle"}).appendTo("#plotSlider")

var gridSVG = d3.select("#gridDIV").append("svg")
.attr("id","gridSVG")
.attr("x",0)
.attr("y",0)
.attr("width",1000)
.attr("height",500)

//Use D3 to create SVG elements
grid = []

var rects = gridSVG.append("rect")
.attr("id","gridBkgrd")
.attr("x",0)
.attr("y",0)
.attr("width",500)
.attr("height",500)
.attr("fill","white")

function makeGrid(x,y)
{

  var arr = []

  for(q = 0;q<y;q++){

    var newarr = []

    for(r = 0;r<x;r++)
    {
      newarr.push(0)
    }
    arr.push(newarr)
  }
  return arr
}

function updateGrid(grid)
{
  console.log(grid)
  var gridSet = d3.select("#gridSVG").selectAll("g")
  .data(grid)
  .selectAll("rect")
  .data(function(d,i)
  {
    return d
  })
  .attr("fill", function(d,i,j)
  {

    if(d==0)
    {
      var col = "red"
    }
    if(d==1)
    {
      var col = "blue"
    }

    return col
  })

}
function createGrid(grid,svgTarget)
{

  var gridSet = svgTarget.selectAll("g")
  .data(grid)
  .attr("class","gridSet")
  .enter()
  .append("g")

  var gridArray = gridSet.selectAll("rect")
  .data(function(d){

    return d
  })
  .attr("class","rowSet")
  .attr("fill", function(d,i,j)
  {

    if(d==0)
    {
      var col = "red"
    }
    if(d==1)
    {
      var col = "blue"
    }

    return col
  })
  .enter()
  .append("rect")
  .attr("class","rowSet")
  .attr("x", function(d,i,j)
  {
    return i*65+50
  })
  .attr("y", function(d,i,j)
  {
    return j*65+50
  })
  .attr("width", function(d,i,j)
  {
    return 50
  })
  .attr("height", function(d,i,j)
  {
    return 50
  })
  .attr("fill", function(d,i,j)
  {

    if(d==0)
    {
      var col = "red"
    }
    if(d==1)
    {
      var col = "blue"
    }

    return col
  })


  gridArray.on("mouseover",function(d,i,j){

    //  d3.select(this).attr("fill","yellow")

  })

  gridArray.on("click",function(d,i,j){

    //  d3.select(this).attr("old-fill",function(d)
    //  {
    //  return
    //})
    //  d3.select(this).attr("fill","yellow")


    grid[j][i] = 1

    gridTemp = grid

    updateGrid(gridTemp,svgTarget)

  })

  gridArray.on("mouseout",function(d,i,j){

    //  d3.select(this).attr("fill","red")

  })

}
function initializeGrid(grid, svgTarget)
{

  var currRow = 0

  return createGrid(grid,svgTarget)


}

$(".fieldLbl").css("padding-right","10px")
$(".fieldLbl").css("padding-left","10px")
$("#CreateLattice").css("marginLeft","40px")

var testText = $("#dataDIV").append("<p>").text("test2")

$("#chartTypeDIV").append("<br>")




var t = makeGrid(3,2)
grid = t
console.log(t)
var test = initializeGrid(t,d3.select("#gridSVG"))
console.log(test)
