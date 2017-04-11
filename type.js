



function makeTypeMenu(targetDIV)
{

  var  typeDIV = $("<div>",{id:"typeDIV"}).appendTo(targetDIV)
  $("#typeDIV").append("<br>")
  var dataSlider = $("<div>",{id:"typeSlider"}).appendTo("#typeDIV")
  var dataSliderHandle = $("<div>",{id:"typeSliderHandle",class:"ui-slider-handle"}).appendTo("#typeSlider")
  $("#typeDIV").append("<br>")
  makeTypeInput("#typeDIV")
  $("#typeDIV").append("<br>")
}


function makeTypeInput(targetDIV)
{

  var subplotName = $("<label>",{id:"subplotNameLbl",for:"#subplotName", class:"fieldLbl"}).text("Subplot Title:").appendTo(targetDIV)
  var subplotNameInput = $("<input>",{id:"subplotName",name:"subplotName",size:80}).appendTo(targetDIV)
  $(targetDIV).append("<br>")
  $(targetDIV).append("<br>")
  var subplotTypeSelectLabel = $("<label>",{id:"subplotSelectLbl",for:"#subplotSelect", class:"fieldLbl"}).text("Subplot Type:").appendTo(targetDIV)
  var subplotTypeSelect = $("<select>",{id:"subplotSelect"}).appendTo(targetDIV)

  var saveType = $("<button>",{id:"saveType",class:"ui-button ui-widget ui-corner-all"}).text("Save").appendTo(targetDIV)
  $("#saveType").css("margin-left","30px")

  var processType = $("<button>",{id:"processType",class:"ui-button ui-widget ui-corner-all"}).text("Process").appendTo(targetDIV)
  $("#processType").css("margin-left","5px")

  populateSelectMenu("#subplotSelect","plotType.json")
}
