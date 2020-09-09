$(document).ready(function () {
    $("#showWorkButton").click(function () {
        if ($("#workDisplay").css("visibility") == "hidden") {
            //$("#workDisplay").css("visibility", "visible");
            $("#workDisplay").css({
                visibility: "visible",
                opacity: 0.0
            }).animate({
                opacity: 0.9
            }, 1500, function () {
                //alert("Animation complete!");
            })
        } else {
            $("#workDisplay").css({
                opacity: 0.9
            }).animate({
                opacity: 0.0
            }, 1500, function () {
                $("#workDisplay").css("visibility", "hidden");
                //alert("Animation complete!");
            })
        }
    });

});