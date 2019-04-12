$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
      
        if(top > 50) { // tu zmieniamy wysokosc - gdy strona zjedzie 50px w dol
         $('.boczne_menu').css('top','0');
        }
        else {
         $('.boczne_menu').css('top','85px');
        }
     }); 

});


