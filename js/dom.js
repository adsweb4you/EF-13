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