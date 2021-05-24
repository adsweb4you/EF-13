// let next  = document.querySelector('.btn-nex');
// let prev  = document.querySelector('.btn-prev');

// let items  = document.querySelectorAll('.items');
 

// // გადასართავი ინდიკატორები

// let indicars  = document.querySelectorAll(".indicator span");

// // შემდეგი სლაიდი
// next.addEventListener("click", function () {

//     this.style.pointerEvents = "none";

//      // აქტიური სლაიდერი
//     let activeslider  = document.querySelector('.active');
  
// //   if (activeslider.nextElementSibling !== null && activeslider.nextElementSibling.nextElementSibling == null) {
// //     items[0].style.transform = 'translateX(100%)'
// //   }else{
// //     items[0].style.transform = 'translateX(-100%)'
// //   }
    
 

 


//     if (activeslider.nextElementSibling !== null) {
//     activeslider.nextElementSibling.classList.add("active");    
//     activeslider.classList.remove("active");
    
//     if (activeslider.nextElementSibling.nextElementSibling !== null) {
//     activeslider.nextElementSibling.nextElementSibling.classList.add("repplaced");   
   
 
//     }else{
//         items[0].classList.add("repplaced");
//     }
    
//     }else{
//         activeslider.classList.remove("active");
//         items[0].classList.add("active");
    
//         activeslider.previousElementSibling.classList.add("repplaced");
//     }


// // ინდიკატორი

//  // აქტიური ინდიკატორი
//  let activindicar = document.querySelector('.indicator span.active');

// if (activindicar.nextElementSibling !== null) {
//     activindicar.nextElementSibling.classList.add("active");    
//     activindicar.classList.remove("active");
//     }else{
//         activindicar.classList.remove("active");
//         indicars[0].classList.add("active");
//     }


//     setTimeout(function () { 
//         document.querySelector('.repplaced').classList.remove("repplaced");
//         next.style.pointerEvents = "all";
//       }, 3000);
 
//      items[0].style.transform = 'translateX(-100%)'
//       if (items[items.length - 1 ].classList[1] == "active") {
 
//         setTimeout(function () { 
 
//         items[0].style.transform = 'translateX(100%)'
           
//           }, 3000);
    
//     }

// });
// // 


// // წინა სლაიდი
// prev.addEventListener("click", function () {

//     // აქტიური სლაიდერი
//    let activeslider  = document.querySelector('.active');
 

//    if (activeslider.previousElementSibling !== null) {
       
//    activeslider.classList.remove("active");
//    activeslider.previousElementSibling.classList.add("active");
//    }else{
//        activeslider.classList.remove("active");
//        items[items.length - 1].classList.add("active");
//    }


//    // ინდიკატორი

//  // აქტიური ინდიკატორი
//  let activindicar = document.querySelector('.indicator span.active');

//  if (activindicar.previousElementSibling !== null) {
//      activindicar.previousElementSibling.classList.add("active");    
//      activindicar.classList.remove("active");
//      }else{
//          activindicar.classList.remove("active");
//          indicars[indicars.length - 1].classList.add("active");
//      }
 

// });
// // 


 
 
// for (let s = 0; s < indicars.length; s++) {
//     const lists = indicars[s];

//     lists.addEventListener("click", function () {

//             // აქტიური ინდიკატორი
//     let activindicar = document.querySelector('.indicator span.active');
//     activindicar.classList.remove("active");

//     this.classList.add("active");
//     let activslide = this.getAttribute("data-slide");

//         // აქტიური სლაიდერი
//      let activeslider  = document.querySelector('.items.active');

//      activeslider.classList.remove("active");
//      items[activslide].classList.add("active");
//     })
    
// }



// setInterval(function () {
//     let num = document.querySelector(".progress-bar");
//     let w = num.style.width.replace("%",'');

 
//     let s = (Number(w) + 10) + "%" ;
//     console.log(s);
//     num.style.width = s;

//   }, 1000)


//   window.addEventListener("load", function () {

 

//     })


let button  = document.querySelectorAll(".port li");

 

for (let s = 0; s < button.length; s++) {
  const buttons = button[s];
 
  buttons.addEventListener("click", function () {
  let  activebtn  = document.querySelector(".port li.active");
  let  activdiv  = document.querySelectorAll(".portfolio div.show");  
  let mainclass = this.getAttribute('data-class');
  let showdiv = document.querySelectorAll(mainclass);
  let alldiv = document.querySelectorAll('.portfolio div');
    
     if (mainclass !== "all") {
  for (let m = 0; m < activdiv.length; m++) {
    const divs = activdiv[m];
    divs.classList.remove("show")
  }

  

  for (let n = 0; n < showdiv.length; n++) {
    const shows = showdiv[n];
    shows.classList.add("show")
  }

 }else{
  for (let l = 0; l < alldiv.length; l++) {
    const shows = alldiv[l];
    shows.classList.add("show")
  }
 }

  activebtn.classList.remove("active");
  this.classList.add("active");



})



  
}