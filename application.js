
$(document).ready(function(){

    $("#addItem").on('click' , addItem);

    $("#listItem").on('keypress', function(e) {
        if (e.which == 13) {
            e.preventDefault();
           addItem();
        }
});


    function addItem() {
    var itemText = $.trim( $("#listItem").val() );

    var img = $("<img />" , {
        src:
        "http://meditateinkansas.org/wp-content/uploads/2013/03/psd-trash-can-icon-copy-e1362863883898.png" ,
        class: "deleteItem"
    });

    var item = $("<li />", { text: itemText, title: "Double click to remove from list."});

    item.append(img);
    $("#list").append(item);
    $("#listItem").val('');
}



});



 $("#list").on('click', '.deleteItem', function() {
        $(this).parent().remove();
    });



$("#list").on('click', 'li', function() {
        $(this).toggleClass('strike');
    });

$("ul#list").on('dblclick' , 'li', function(){
        $(this).remove();
});


$("#listItem").click(function() {
    $(".panelText").fadeOut("slow");
    $("#removeItem").show("slow");
    $("#saleItem").show("slow");
    $("#listItem").css("background-color" , "yellow");
});


$("#removeItem").click(function(){
    location.reload();
});



