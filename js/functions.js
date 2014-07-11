/**
 * Created by Student 2 on 7/11/2014.
 */

partialAny(add(1,2,3,4,5,6), 8 , 6);
function partialAny(fn /*args*/) {
    var args = Array.prototype.slice.call(arguments,1);

    return function() {

        fn.apply(this, args.concat(Array.prototype.slice.call(args)));
    }
}

function add(){
    var result = 0;
    for(var i = 0,len = arguments.length; i < len; i++)
    {
        result += +arguments[i];
    }
    console.log(result);
}

