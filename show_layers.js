

function addStyle(elem){
  var red = Math.floor(Math.random() * 255)
  var green = Math.floor(Math.random() * 255)
  var blue = Math.floor(Math.random() * 255)

  $(elem).css("border","4px solid rgb("+red+","+green+","+blue+")");
  $(elem).css("margin", "2px");
  $(elem).attr("title",elem);
  console.log("Estilo aplicado a: "+ elem)
  $(elem).attr("data-elem-name", elem)
}

function clearStyles(){
  //Remove styles
  $("style,link").each(function(i,elem){$(this).remove();})

  //Load stules
  //document.createStyleSheet('style.css');
  $("head").append($("<link rel='stylesheet' href='css/template/show_layers.css' type='text/css' media='screen' />"));
}




function showLayers(){

  var elements = Array(
    //Common
    "#loginDialog",
    "#model_msg",
    
    "#navbar-main",
      "#navbar-main-left",
        "#navbar-main-sections",
      
      "#navbar-main-right",
        "ul#navbar-mail-options",

    "#navbar-mobile-top",
      "#navbar-mobile-top-current",
      "#navbar-mobile-top-brand",
    
    "#page-rsss-icons",
    
    "#main-container",
      "#main-container",

    //Product Detail
    ".price-2x1",
    "#content"

  );
  
  for(var i = 0; i < elements.length; i++)
    addStyle(elements[i]);
  

}

showLayers();

