

$(document).ready(function(){

    $("#additem").click(function(){
        var newitem = $("#textbar").val();
        console.log (newitem)
        $("#listpanel").text(newitem)
    });
});



