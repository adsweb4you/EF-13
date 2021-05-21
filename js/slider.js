let next  = document.querySelector('.btn-nex');
let prev  = document.querySelector('.btn-prev');

let items  = document.querySelectorAll('.items');


// გადასართავი ინდიკატორები

let indicars  = document.querySelectorAll(".indicator span");

// შემდეგი სლაიდი
next.addEventListener("click", function () {

     // აქტიური სლაიდერი
    let activeslider  = document.querySelector('.active');
  

    if (activeslider.nextElementSibling !== null) {
    activeslider.nextElementSibling.classList.add("active");    
    activeslider.classList.remove("active");
    
    }else{
        activeslider.classList.remove("active");
        items[0].classList.add("active");
    }


// ინდიკატორი

 // აქტიური ინდიკატორი
 let activindicar = document.querySelector('.indicator span.active');

if (activindicar.nextElementSibling !== null) {
    activindicar.nextElementSibling.classList.add("active");    
    activindicar.classList.remove("active");
    }else{
        activindicar.classList.remove("active");
        indicars[0].classList.add("active");
    }



 
});
// 


// წინა სლაიდი
prev.addEventListener("click", function () {

    // აქტიური სლაიდერი
   let activeslider  = document.querySelector('.active');
 

   if (activeslider.previousElementSibling !== null) {
       
   activeslider.classList.remove("active");
   activeslider.previousElementSibling.classList.add("active");
   }else{
       activeslider.classList.remove("active");
       items[items.length - 1].classList.add("active");
   }


   // ინდიკატორი

 // აქტიური ინდიკატორი
 let activindicar = document.querySelector('.indicator span.active');

 if (activindicar.previousElementSibling !== null) {
     activindicar.previousElementSibling.classList.add("active");    
     activindicar.classList.remove("active");
     }else{
         activindicar.classList.remove("active");
         indicars[indicars.length - 1].classList.add("active");
     }
 

});
// 


 
 
for (let s = 0; s < indicars.length; s++) {
    const lists = indicars[s];

    lists.addEventListener("click", function () {

            // აქტიური ინდიკატორი
    let activindicar = document.querySelector('.indicator span.active');
    activindicar.classList.remove("active");

    this.classList.add("active");
    let activslide = this.getAttribute("data-slide");

        // აქტიური სლაიდერი
     let activeslider  = document.querySelector('.items.active');

     activeslider.classList.remove("active");
     items[activslide].classList.add("active");
    })
    
}