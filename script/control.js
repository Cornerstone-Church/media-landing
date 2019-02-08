$(document).ready(function() {
    $("#serveButton") .click (function(){
        $("#servantMinisterForm").fadeIn();
        $("#requestForm").hide();
   	 }); 

    $("#requestButton") .click (function(){
        $("#servantMinisterForm").hide();
        $("#requestForm").fadeIn();
     }); 

    $("#filmButton") .click (function(){
        $("#form").hide();
        $("#music").hide();
        $("#film").fadeIn();
        $("#castingForm").hide();
     }); 

    $("#musicButton") .click (function(){
        $("#form").hide();
        $("#film").hide();
        $("#music").fadeIn();
        $("#castingForm").hide();
     }); 

     $("#menuClose") .click (function(){
        $("#home").animate({width: "100%"});
        $("#menuOpen").show();
        $("#menuClose").hide();
        $("#subMenu").animate({width: "0%"});
        $("#subMenu").hide();
     }); 
     $("#photosButton") .click (function(){
        $("#video").fadeOut();
        $("#photos").fadeIn();
        $("#photosButton").hide();
        $("#videoButton").hide();
        $("#photosButton2").show();
        $("#videoButton2").show();
     }); 
     $("#videoButton2") .click (function(){
        $("#video").fadeIn();
        $("#photos").fadeOut();
        $("#photosButton").show();
        $("#videoButton").show();
        $("#photosButton2").hide();
        $("#videoButton2").hide();
     }); 
     $("#bookingButton") .click (function(){
        $("#photos").fadeOut();
        $("#video").fadeOut();
        $("#booking").fadeIn();

     }); 
var beepOne = $("#beep-one")[0];
var menuAudio = $("#menuAudio")[0];

$("a")
    .click(function() {
        beepOne.play();
    });
$("#featureButtonTwo")
    .click(function() {
        beepOne.play();
    });
$("#featureButtonThree")
    .click(function() {
        beepOne.play();
    });
$("#menu")
    .mouseenter(function() {
        menuAudio.play();
    });
});