// datatype in js
/*
primitive type

number string boolean 
special type : null object
reference type : array object

what is diffirent underfind and null
 underfind la khai bao nhung chua gan gia tri
 
 null la gia tri rong

*/

//
var employeer = [
  { name: "Ti", age: 18 },
  { name: "Em", age: 20 },
  { name: "Teo", age: 19 },
];

var sortAge = employeer.sort(function (a, b) {
  return a.age - b.age;
});

var a = 5;
var b = 4;
var result = a++ * b-- + --a * --b;
//   5 * 4 + --a* --b     a = 6 b=3
//  5*4 + 5*2

// find max in arr
var arr = [1, 3, 4, 5, 6, 7, 8, 9];
var maxInArr = Math.max.apply(null, arr);

// keyword : new

// constructor function
function Mouse(color, weigh) {
  this.type = "mouse";
  this.color = color;
  this.weigh = weigh;
}

Mouse.prototype.sleep = function () {
  console.log("Sleeping.......");
};

var jerry = new Mouse("orange", 0.2);
var mickey = new Mouse("white", 0.5);

console.log(jerry.sleep() === mickey.sleep());
// var tom = {

//     name : "Tom" ,
//     stomach :[],
//     eat : function(mouse){
//         this.stomach.push(mouse)
//         return this ;
//     }
// }

// function NameMouse(name){
//     this.name = name;
// }

// var m1 = new NameMouse('m1')
// var m2 = new NameMouse('m2')
// var m3 = new NameMouse('m3')

// console.log(tom.eat(m1).eat(m2).eat(m3))

const arrs = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

console.log(Math.max(arrs));

// for (var i = 0; i < arrs.length; i++) {
//     console.log("i afeter"  ,i)
//   setTimeout(function() {
//     console.log(i);
//   }, 10);
// }

/*
include , indexOf
*/

/*
bind ,apply, call in js
*/
