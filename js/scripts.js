$(document).ready(function(){
 //adding background color using jquery- this is not advisable as this a css function.
    //  $("button#green").click(function(){
  //      $("body").css("background-color", "green");
  //  });
    $("button#green").click(function(){
        $("body").removeClass();
        $("body").addClass("green-background");
});
    $("button#yellow").click(function(){
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });
    $("button#red").click(function(){
        $("body").removeClass();
        $("body").addClass("red-background");
    });
});