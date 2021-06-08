$(function () {
    

 
 

 
$(".nav-item").click(function (e) { 
    e.preventDefault();
    $.ajax({
        type: "get",
        url: "card.html",
        
       }).done(function (data){
         $(".output").html(data);
       })
       
       .fail(function (data) {
           
       })
});


});