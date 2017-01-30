

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


var testText = $("#chartTypeDIV").append("<p>").text("test")
var testText = $("#dataDIV").append("<p>").text("test2")

$( function() {
    $( "#menuDIV" ).tabs();
  } );
