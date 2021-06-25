"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var validate_1 = require("../ts/validate");
var x = "25";
var y = 25;
var arr = ["1", "fdg", 1, 23];
arr.push("ახალი წევრი");
var myobj = {
    title: "ადმინ",
    age: 25,
    role: "admin",
    type: true
};
function myname(Myparam) {
    return Myparam.title + Myparam.age + Myparam.role + Myparam.type;
}
var paraonj = { title: "ადმინ", age: 15, role: "admin", type: 1 };
console.log(myname(paraonj));
var myForm = document.getElementById("subs");
var input = document.getElementById("val1");
myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(input.value);
});
var Itstap = /** @class */ (function () {
    function Itstap(cat) {
        this.ssl = "/storage/cert/ssltbc.pem";
        this.catagory = cat;
    }
    Itstap.prototype.mine = function () {
        return this.ssl;
    };
    Itstap.prototype.checkcourse = function () {
        if (this.catagory == 1) {
            return console.log("ჩვენ ვსწავლობთ ფრონტ ენდზე");
        }
        else {
            return console.log("ჩვენ ვსწავლობთ ქსელებზე");
        }
    };
    return Itstap;
}());
var Front = /** @class */ (function (_super) {
    __extends(Front, _super);
    function Front(data, catagory) {
        var _this = _super.call(this, catagory) || this;
        _this.data = data;
        return _this;
    }
    Front.prototype.accetssl = function () {
        _super.prototype.mine.call(this);
    };
    return Front;
}(Itstap));
var Stud = new Itstap(1);
// Stud.checkcourse();
console.log(Stud.mine());
var Dogs = /** @class */ (function () {
    function Dogs(food) {
        this.food = food;
    }
    return Dogs;
}());
var Jeck = /** @class */ (function (_super) {
    __extends(Jeck, _super);
    function Jeck(food) {
        return _super.call(this, food) || this;
    }
    Jeck.prototype.test = function () {
        return "ok";
    };
    return Jeck;
}(Dogs));
var mydog = new Jeck("dogs21");
var Status;
(function (Status) {
    Status["OK"] = "200";
    Status["SERVERERROR"] = "500";
    Status["NOTFOUND"] = "404";
})(Status || (Status = {}));
var test = Status.SERVERERROR;
validate_1.validate();
