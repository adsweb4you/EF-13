import * as  modul  from "../js/func.js"
// import {  myname } from "../js/func.js"

class Animal {

    constructor(Config, names){
        this.Config  = Config;
        this.color  = Config.color;
        this.time  = Config.time;
        this.names  = names;
    }


    
     config() {
          document.getElementById("animate").style.color = this.color;
    }
 

    init(){
        return this.config();
    }


    foodtype(){
        return "eat";
    }

    get namess(){
        return this.names;
    }


    set  namess(nm){
      this.names = nm;
    }


}

class Dog extends Animal {
    constructor(Config, names){
         super(Config, names);
        
        super.namess;
        this.names  = names;
    }

    myanimal(){
        return `ჩემი ცხოველი არის ${this.names}`
    }

}

let dog = new Dog({
    color:"green",
    time:250
}, "კატა")


// let animal = new Animal({
//     color:"green",
//     time:250
// });
 
dog.names = "ძაღლი"

console.log(dog.namess)

console.log(modul.myname2())

//  animal.config()
