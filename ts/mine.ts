import {validate} from "../ts/validate"

let x : string = "25";
let y : number = 25;

let arr : any[] = ["1", "fdg", 1, 23];

arr.push("ახალი წევრი");


interface User {
    title:string;
    age:number;
    role:string;
    type:boolean | number;
}

let myobj : User = {
    title : "ადმინ",
    age: 25,
    role:"admin",
    type:true,
}

function myname(Myparam : User){
    return Myparam.title + Myparam.age + Myparam.role + Myparam.type;
}

let paraonj = {title:"ადმინ", age:15, role:"admin", type:1};

console.log(myname(paraonj));

let myForm = document.getElementById("subs");
let input = document.getElementById("val1") as HTMLInputElement;
myForm.addEventListener("submit", function(e){
    e.preventDefault();
  console.log(input.value);
});


interface Fun {
    walk() : void
}


 
class Itstap {
    catagory:number;


   private ssl : string = "/storage/cert/ssltbc.pem"


    constructor(cat:number){
        this.catagory = cat;
    }


  public  mine(){
        return  this.ssl;
    }

    checkcourse(){
        if(this.catagory  == 1){
            return console.log("ჩვენ ვსწავლობთ ფრონტ ენდზე");
        }else{
            return console.log("ჩვენ ვსწავლობთ ქსელებზე");
        }
    }

}

class Front extends Itstap {
     data:string;

     constructor(data:string, catagory:number){
     super(catagory);
     this.data = data;
    
    }

    accetssl(){
        super.mine();
    }


}

let Stud = new Itstap(1);

// Stud.checkcourse();

console.log(Stud.mine())

abstract class Dogs {
    food:string;
    constructor(food:string) {
        this.food = food;
    }
}

interface Food{
    title:string;
    test() : void;
}

class  Jeck extends Dogs implements Food {
    title;
    constructor(food:string) {
        super(food);
    }

    test(){
        return "ok";
    }
}

let mydog = new Jeck("dogs21");




enum Status {
   OK = "200",
   SERVERERROR = "500",
   NOTFOUND = "404"
}


let test : Status = Status.SERVERERROR




 validate()



 class user {

    private name: string = "შაკო";
    private password : any = "asd)23+sed";
    
    private Token :any = "238974ehkujfh)(214euhwr";

     constructor(parameters) {
         
     }
 }