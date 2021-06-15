import {names} from '../js/export.js'



class Car {

    constructor (brand, name , model){
        this.model = model;
        this.brand = brand;
        this.name = name;
    }

    // static names  = "შაკო"


    // static shako(){
    //     return "Shako";
    // }

    get shako(){
        return   this.model ;
    }

    set shako(x){
            this.model = x ;
    }

}

class mods extends Car{
    constructor(model){
        
         super(model);
         this.model = model;
    }
}


let mycar  = new Car("ford", "mustang", "112");
mycar.shako = "ჯსკჰდფ"
console.log(mycar.shako )
console.log(names())