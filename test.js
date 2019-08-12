
//Global variable
var foo = 20;


// Local variable
// It can't be call outside of the function
function myFunction() {
    var bar  = 10;
}


function getAverage (a,b) {

    var average = (a + b) / 2; //local variable
    console.log(average);
    return average;

}

var myResult = getAverage(7, 11); //global variable

function logResult() {

    console.log("the average is: " + myResult + " inside the function");

}

logResult();