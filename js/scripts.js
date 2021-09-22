$(document).ready(function(){
    $("button#green").click(function(){
        $("body").css("background-color", "green");
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