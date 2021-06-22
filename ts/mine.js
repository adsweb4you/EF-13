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
var Animal = /** @class */ (function () {
    function Animal(title) {
        this.title = title;
    }
    return Animal;
}());
var myan = new Animal("Lion");
myan.walk();
