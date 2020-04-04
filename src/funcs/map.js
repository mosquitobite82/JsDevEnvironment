import {curry} from './curry';

export const map = curry(function map(func, obj){
    return obj.map(func);
});