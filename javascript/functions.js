/**
 * Created by FoXteR on 11.07.2014.
 */
function PartialApplication(Fun){
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var currentArguments = Array.prototype.slice.call(arguments);
        return Fun.apply( this, args.concat(currentArguments));
    }
}

function add() {
    for(var i = 0; i < arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}

var Part = PartialApplication(add, 2);
Part(1);

function curry(Fun) {
    var args = Array.prototype.slice.call(arguments, 1);
    var lenght = 0;
    return (function CurriedFunction(){
        return function() {
            args = args.concat(Array.prototype.slice.call(arguments));
            lenght += Array.prototype.slice.call(args).length;
            if(length < func.length){
                return curriedFunction();
            }
            return Fun.apply(this, args)
        }
    })();
};

function LinearFold(array,callback, initialValue){
        for(var i = 0, len = array.length; i < len; i++){
            initialValue = callback(initialValue, array[i], i, array);
        }
        return initialValue;
};

function Unfold(callback, initialValue) {
    var unfoldResult = [];
    while(initialValue) {
        returnedResult = callback(initialValue);
        unfoldResult = returnedResult[0];
        initialValue = returnedResult[1];
    }
    return unfoldResult;
};

function Map(Fun, initialArray)
{
    var mapResult = [];
    for (var i = 0, len = initialArray.length; i < len; i++) {
        mapResult[i] = Fun(initialArray[i]);
    }
    return mapResult;
}

function Filter(callback, initialArray) {
    var filteredArray = [];
    var intermediateResult;
    for (var i = 0, len = initialArray.length; i < len; i++) {
        intermediateResult = callback(initialArray[i]);
        if (intermediateResult) {
            filteredArray.push(intermediateResult);
        }
    }
    alert(filteredArray);
    return filteredArray;
}

function Average(initialArray) {

    function CheckEven(num) {
        if (num % 2){
            return false;
        }
        else {
            return num;
        }
    }

    function GetAverage(array) {
        var result = 0;
        for (var i = 0, len = array.length; i < len; i++) {
            result += array[i];
        }
        return result/len;
    }

    return GetAverage(Filter(CheckEven, initialArray));
};

function First(array, condition) {
    for(var i = 0, len = array.length; i < len; i++) {
        if(condition(array[i])) {
            return array[i];
        }
    }
};

function LazyEvaluation(Fun){
    LazyEvaluation = function () {
        return Array.prototype.slice.call(arguments);
    };
    return Fun.apply(this, arguments);

}

function Memoization(Fun) {
    var cache = {};
    var argument = arguments[0];

    if(!argument) {
        return;
    }
    return function() {
        if (argument in cache) {
            return cache[argument];
        }
        else {
            Array.prototype.slice.call(arguments[0]);
            cache[argument] = Fun.apply(this, Array.prototype.slice.call(arguments))
        }
    }
}