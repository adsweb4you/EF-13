var z,x,m,l;

const MAXFILE_SIZE = 5;
const MAXFILE_SIZE1 = 5;

z = 0;
x = "x";
m = "m";
l = "l";

z = 5;

var names = 25;
var x = 15;
var y = names - x;

const virable = document.getElementById("test").value;

 
let strings = "<p> დასახელება </p>";
let numb = 50;
let array = [1, 5, "name"];
let obj = {names:"sds"};
let bool = true;
let bol = false;
let nulls = null;
let und = undefined;
let funs = function na(){}


// console.log( Array.isArray(obj) );


let divs = document.getElementById("outs");

divs.innerHTML = strings;
//divs.innerText = strings;



// console.log(numb1)

// ფუნქციის შექმნა
function test(name  , lastname , age  ){
 return name  +  " " +   lastname + " არის " + age + " წლის ";
}

// ფუნქციის გამოძახება

let gio = test("გიორგი", "გიორგობიანი", 25);

let testi = test("ნიკა", "ნიკოლაძე", 27);


// let admin = test();

// console.log(gio);
// console.log(testi);
// console.log(admin);

let img = 'img/item.png';
let clas = 'img-fluid';

//let html   = "<img src='" + img  + "'  class='"+ clas +"'>";

let html   =  `<img src="${img}" class="${clas}">`;


 document.getElementById("cards").innerHTML = html;


let $ = function(el){
    return document.querySelectorAll(el);
}

 
let mystr = "მე ვარ IT STEP GEORGIA |  IT GEORGIA  სტუდენტის";

//ეძებს კონკრეტული სიტყვის ინდექს სტრინგის დასაწყისიდან 
//mystr.indexOf("IT")

//ეძებს კონკრეტული სიტყვის ინდექს სტრინგის ბოლოდან 
//mystr.lastIndexOf("IT")

//ეძებს კონკრეტული სიტყვის ინდექს სტრინგის დასაწყისიდან 
//mystr.search("STEP")

//slice vs substring | substring არ გადაეცემა უარყოფითი ინდექსი
//mystr.slice(2, -9)

// მეორე პარამეტრი ინდექს იღებს პირველი პარამეტრიდან და იწყებს ჭრას
//mystr.substr(7, 2)

//სტრინგში სიმბოლოების ჩანაცვლება
//val.replaceAll("ცუდი სიტყვა", "xxxx")


//შლის სიცარიელეებს სტრინგის მარჯვნიდან და მარცხნიდან
//val.trim()


// console.log(mystr.split(" "))
 

//  function gios(x,y){
//      return x + y;
//  }



let b = 1.5555555;

//გადაყავს სტრინგი ნამბერში
//Number(b)

// დამრგვალება ერთეული ათეული  აშ...
//toFixed(2)



let User  =  {
    name:"ადმინ",
    email:"admin@info.ge",
    age:{age1:45, age2:75},
    admin:4,
    address:"მისამართი 1",
    delate:  function() {
       if(this.admin == true){
        console.log("მომხმარებელი არის ადმინი!");
       }else{
        console.log("მომხმარებელი არ არის ადმინი!");
       }
    }
}

User.name = "admin2";

User.delate();


let Product = {
    title:"მიქსერი",
    img:"https://haus.ge/admin/images/products/524.6.jpg",
    weigt:3.798,
    price:79.99,
    qou:8,
    calc:function(){
        return this.weigt * this.price;
    }
}

let card = `<div class="card">
<img src="${Product.img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">  ${Product.title} </h5>
  <p class="card-text">წონა: <span class="badge bg-success">${Product.weigt} </span> </p>
  <p class="card-text">ფასი: <span class="badge bg-success">${Product.price} </span> </p>
  <p class="card-text">რაოდენობა: <span class="badge bg-info">${Product.qou} </span> </p>
  <p class="bg-warning p-2 text-center"> ${check()} </p>
</div>
</div>`

 document.getElementById("prodc").innerHTML = card;

 function check(){
   if(Product.qou > 0){
       var txt = `მარაგშია  რაოდენობა  ${Product.qou}   ერთეული`;
   }else{
       var txt = `არ არის მარაგში`
   }

   return txt;
 }


 let nwarray = ["გიორგი", "ნინო", "თათა", "სანდრო", "გოდერძი" , "ანა"];

 for(let i = 0; i  <  nwarray.length; i++ ){
     let el = nwarray[i];
     document.getElementById("cards").innerHTML += el + "<br>";
     
 }
 
 

// მასივის ელემენტების რაოდენობა
//nwarray.length

// ახალი ელემენტის დამატება მასივის ბოლო ელემენტად
//nwarray.push("ახალი წევერი")


// ახალი ელემენტის წაშლა მასივის ბოლო ელემენტად
//nwarray.pop("ახალი წევერი")

//ახალი წევრის დამატება მასივის დასაწყისში
//nwarray.unshift("ახალი წევერი");

//პირველი ელემენტის წაშლა მასივის დასაწყისში
//nwarray.shift();

// პირველი პარამეტრი უზრუნელყობს იმას თუ რომელი ინდექსიდან უნდა დაიწყოს ჭრა , მეორე პარამეტრი განსაზღვრავს იმას თუ 
//რამდენდი ინდექსი უნდა მოიჭრას
//nwarray.splice(2, 1)
// თუ splice გადაეცემა 3 პარამეტრზე მეტი , პირველი პარამეტრი განსაზღვრავს იმას თუ რომელი ინდექსის შემდეგ
//უნდა მოხდეს ჭრა | მეორე პარამეტრი განსაზღვრავს რამდენი ელემენტი უნდა წაიშალოს , და თუ ის 0 უდრის მესამე ან შემდეგი 
//პარამეტრები დალაგდებიან მას შემდეგ
//nwarray.splice(3, 0, "ახალი პარამეტრი", "ახალი პარამეტრი 2")
//let slicesarray =  nwarray.slice(-3);

let numbarr = [12,23,34,45,123];



 function sor(a, b){
     return b - a  ;
 } 
 
 //console.log(numbarr.sort(sor));