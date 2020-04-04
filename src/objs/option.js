const isNonApplicable = function(val){
    return (val === null ||
        typeof(val) === 'undefined' ||
        isNaN(val));
};

const optMap = function(func){
    if(isNonApplicable(this.val)) return None(null);
    else return Some(func(this.val));
};

export const _Option = function(val){
    this.val = val;
};
export const Option = function(val){
    return new _Option(val);
};

export const _Some = function(val){
    let base = new _Option(val);
    this.val = base.val;
};
export const Some = function(val){
    return new _Some(val);
};

export const _None = function(val){
    this.val = val;
};
export const None = function(val){
    return new _None(val);
};


_Option.prototype.map = optMap;
_Some.prototype.map = optMap;
_None.prototype.map = optMap;