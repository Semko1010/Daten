var x = 2;
var y = 4;

if ((y > x || y++ === 4) && ++y === 5) {
	x = 1;
} else {
	x = 4;
}

console.log(x);
console.log(y);

var id = { name: "semir", nachname: "hamidovic" };
console.log(id);

var a = ["apfel", "banana", "kartoffel"];
var b = a;
var c = a.slice();
a.push("birne");
console.log(a);
console.log(c);

function a() {}

var b = function () {};

console.log(typeof a);
console.log(typeof b);
