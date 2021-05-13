let animal = document.querySelectorAll("h1.animal");


 function changetext(){
     
 
 for (let i = 0; i < animal.length; i++) {
     const element = animal[i];
     if(element.innerText == "ძაღლი"){
        element.innerText +=  " ცხოვრობს სახლში "
     }else{
       element.innerText +=  " ცხოვრობს ტყეში "
     }
 }
 }


 function changetextprev(){
 
    for (let i = 0; i < animal.length; i++) {
        const element = animal[i];
       
        if(element.innerText == "ძაღლი ცხოვრობს სახლში"){ 
 
           element.innerText =  element.innerText.replace(" ცხოვრობს სახლში", "");
        }else{
          element.innerText =  element.innerText.replace("ცხოვრობს ტყეში", "")
        }
    }
 }

 let vals = document.getElementById("inp");

 function incr() {
    
    vals.value++; 
 }

 function decr() {
     if(vals.value >= 1){
          vals.value--; 
     }
   
 }


// function  submitform(e) {
//    e.preventDefault();

//    let wid1 = document.getElementById("val1").value;
//    let wid2 = document.getElementById("val2").value;
//    let wid3 = document.getElementById("val3").value;

//    let price = 50;

//    document.getElementById("outp").innerText = (wid1 * wid2 * wid3) * price;
// }

let menu = document.querySelector(".nav-link.active");
let side = document.querySelector(".sidenav");

let close = document.querySelector(".btn-danger.close");

menu.addEventListener("click", function (event) {
   side.classList.toggle("show");

  

   if(menu.style.backgroundColor == "red"){
      menu.style.backgroundColor = "";
   }else{
      menu.style.backgroundColor = "red";
   }


});


close.addEventListener("click", function (event) {
   side.classList.remove("show");
});
 
document.addEventListener("click", function (event) {
console.log(event.target.classList);
 if(event.target.classList[0] == "sidenav" || event.target.classList[0] ==  "nav-link" || event.target.classList[0] == "uls"){
   
 }else{
    side.classList.remove("show");
    
 }
  });


// let button = document.querySelector(".serbtn");
// let input = document.querySelector(".form-control");
// let icon = document.querySelector("#togspan");
// button.addEventListener("click", function(){
//   this.classList.toggle("show");
//   input.classList.toggle("show");

//   if(icon.classList[1] == "bi-search"){
//    icon.classList.replace("bi-search", "bi-x-lg");
//   }else{
//    icon.classList.replace("bi-x-lg", "bi-search");
//   }


//   console.log(input.getAttribute('data-id'))

// })

let drop = document.querySelector(".selcity");
let icons = document.querySelector('.bs');
let dropmenu = document.querySelector('.city');

let li = document.querySelectorAll('.city li');


let changtxt = document.querySelector('.txt');
let inputs = document.querySelector('input[name="city_id"]')
drop.addEventListener("click", function(){

   dropmenu.classList.toggle("show")

if(icons.classList[2] == "bi-caret-down"){
   icons.classList.replace("bi-caret-down", "bi-caret-up-fill");
}else{
   icons.classList.replace("bi-caret-up-fill", "bi-caret-down");
}

});


for (let i = 0; i < li.length; i++) {
   
   const list = li[i];
   let id = list.getAttribute('data-id');
   let text = list.innerText;

   list.addEventListener("click", function(){
      changtxt.innerText = text;
      dropmenu.classList.remove("show");
      icons.classList.replace("bi-caret-up-fill", "bi-caret-down");
      inputs.value = id;
   })
   
}
