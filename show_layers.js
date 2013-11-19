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
      "#main-wrapper",
        ".alert",
        "#content",
          "#eshop-catalog",
            ".catalog-category-filter",
            ".catalog-name-filter",



    //Product Detail
    ".price-2x1",
    ".price-actual",
    ".product-description",
    ".product-categories",
    ".product-attributes-selector",
    ".product-attributes-selector-data",
    ".product-size",
    ".product-prices",
    ".product-color",
    ".product-amount",
    ".product-name",
    ".preview-carousel-slider",
    ".page-title"
  );


function addStyle(elem){
  var red = Math.floor(Math.random() * 200)
  var green = Math.floor(Math.random() * 200)
  var blue = Math.floor(Math.random() * 200)  

  var $elem = $(elem);

  $elem.addClass("spy");

  $elem.attr("title",elem);
  
  var $position = $elem.css("position");
  if($position == "relative" || $position == "absolute"){
    $elem.prepend('<div class="layer-name">'+ $elem.attr("data-parent") +'-> ' + $elem.prop('tagName') + elem + ' (' + $position + ')</div>')
  }else{
    $elem.prepend('<div class="layer-name">' + $elem.prop('tagName') + elem + '</div>')
  }
  $elem.css("border","4px solid rgb("+red+","+green+","+blue+")");
  $(elem + " .layer-name").css("background-color","rgb("+red+","+green+","+blue+")");
}

function clearStyles(){
  //Remove styles
  
  $(elements).each(function(i,elem){
    $elem = $(elem);
    
    var position = $elem.css("position");
    if(position == "relative" || position == "absolute"){
     
     $parents = $elem.parents();

     var i = 0;
     while($parents.eq(i).length > 0 && ($parents.eq(i).css("position") != "absolute" && $parents.eq(i).css("position") != "relative")){ i++; }

     if( $parents.eq(i).attr("id") )
      $elemParent = $parents.eq(i).attr("id") + " ("+$parents.eq(i).css("position")+")"; 
     else if( $parents.eq(i).attr("class") )
      $elemParent = $parents.eq(i).attr("class") + " ("+$parents.eq(i).css("position")+")";
     else{
      $position = $parents.eq(i).css("position");
      if(!$position)
        $position="static";
      $elemParent = "body ("+$position+")"; 
     }

     $elem.attr("data-parent", $elemParent);

    }

  });
  
  //changeStyles()
  setTimeout("changeStyles()",1000);
  
}

function changeStyles(){
  console.log("Lanzado!")
  $("style,link").each(function(i,elem){$(this).remove();})

  //Load stules
  //document.createStyleSheet('style.css');
  $("head").append($("<link rel='stylesheet' href='http://localhost:8081/show_layers.css' type='text/css' media='screen' />"));
}


function showLayers(){

  for(var i = 0; i < elements.length; i++)
    addStyle(elements[i]);
  

}

clearStyles();
showLayers();

