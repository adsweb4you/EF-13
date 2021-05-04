
 


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

//const virable = document.getElementById("test").value;

 
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


//let divs = document.getElementById("outs");

//divs.innerHTML = strings;
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


 //document.getElementById("cards").innerHTML = html;


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

 //document.getElementById("prodc").innerHTML = card;

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
    // document.getElementById("cards").innerHTML += el + "<br>";
     
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



//  function sor(a, b){
//      return b - a  ;
//  } 
 
 //console.log(numbarr.sort(sor));


 let agesarr = [14, 8,  28, 45, 70, 54, 87];

// მასივის loop (გამეორება დაბეჭვდა)
// agesarr.forEach(checkag1);

//აბრუნებს პირველილ ელემენტს რომელიც ასრულებს პირობას
//agesarr.find(checkag1);

//ქმნის ახალ მასივს და აბრუნებს ყველა იმ ელემენტს რომელიც აკმაყოფილებს პირობას
// agesarr.filter(checkag1);

// გვიბრუნებს true ან false იმ შემთხვევაში თუ ერთ-ერთი ჩანაწერი ასრულებს პირობას
// agesarr.some(checkag1);

// გვიბრუნებს true ან false იმ შემთხვევაში თუ ყველა ჩანაწერი ასრულებს პირობას
// agesarr.every(checkag1);

let findesarr = agesarr.every(checkag1);

 function checkag1(value){
 
  return value >= 7;
 
 }

 console.log(findesarr)

let Products = [
    {name:"iphone", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:250},
    {name:"iphone mac book", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:350},
    {name:"pro book", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:650},
    {name:"პროდუქტი დასახელბა 4", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:2050},
    {name:"პროდუქტი დასახელბა 5", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:50},
    {name:"პროდუქტი დასახელბა 6", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:550},
    {name:"პროდუქტი დასახელბა 7", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:950},
    {name:"პროდუქტი დასახელბა 8", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:750},
    {name:"პროდუქტი დასახელბა 9", descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod", img:"img/slider.png", price:260}
];

function calc (els){
    return !els.name.search("iphone");
}

let filteredArray  = Products.filter(calc);


// let outs = document.getElementById("htmls");

// filteredArray.forEach(forprod);

// function forprod(elements){
//    let prod =  `<div class="col-lg-3 mb-4"> <div class="card">
//    <img src="${elements.img}" class="card-img-top" alt="...">
//    <div class="card-body">
//      <h5 class="card-title">${elements.name}</h5>
//      <p class="card-text">${elements.descr}</p> 
//      <span class="btn btn-primary">${elements.price} ₾</span>
//    </div>
//   </div>
//  </div>`;

//  outs.innerHTML += prod;
// }

 

 


let list =[
    {name: "გიორგი", photo:"pic.png", age: 20, reg: "2020/10/22", faculty: "პროგრამირება", attendance:85, stipendium: false },
    {name: "გიორგი", photo:"pic.png", age: 19, reg: "2020/10/22", faculty: "მეღვინეობა", attendance:100, stipendium: true },
    {name: "გიორგი", photo:"pic.png", age: 22, reg: "2020/10/22", faculty: "პროგრამირება", attendance:85, stipendium: false },
    {name: "ლევან", photo:"pic.png", age: 20, reg: "2020/09/22", faculty: "მეღვინეობა", attendance:90, stipendium: false },
    {name: "ლაშა", photo:"pic.png", age: 12, reg: "2020/09/22", faculty: "მეღვინეობა", attendance:100, stipendium: true },
    {name: "ანი", photo:"pic.png", age: 22, reg: "2020/09/22", faculty: "პროგრამირება", attendance:85, stipendium: false },
    {name: "ლუკა", photo:"pic.png", age: 20, reg: "2020/09/22", faculty: "პროგრამირება", attendance:90, stipendium: true },
    {name: "ალექსანდრე", photo:"pic.png", age: 21, reg: "2020/09/22", faculty: "პროგრამირება", attendance:100, stipendium: false },
    {name: "საბა", photo:"pic.png", age: 19, reg: "2020/09/22", faculty: "მეღვინეობა", attendance:100, stipendium: true },
    {name: "მარიამ", photo:"pic.png", age: 22, reg: "2020/09/22", faculty: "ფსიქოლოგია", attendance:100, stipendium: false },
    {name: "თამარ", photo:"pic.png", age: 21, reg: "2020/09/22", faculty: "მეღვინეობა", attendance:100, stipendium: true },
    {name: "ნინო", photo:"pic.png", age: 21, reg: "2020/09/22", faculty: "პროგრამირება", attendance:100, stipendium: false },
    {name: "კესანე", photo:"pic.png", age: 22, reg: "2020/07/22", faculty: "მეღვინეობა", attendance:100, stipendium: true },
    {name: "ლევან", photo:"pic.png", age: 19, reg: "2020/07/22", faculty: "პროგრამირება", attendance:90, stipendium: false },
    {name: "გიორგი", photo:"pic.png", age: 20, reg: "2020/11/22", faculty: "ფსიქოლოგია", attendance:90, stipendium: true },
    {name: "გიორგი", photo:"pic.png", age: 21, reg: "2020/12/22", faculty: "პროგრამირება", attendance:100, stipendium: true },
    {name: "გიორგი", photo:"pic.png", age: 21, reg: "2020/12/22", faculty: "ფსიქოლოგია", attendance:90, stipendium: false },
    {name: "გიორგი", photo:"pic.png", age: 20, reg: "2020/13/22", faculty: "პროგრამირება", attendance:85, stipendium: true },
    {name: "გიორგი", photo:"pic.png", age: 22, reg: "2020/08/22", faculty: "პროგრამირება", attendance:100, stipendium: false },
    {name: "გიორგი", photo:"pic.png", age: 12, reg: "2020/07/22", faculty: "ფსიქოლოგია", attendance:85, stipendium: false },
    {name: "გიორგი", photo:"pic.png", age: 21, reg: "2020/06/22", faculty: "მეღვინეობა", attendance:100, stipendium: true },
    {name: "კესანე", photo:"pic.png", age: 21, reg: "2020/09/22", faculty: "პროგრამირება", attendance:100, stipendium: true },
    {name: "ლაშა", photo:"pic.png", age: 22, reg: "2020/07/22", faculty: "ფსიქოლოგია", attendance:90, stipendium: true },
    {name: "ანი", photo:"pic.png", age: 21, reg: "2020/07/22", faculty: "პროგრამირება", attendance:85, stipendium: false },
    {name: "ლუკა", photo:"pic.png", age: 20, reg: "2020/07/22", faculty: "პროგრამირება", attendance:85, stipendium: false },
    {name: "ალექსანდრე", photo:"pic.png", age: 21, reg: "2020/07/22", faculty: "პროგრამირება", attendance:90, stipendium: true },
    {name: "საბა", photo:"pic.png", age: 22, reg: "2020/07/22", faculty: "მეღვინეობა", attendance:85, stipendium: false },
    {name: "მარიამ", photo:"pic.png", age: 22, reg: "2020/07/22", faculty: "პროგრამირება", attendance:90, stipendium: true },
    {name: "თამარ", photo:"pic.png", age: 20, reg: "2020/07/22", faculty: "ფსიქოლოგია", attendance:90, stipendium: false },
    {name: "ნინო", photo:"pic.png", age: 19, reg: "2020/07/22", faculty: "პროგრამირება", attendance:100, stipendium: true }

];

let finalList  = document.getElementById("finalList");

 


    function selectprof(val){

        finalList.innerHTML = ''

    if(val == 1){
        var prof  = "პროგრამირება";
    }else if (val == 2){
        var prof  = "მეღვინეობა";
    }else{
        var prof  = "ფსიქოლოგია";
    }

        let ages = list.filter(findage)
 
        function findage(lis){
            return lis.faculty == prof;
        }

        ages.forEach(showList);

    }

    
    function finds(val){

        finalList.innerHTML = ''
 

        let ages = list.filter(findage)
 
        function findage(lis){
            return !lis.name.search(val);
        }

        ages.forEach(showList);

    }
 
 

    function showList(element){
   
        let persona = `
        <div class="col-md-4 card-group">
        <div class="card mb-3 shadow ">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center">
                    <img class="card-img" src="${element.photo}" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body  ">
                        <h4 class="card-title">${element.name}</h4>
                        <p class="card-text"> ასაკი: ${element.age}</p>
                        <p class="card-text">${element.faculty}</p>
                        <span class="badge bg-light text-dark p-1 mb-3">${element.reg}</span>
                        <div class="card-footer p-0" >
                      </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    finalList.innerHTML += persona;
    }




//   d.setFullYear(d.getFullYear() + 2);
//   d.setMonth(d.getMonth() + 2);
 //console.log(d.getFullYear(), d.getMonth() + 1 , d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds())

//console.log(d.getMonth() + 1);


let timer = document.getElementById("timer");


let tim = 25;



function getTimeRemaining(){
    const total = Date.parse("2022/05/10") - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
   
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
   
    };
  }


//   setInterval(function(){
//     let time2 = getTimeRemaining();
//     console.log( time2.days ,time2.hours  , time2.minutes,time2.seconds);
// }, 1000)


  let tests = 6;
  let tests2 = 9;
  let tests4 = false;
if(tests == 6 &&  tests2 >=  8 &&  tests4){
    console.log("მართალი");
}else if(12 == 13){
    console.log("მართალი/მცდარი");
}
else{
    console.log("მცდარი");
}

 