$(function () {
    

 
 

 
$(".nav-item").click(function (e) { 
    e.preventDefault();

    $(".output").load("card.html");

    // $.ajax({
    //     type: "get",
    //     url: "card.html",
        
    //    }).done(function (data){
    //      $(".output").html(data);
    //    })
       
    //    .fail(function (data) {
           
    //    })
});


let paray = $(".mine");

$.each(paray, function (index, value) { 
     if(value.innerText == "კონტენტი 3") {
      value.style.color = "red";
     }else{
      value.style.color = "green";
     }
});


$("a.btn").click(function (e) { 
  e.preventDefault();
 let size =  $(this).parents(".card");

 console.log(size.outerWidth("500px"))

});
 

});