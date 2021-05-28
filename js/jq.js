$(function () {
    
// $(".btn").click(function (e) { 
//     e.preventDefault();

    
//     $(".tests").hide(5000, function () {
//         alert("ანიმაცია დამთავრდა")
//     });
// });


// $(".show").click(function (e) { 
//     e.preventDefault();
//     $(".tests").show("left")
// });


// $(".showhide").click(function (e) { 
//     e.preventDefault();
//     $(".tests").slideToggle()
// });


// let maxlen = 50;

// $("#mytext").on("input",function ( ) { 
 
// let val = Number($(this).val().length) + 400;
// let valorign = $(this).val().length;

// if (valorign <= 600) {
   
//  $(".symbol").text(valorign);
//     $(".circle").attr("style", "stroke-dashoffset:" + (val + 17));

//  if(valorign > 500 && valorign < 550){
//      $(".circle").attr("stroke", "yellow");
//  }else if(valorign > 550){
//      $(".circle").attr("stroke", "red");
//  }
 
// }else{
//     $("#mytext").prop('disabled', true)
// }

// });

 //    


$(".animate").click(function (e) { 
     $("form.w-100").animate({
         "height":"0",
 

     }, 2000, function () {
        $("form.w-100").css({"overflow":"hidden"});
        $(".animate").animate({
            "opacity":0,
        }, 1000,  function () {
            $("#tetx").animate({
              
                "top": "15%",
 
            }, 5000, function () {
                $("#an").removeClass("d-flex").addClass("d-none")
            })
        })
     })
    
});


$(".stop").click(function (e) { 
     console.log("asfdsf");
    $("form.w-100").stop();
});


$(".no").click(function ( ) { 
 
    
    $(".bgred").animate({
        "width":"100%",
        "height":"100%",
        "border-top-left-radius":"0rem",
        "border-bottom-left-radius":"0rem",
        "opacity": 1,
    }, 200, function () {
   
        $(".x").addClass("show");
    })
    
});

});



