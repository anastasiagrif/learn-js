
/*document.getElementById("pink").innerHTML = "Hello, doggy";
document.bgColor = "pink";
var x = 0,
    y = 20,
    z = 30;
console.log(x+y+z);


if (x>5) {                // if - если
    console.log(">5");   //else - иначе
} else if (x<0) {
     console.log("no");
} else  {
     console.log("else");
}

for (var i=0; i<10; i++) {
    console.log(i);
}


var  sum = 0;
for (var  k=0; k<10; k++) { 
        sum = sum + k;  
}
console.log(sum);


var mul=1;
for (var  t=1; t<10; t++) { 
        mul= mul * t;  
}
console.log(mul);
*/


/*
function fact(n) {
    var mul = 1;
    for (var i = 1; i<n+1; i++) { 
        mul = mul * i;  
    }
    return mul;
}

var z = fact(0);
console.log(z);

*/

/*
function sum(a,b) {
    var sum = 0;
    for (var k=a; k<=b; k++) { 
        sum = sum + k;  
    }
    return sum;

}

var z = sum(10,10);
console.log(z);
*/

function sum(a,b) {
    var sum = 0;
    for (var k=a; k<=b; k++) {
        if (k % 2 == 0) {
            sum = sum + k;
        }
    }
    return sum;
}

var z = sum(1,5);
console.log(z);
