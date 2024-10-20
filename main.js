console.log("connected");
$(document).ready(function() {
    // hide show toggle 
    $('#hideme').click(function(){
        $(".hide_show").hide("slower")
    });
    $('#showme').click(function(){
        $(".hide_show").show(500)
    });
    $('#toggle').click(function(){
        $(".hide_show").toggle()
    });

    // fade
    $("#fade1").click(function(){
        $("#div1").fadeIn(3000);
      });
      $("#fade2").click(function(){
        $("#div1").fadeOut("slower");
      });
      $("#fade3").click(function(){
        $("#div1").fadeToggle(30);
      });

      //slide up down toggle
   
        $("#flip").click(function(){
          $("#panel").slideToggle("slow");
        });

        //animate
        $("button").click(function(){
            $("#animate").animate({
              left: '250px',
              opacity: '0.5',
              height: '150px',
              width: '150px'
            });
          });
})
