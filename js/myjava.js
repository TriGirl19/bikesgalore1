// JavaScript File




//for form page

$(document).ready(function() {
  
    $("#picturechange").mouseenter(function(){
       $("#picturechange").addClass("change");
       $("#picturechange").html("<h4> Bikes Galore will help you acheive your goals</h4>");
    });
//&#160 to add space in html text
    
    $("#picturechange").mouseleave(function(){
      $("#picturechange").removeClass("change");
      $("#picturechange").addClass("bike");
      $("#picturechange").html("<h4> &#160 Take on a challenge</h4>");
    });
});
   

  

  
  
 //$("#picturetext").text("We will help you meet your goals");//
//mouseenter
//mouseleave

