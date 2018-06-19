// Bai tap 1

function binhPhuong(x) {
	return(x*x);
}

// Bai tap 2
var a,b,c;
function binh_phuong(a,b,c) {
	console.log (binhPhuong(3*a+2*b-c));
}

// Bai tap 3

var string1="cộng hòa xã hội chủ nghĩa việt nam";
var strim = string1.substring(0,10);
function mystring() {
	return(strim + "...");
}

// Bai tap 4

var newstrim=string1.substring(0,1);
var newstrim2=newstrim.toUpperCase()+string1.substring(1);
function mystring2() {
	return(newstrim2);
}

// Bai tap 5

var arr=[11,2,3,4,5,6,7,8,9,10];
function myMin() {
	return(Math.min.apply(null,arr));
}
