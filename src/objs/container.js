export let _Container = function(val){
    val = val;
};
export let Container = function(val){
    return new _Container(val);
};

_Container.prototype.map = function(func){
    return Container(func(this.val));
}

