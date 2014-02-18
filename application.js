
$(document).ready(function(){

    $("#addItem").on('click' , addItem);

    $("#listItem").on('keypress', function(e) {
        if (e.which == 13) {
            e.preventDefault();
           addItem();
        }
});


    function addItem() {
    var itemText = $("#listItem").val();
    var item = $("<li />", { text: itemText });
    $("#list").append(item);
    $("#listItem").val('');
}


});

$("ul#list").on('click', 'li', function() {
        $(this).toggleClass('strike');
    });

$("#listItem").click(function() {
    $(".panelText").fadeOut("slow");
    $("#removeItem").show("slow");
    $("#saleItem").show("slow");

});


$("#removeItem").click(function(){
    location.reload();
});



