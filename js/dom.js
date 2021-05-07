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