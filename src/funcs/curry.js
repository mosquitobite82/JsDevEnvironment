let copy = function(arr){
    return Array.prototype.slice.apply(arr);
};

export const curry = function curry(fn){
    return function curried(...argmnts) {
        if(fn.length > argmnts.length){
            return function partiallyApplied(...moreArgs){
                return curried.apply(null, 
                    copy(argmnts).concat(copy(moreArgs)));
            };
        }
        return fn.apply(null, argmnts);
    };
};