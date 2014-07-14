/**
 * Created by FoXteR on 11.07.2014.
 */
function PartialApplication(Fun){
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var currentArguments = Array.prototype.slice.call(arguments);
        return Fun.apply( this, args.concat(currentArguments));
    }
};

function Curry(Fun) {
    var args = Array.prototype.slice.call(arguments, 1);

    return (function CurriedFunction(len){
        if(!arguments[0]) {
            var length = 0;
        }
        else {
            length = arguments[0];
        }
        return function() {
            args = args.concat(Array.prototype.slice.call(arguments));
            length += Array.prototype.slice.call(args).length;
            if(length < Fun.length){
                return CurriedFunction(length);
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
    var returnedResult = [];
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
        if (callback(initialArray[i])) {
            filteredArray.push(initialArray[i]);
        }
    }
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

function SumOfRandomNumbers(array){
    function callback(previous,current,index,array){
        return previous += current;
    }

    return LinearFold(array,callback,0);

};

function First(array, condition) {
    for(var i = 0, len = array.length; i < len; i++) {
        if(condition(array[i])) {
            return array[i];
        }
    }
};

function LazyEvaluation(Fun){
    return function() {
        return Fun.apply(this, Array.prototype.slice.call(arguments, 1));
    };
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