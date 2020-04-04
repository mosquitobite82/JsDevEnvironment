export const Left = function(message){
    const containerType = Left.name;
    const map = function(func){
        return Left(val);
    };
    const val = message;

    return Object.freeze({
        containerType,
        val,
        map
    });
};

export const Right = function (v){
    const containerType = Right.name;
    const map = function(func){
        return Right(func(v));
    };
    const val = v;

    return Object.freeze({
        containerType,
        map,
        val
    });
};
