// this is not the best method to create Objects
// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver  = "Shaun";
// myCar.drive = function(speed, time) {
//     console.log("The car is driving now. The driver is " + myCar.driver + ". With the maxspeed of " + myCar.maxSpeed + "km/h. And he traveled " + speed * time + " kilometers.");
// };

// myCar.drive(10,10);

// it's same as object myCar but in shorter version!!
// var myCar2 = {

//     maxSpeed: 50,
//     driver: "Mateusz",
//     drive: function(speed, time) {
//         console.log(speed * time);
//         console.log(
//             "The car is driving now. The driver is " +
//             this.driver +
//             ", with the masxspeed of " +
//             this.maxSpeed +
//             "km/h. And he traveled "
//             + speed * time +
//             " kilometers."
//         );
//     },
// };

// myCar2.drive(50, 3);



var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed,
    this.driver = driver,
    this.drive = function(speed, time) {
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
    }
}


console.log("The car is driving now.")

var myCar = new Car(70, "mateusz");
var myCar2 = new Car(701, "mateu1sz");
var myCar3 = new Car(702, "mate1usz");
var myCar4 = new Car(703, "mateu3sz");

myCar.drive(100, 20);

myCar4.drive(2200, 10)







