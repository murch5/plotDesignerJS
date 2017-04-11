
colorList = ["#9DC6D8","#00B3CA","#7DD0B6","#1D4E89","#D2B29B","#E38690","#F69256","#EAD98B","#965251","#C6CCCC"]


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

    return colorList[d]
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

    return colorList[d]
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

    return colorList[d]
  })


  gridArray.on("mouseover",function(d,i,j){

  })


  gridArray.on("click",function(d,i,j){

    grid[j][i] = $("#plotSlider").slider("option", "value");

    gridTemp = grid

    updateGrid(gridTemp,svgTarget)

  })
  gridArray.on("mouseout",function(d,i,j){

  })

}
function initializeGrid(grid, svgTarget)
{

  var currRow = 0

  return createGrid(grid,svgTarget)


}

function initializeGridSpecSelection()
{

    x = $("#X").val()
    y = $("#Y").val()
    plots = $("#numPlots").val()

    grid = makeGrid(x,y)
    test = initializeGrid(grid,d3.select("#gridSVG"))

    $("#plotSlider").slider("option", "min", 1)
    $("#plotSlider").slider("option", "max", plots)


}


function makeLayoutInput(targetDIV)
{
  var gridSizeX = $("<label>",{id:"gridXlbl",for:"#X", class:"fieldLbl"}).text("Grid X:").appendTo(targetDIV)
  var gridSizeXinput = $("<input>",{id:"X",name:"X",size:3}).appendTo(targetDIV)
  var gridSizeY = $("<label>",{id:"gridXlbl",for:"#X", class:"fieldLbl"}).text("Grid Y:").appendTo(targetDIV)
  var gridSizeYinput = $("<input>",{id:"Y",name:"Y",size:3}).appendTo(targetDIV)
  var numPlots = $("<label>",{id:"numPlotsLbl",for:"#numPlots", class:"fieldLbl"}).text("Number of Plots:").appendTo(targetDIV)
  var numPlotsinput = $("<input>",{id:"numPlots",name:"numPlots",size:3}).appendTo(targetDIV)
  var createLattice = $("<button>",{id:"CreateLattice",class:"ui-button ui-widget ui-corner-all"}).text("Create Grid").appendTo(targetDIV)
  var ProcessGrid = $("<button>",{id:"ProcessGrid",class:"ui-button ui-widget ui-corner-all"}).text("Process").appendTo(targetDIV)
}


function makeLayoutMenu(targetDIV)
{

  var  layoutDIV = $("<div>",{id:"layoutDIV"}).appendTo(targetDIV)
  $("#layoutDIV").append("<br>")
  var plotTitleLabel = $("<label>",{id:"plotTitleLbl",for:"#Title", class:"fieldLbl"}).text("Plot Title:").appendTo("#layoutDIV")
  var titleInput = $("<input>",{id:"Title",name:"Title",size:80}).appendTo("#layoutDIV")
  $("#layoutDIV").append("<br>")
  $("#layoutDIV").append("<br>")


  makeLayoutInput("#layoutDIV")

  $("#layoutDIV").append("<br>")
  $("#layoutDIV").append("<br>")

  var gridDIV = $("<div>",{id:"gridDIV"}).appendTo("#layoutDIV")



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

  $("#layoutDIV").append("<br>")
  var plotSlider = $("<div>",{id:"plotSlider"}).appendTo("#layoutDIV")
  var plotSliderHandle = $("<div>",{id:"plotSliderHandle",class:"ui-slider-handle"}).appendTo("#plotSlider")

}
