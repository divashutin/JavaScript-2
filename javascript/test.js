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

var partialApplication = PartialApplication(Print, 2);
console.log("PARTIAL APPLICATION:");
partialApplication(8,7);

var curry = Curry(Print);
console.log("CURRY:");
curry(1,2,3,4,5);

console.log("LINEAR FOLD:");
LinearFold([1,2,3], Sum, 0);

console.log("UNFOLD");


console.log("MAP:");
var mapResult = Map(Inc, [1,2,3,4,5,6]);
console.log(mapResult);

console.log("Filter(print odd numbers):");
var filterResult = Filter(TestForFilter,[1,2,3,4,5]);
console.log(filterResult);

console.log("MAP:");


console.log("MAP:");


console.log("MAP:");


console.log("MAP:");