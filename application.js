
$(document).ready(function(){

    $("#additem").click(function(){
        var newitem = $("#textbar").val();
        console.log (newitem)
        $("#listpanel").text(newitem)
    });

$("#textbar").on('keypress', function(e) {
        if (e.which == 13) {
            e.preventDefault();
            var newitem = $("#textbar").val();
            console.log(newitem)
            $("#listpanel").text(newitem)
        }
    });








});



