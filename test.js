var myArray = new Array()
myArray[0] = 8;
myArray[1] = "hello";

// this is not the best method to create Objects
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver  = "Shaun";
myCar.drive = function(speed, time) {
    console.log("The car is driving now. The driver is " + myCar.driver + ". With the maxspeed of " + myCar.maxSpeed + "km/h. And he drive: " + speed * time + " kilometers.");
};

myCar.drive(10,10);


var myArray2 = [true, 15, "hi"];


// it's same as object myCar but in shorter version!!
var myCar2 = {
    maxSpeed: 50,
    driver: "Mateusz",
    drive: (speed, time) => {
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
