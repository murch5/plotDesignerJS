

function createTabbedMenu(targetDIV)
{

  var menuDIV = $("<div>",{id:"menuDIV"}).appendTo(targetDIV)
  var tabList = $("<ul>",{id:"tabList"}).appendTo("#menuDIV")
  var tab1 = $("<li>",{id:"tab1"}).appendTo("#tabList")
  var tab1entry = $("<a>",{id:"Layout",href:"#layoutDIV"}).appendTo("#tab1")
  var tab2 = $("<li>",{id:"tab2"}).appendTo("#tabList")
  var tab2entry = $("<a>",{id:"Type",href:"#typeDIV"}).appendTo("#tab2")
  var tab3 = $("<li>",{id:"tab3"}).appendTo("#tabList")
  var tab3entry = $("<a>",{id:"Data",href:"#dataDIV"}).appendTo("#tab3")

console.log(tabList)
  $("#Layout").text("Layout")
  $("#Type").text("Type")
  $("#Data").text("Data")

}
