function populateSelectMenu(targetSelect,JSONobj)
{

  var $select = $(targetSelect)

var data2 =  $.ajax({
  url: JSONobj,
  type: "GET",
  dataType: "json",
  timeout: 5000,
  success: function (data, textStatus) {

    $select.html('');

      //iterate over the data and append a select option
      var listitems;
      console.log(data)
$.each(data, function(key, value){

    listitems += '<option value=' + value.OutputName + '>' + value.PlotName + '</option>';
});
$select.append(listitems);

  },
  error: function(xhr, textStatus, errorThrown){
       alert('request failed');
       alert(textStatus);

       alert(errorThrown);

}
  });
}

function saveDataToSubplot()
{

  var currIndex = $("#typeSlider").slider("option", "value");
   currIndex = currIndex - 1


  subplotsJSON.subplotArray[currIndex]["subplotTitle"] = $("#subplotName").val()
  subplotsJSON.subplotArray[currIndex]["plotType"] = $("#subplotSelect").val()


}
function updatePlotHeader()
{
  headerJSON.json[0].plotTitle = $("#Title").val()
  numOfPlots = $("#numPlots").val()
  numRow = $("#X").val()
  numCol = $("#Y").val()
}

function createSubplotArr()
{

for(i=0;i<numOfPlots;i++)
{

  subplotsJSON.subplotArray.push(Object.assign({}, subplotJSON.json[0]));

}


}

function processType()
{

  $("#dataSlider").slider("option", "value", 1)
  $("#dataSlider").slider("option", "min", 1)
  $("#dataSlider").slider("option", "max", $("#plotSlider").slider("option", "max"))



}
function processLayout()
{

  createSubplotArr()

  $("#typeSlider").slider("option", "value", 1)
  $("#typeSlider").slider("option", "min", 1)
  $("#typeSlider").slider("option", "max", $("#plotSlider").slider("option", "max"))

}

function getJSONdata(target,JSONobj)
{


  var data2 =  $.ajax({
    url: JSONobj,
    type: "GET",
    dataType: "json",
    timeout: 5000,
    success: function (data, textStatus) {

        target.json = data;

    },
    error: function(xhr, textStatus, errorThrown){
         alert('request failed');
         alert(textStatus);

         alert(errorThrown);

  }
    });

}
