function makeDataInput(targetDIV)
{

  var plotTypeNameLbl = $("<p>",{id:"plotTypeNameLbl", class:"fieldLbl"}).text("Plot Type:  ").appendTo(targetDIV)
  $("#dataDIV").append("<br>")
  $("#dataDIV").append("<br>")

}


function makeDataMenu(targetDIV)
{

  var  dataDIV = $("<div>",{id:"dataDIV"}).appendTo(targetDIV)
  $("#dataDIV").append("<br>")
  var dataSlider = $("<div>",{id:"dataSlider"}).appendTo("#dataDIV")
  var dataSliderHandle = $("<div>",{id:"dataSliderHandle",class:"ui-slider-handle"}).appendTo("#dataSlider")
  $("#dataDIV").append("<br>")
  makeDataInput("#dataDIV")
  $("#dataDIV").append("<br>")

}

function updateDataMenu(plotIndex)
{
  $(".dataMenu").remove()
  addDataInput("X")
  addDataInput("Y")
}

function removedDataMenu(targetDIV)
{
  $(".dataMenu").remove()

}

function loadDataMenu(menuObj)
{


}

function addDataInput(name)
{
  var inputDIVID = "inputDIV" + name
  var selectID = "dataSet" + name
  var selectDataID = "data" + name

  var newDIV = $("<div>",{id:inputDIVID, class:"dataMenu"}).appendTo("#dataDIV")
  var dataSetInputLbL = $("<label>",{id:"dataSelectLbl" + name,for:selectID, class:"fieldLbl dataMenu"}).text(name + ":").appendTo("#"+inputDIVID)
  var dataSetInput = $("<select>",{id:selectID, class:"dataMenu"}).appendTo("#"+inputDIVID)
  var dataInput = $("<select>",{id:selectDataID, class:"dataMenu"}).appendTo("#"+inputDIVID)


  $( function() {
    $( "#" + selectID).selectmenu();
    $( "#" + selectDataID).selectmenu();
  } );


}
