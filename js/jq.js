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


$("#inttest").on("input", function ( ) { 
 
    if ($(this).val().length > 20) {
        $(this).addClass("bg-danger").prop('disabled', true); 
        let cs =    $("#chn option[value='2']");
        cs.prop('selected', true)
    }
 

 
});
 
 
$("#chn").change(function (e) { 
    
    if ($(this).val() == 1) {
        $("#inttest").prop('disabled', false).addClass("bg-success").removeClass("bg-danger");
    }else{
        $("#inttest").prop('disabled', true).addClass("bg-danger").removeClass("bg-success");
    }
    
});

$(".infdiv input").click(function (e) { 
    
    $(this).animate({
     "width":"100%",
    }, 300, function () {
        $(".infdiv span").animate({
       "top": "50%",
       "opacity": "1"
        }, 600)
    })
    
});

$(document).click(function (e) { 
    e.preventDefault();
    if (e.target.tagName == "BODY") {
        $(".infdiv span").animate({
               "top": "140%",
               "opacity": "0" 
           }, 300, function () {
               $(".infdiv input").animate({
              "width":"43px",
             
               }, 600)
           })
    }
});
 
$(".grid").click(function () { 

    $(".secend").animate({
        "width":"68%",
    }, 500, function () {
        $(".first").animate({
            "width":"32%"
        });
        $(".secend").animate({
            "width":"34%",
            "margin-left": "33%"
        });
       
    })
 
 $(".last").animate({
            "width":"32%",
        }, 500)

 
     setInterval(function () {
         $(".secend").css({
                    "transform": "translateY(-100%)",
                    "transition": "all .5s",
                });
                $(".last").css({
                    "transform": "translateY(-200%)",
                    "transition": "all .5s",
                }) 
    }, 1000)
    
});


$(".list").click(function () { 

    $(".secend").css({
        "transform": "translateY(-100%)",
        "transition": "all .5s",
    });
    $(".last").css({
        "transform": "translateY(-200%)",
        "transition": "all .5s",
    }) 


    $(".secend").animate({
        "width":"68%",
    }, 500, function () {
        $(".first").animate({
            "width":"32%"
        });
        $(".secend").animate({
            "width":"34%",
            "margin-left": "33%"
        });
       
    })
 
 $(".last").animate({
       "width":"32%",
        }, 500)

 
    
});


let sibl = $(".grids12");

sibl.remove();


$(".next").click(function () { 

    if($(".step.active").next()[0].classList[0] != "content"){
         $(".step.active").addClass("checked").removeClass("active").next().addClass("active");
// console.log($(".step.active").next()[0].classList[0])
$(".tab.active").removeClass("active").next().addClass("active");

// წინა ღალიკის გამოჩენ
$(".prev").css("opacity","1");
    }


});
 

$(".prev").click(function () { 

    if($(".step.active").prev().length > 0){
         $(".step.active").removeClass("checked").removeClass("active").prev().addClass("active");
         $(".tab.active").removeClass("active").prev().addClass("active");
 if ($(".step.active").prev().length == 0) {
    $(".step").first().removeClass("checked");
    $(".prev").css("opacity", "0");

 }
    }
 
});

});



