/**
 * Created by FoXteR on 14.07.2014.
 */
function Print() {
    for(var i = 0; i < arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}

function Sum(a,b,index,array) {
    console.log(a,b,index,array[index]);
    return a + b;
}

function Inc(value) {
    return value + 1;
}

function TestForFilter(value){
    return value % 2;
}

function Condition (value) {
    return value < 10;
}

function Sum1(a,b) {
    return a+b;
}

Funct = function(state){
    var mas = [];
    mas[0] = 'value';
    mas[1] = null;
    return mas;
};

var partialApplication = PartialApplication(Print, 2);
console.log("PARTIAL APPLICATION:");
partialApplication(8,7);

var curry = Curry(Print);
console.log("CURRY:");
curry(1,2,3);

console.log("LINEAR FOLD:");
LinearFold([1,2,3], Sum, 0);

console.log("UNFOLD:");
console.log(Unfold(Funct, true));

console.log("MAP:");
var mapResult = Map(Inc, [1,2,3,4,5,6]);
console.log(mapResult);

console.log("Filter(print odd numbers):");
var filterResult = Filter(TestForFilter,[1,2,3,4,5]);
console.log(filterResult);

console.log("Average of even numbers:");
console.log(Average([1,2,3,4,5,6]));

console.log("SUM OF RANDOM NUMBERS:");
console.log(SumOfRandomNumbers());

console.log("FIRST:");
console.log(First([11,12,5,10,6],Condition));

console.log("LAZY EVALUATION:");
LazyEvaluation(Sum, 1,2,3,[1,2,3,4])();

console.log("MEMOIZATION:");
console.log(Memoization(Sum1)(2,3));