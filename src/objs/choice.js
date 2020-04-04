export const _Left = function(message){
    this.val = message;
};
export const Left = function (message){
    return new _Left(message);
};

export const _Right = function(val){
    this.val = val;
};
export const Right = function (val){
    return new _Right(val);
};

_Left.prototype.map = function(func){
    return Left(this.val);
};
_Right.prototype.map = function(func){
    return Right(func(this.val));
};

