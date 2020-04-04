import {isUndefined} from "../funcs/falsy";

export let Container = function(v){
    const containerType = Container.name;
    const map = function(func){
        return Container(func(val));
    };
    const val = v;
    
    return Object.freeze({
        containerType,
        map,
        val
    });
};
