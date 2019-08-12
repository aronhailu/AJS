// //console.log("Hi, there!");
// // var age = 20;
// // console.log(age);
// // var name = 'kebede';
// // console.log(name);
// // var isMarried = false;
// // console.log(isMarried);

// // function add (num1, num2) {
// // return num1 + num2;
// // }

// // var sum = add(10, 15);
// // console.log(sum);

// function Car(model, color) {
//     this.model = model,
//     this.color = color
//     return this.model + " car is" + this.color;
   
// }

// var carObj1 = Car('BMW', 'red');
// var carObj2 = Car('Ford', 'red');

// console.log(carObj1);

/******     COUNT DOWN USING JS TIMER FUNCTION    ************/

var endDate = new Date("Sep 12, 2019 12:00:00").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    console.log(t);
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>DAY(S)</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>HR(S)</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>MIN(S)</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'>SEC(S)</span>";
    
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);

/*******    TAKING INPUT AND GIVING OUTPUT USING DOM MANIPULATION     ********/