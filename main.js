// A function that returns a function
function CreateAdder(){

    return function(value1,value2){

        return value1 + value2;

    };
};

let createAdderObj=CreateAdder();
let sum=createAdderObj(2,2);
console.log(sum);

    sum=createAdderObj(5,5);
    console.log(sum);


function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
};

let createCounterObj=createCounter();
    console.log(createCounterObj());
    console.log(createCounterObj());
    console.log(createCounterObj());