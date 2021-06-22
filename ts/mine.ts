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


class Animal implements Fun{

    title:string;

    constructor(title  : string){
    this.title   = title;
    }


    walk(){
        console.log( this.title  );
    }

}

 
let myan = new Animal("Lion");

myan.walk()

 