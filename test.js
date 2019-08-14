var myArray = new Array()
myArray[0] = 8;
myArray[1] = "hello";

// this is not the best method to create Objects
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver  = "Shaun";
myCar.drive = function(speed, time) {
    console.log("The car is driving now. The driver is " + myCar.driver + ". With the maxspeed of " + myCar.maxSpeed + "km/h. And he traveled " + speed * time + " kilometers.");
};

myCar.drive(10,10);



// it's same as object myCar but in shorter version!!
var myCar2 = {
    maxSpeed: 50,
    driver: "Mateusz",
    drive: function(speed, time) {
        console.log(speed * time);
        console.log(
            "The car is driving now. The driver is " +
            this.driver +
            ", with the masxspeed of " +
            this.maxSpeed +
            "km/h. And he traveled "
            + speed * time +
            " kilometers."
        );
    },
};


myCar2.drive(50, 3);
