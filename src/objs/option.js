export const Some = function(v){
    const containerType = Some.name;
    const map = function(func){
        return Some(func(val));
    };
    const val = v;
    return Object.freeze({
        containerType,
        map,
        val
    });
};

export const None = function(v){
    const containerType = None.name;
    const map = function(func){
        return noneObj;
    };
    const val = null;
    const noneObj = Object.freeze({
        containerType,
        map,
        val
    });
    return noneObj;
};
