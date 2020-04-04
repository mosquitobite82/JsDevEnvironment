import {curry} from './curry';

export const compose = curry(
    function compose(fnB, fnA){
        return function composed(...args){
            return fnB(fnA.apply(null, args));
        };
    }
);