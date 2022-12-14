// var greeting = 'Hello';
// function test(){
//     if(true){
//         var greeting = 'Hi';
//     }
// }

// let is very similar to how Java works (obeys scope and cannot redeclare)
let greeting = 'Hello';
function test(){
    if(true){
        let greeting = 'Hi';
    }
}
console.log(greeting);

const TEST_VALUE = 6;

console.log(1 == '1');
console.log(1 === '1');
console.log(1 == true);
console.log(1 === true);
console.log(typeof(1));
console.log(typeof(true));

let number1 = 6;
let number2 = 7;
let sum = number1+number2;

// let result = number1 + " + " + number2 + " = " + sum;

let result = `${number1} + ${number2} = ${sum}`;

console.log(result)

function add(x, y, z){
    // if(z === undefined)
    //     z = 0;
    
    return x + y + (z == undefined ? 0: z);
}

console.log(add(1, 2, 3));
console.log(add(1, 2));

let num = 7;
console.log(num%2==0 ? 'true' : 'false');

for(let index = 0; index < 7; index++){
    console.log(index);
}

// const colours = ['red', 'yellow', 'green', 'blue'];
// for (const colour of colours) {
//     console.log(colour);
// }

const car = {make:'Ford', model:'Mustang'};
for(const prop in car){
    console.log(`${prop}: ${car[prop]}`)
}

console.log(car.make);
console.log(car['make']);