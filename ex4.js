
var loadPage = function(){
    // $("#cmdCreateDiv").click(createDiv);
    $("#submit").on("click", function(event){
        console.log("im here1");
        $("#inputName").css("border-color","red");
        $("#errorText").hide();
        event.preventDefault();
    });
}


// var createDiv = function() {
//     var css = {"position" : "absolute",
//     "left" : "100px",
//     "width" : "100px",
//     "height" : "100px",
//     "background-color" : "blue"};
//     var d = $("<div></div>");
//     d.css(css);
//     $("h1").append(d);
// };



$("document").ready(loadPage);