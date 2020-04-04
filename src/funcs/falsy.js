export const isUndefined = function(v){
    return typeof(v) === 'undefined';
};

export const isFalse = function(v){
    return v === false;
};

export const isNull = function(v){
    return v === null;
};

export const isFalsy = function(v){
    if(!v) return true;
    else return false;
};

export const isNonApplicable = function(v){
    return (isUndefined(v) || isNull(v) || isNaN(v));
};