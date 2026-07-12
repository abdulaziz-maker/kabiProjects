// let name = ["ali","fahad","omar"];

// name.forEach(function(nam){
// console.log("Hello" + " "+  nam);
// });


// let number = [10,20,30];
// let plus = number.map(function (num){
//     return num+5;
// });
// console.log(plus);

// let number1= [1,2,3,4,5,6,7,8,9,10];

// let order = number1.filter(function(filter){
//     return filter>5;
// })

// console.log(order);

// let letters = ["A", "B", "C", "D", "E"];

// let FirstLetters = letters.slice(0,3);
// console.log(FirstLetters);

// let numbers = [10, 20, 30, 40];

// let thirty = numbers.splice(2,1);
// console.log(thirty);
// console.log(numbers);
// numbers.push(50);
// numbers.unshift(80);
// console.log(numbers);


let numbers = [1, 2, 3, 4, 5];

let mult = numbers.map(function (mul){
    return mul*10;
});

// console.log(mult);

let filt = numbers.filter(function (filt){
     return filt>2;
});
// console.log(filt);

let search = numbers.find(function(search){
    return search>3;
});

// console.log(search);

let y =[...numbers];
// console.log(y);

function welcome(){
    console.log("welcome");
}

welcome();

function helloName(name){
    console.log("Hello " + name)
}
helloName("ali");
helloName("aziz")

function age(age){
    console.log("your age is: " + age)
}

age(16);

function printNumbers(numbers) {
  numbers.forEach(function (number) {
    console.log(number);
  });
}

printNumbers([1, 2, 3]);