


var body = $("body").append("<div>")

var plotSpyderMain = $("<div>",{id:"plotSpyderMain"}).appendTo("body")
var headerDIV = $("<div>",{id:"headerDIV"}).appendTo("#plotSpyderMain")

var plotTitle = ""
var numOfPlots = 0
var numRow = 0
var numCol = 0
var headerJSON = {"json":0}
var subplotJSON = {"json":0}
var subplotsJSON = {"subplotArray":[]}


getJSONdata(headerJSON,"plotHeader.json")
getJSONdata(subplotJSON,"plotSubplot.json")


createTabbedMenu("#plotSpyderMain")

makeLayoutMenu("#menuDIV")
makeTypeMenu("#menuDIV")
makeDataMenu("#menuDIV")

$(document).ready(function() {


//Create plot slider
  $( function() {
    var handle = $( "#plotSliderHandle" );
      $( "#plotSlider" ).slider({
        min: 1,
        max: 1,
        create: function() {
          handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
           handle.text( ui.value );
        }

      });

    } );

      $( function() {
        var handle = $( "#typeSliderHandle" );
          $( "#typeSlider" ).slider({
            min: 1,
            max: 1,
            create: function() {
              handle.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
               handle.text( ui.value );
            }

          });

        } );

        $( function() {
          var handle2 = $( "#dataSliderHandle" );
            $( "#dataSlider" ).slider({
              min: 1,
              max: 1,
              create: function() {
                handle2.text( $( this ).slider( "value" ) );
              },
              slide: function( event, ui ) {
                 handle2.text( ui.value );
                 updateDataMenu(ui.value);
              }


            });

          } );

    $( function() {
      $( "#menuDIV" ).tabs();
    } );

    $( function() {
      $( "#subplotSelect" ).selectmenu();
    } );


  $('#CreateLattice').click(function() {
        initializeGridSpecSelection()

    });

    $('#ProcessGrid').click(function() {
          updatePlotHeader()
          processLayout()

      });

      $('#saveType').click(function() {

            saveDataToSubplot()
        });

        $('#processType').click(function() {

              processType()
          });

});
