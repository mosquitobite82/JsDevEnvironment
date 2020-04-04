import 'mocha';
import {expect, assert} from 'chai';
import {Left, Right} from './choice';

const addBang = (str) => {return str + "!";};
const errorMessage = "Error Message";

describe('Left', () => {
    describe('.map', () => {
        it('should return a Left with a value being NOT a result of the provided function', () => {
            const a = Left(errorMessage);
            assert.strictEqual(a.map(addBang).map(addBang).val, errorMessage);
        });
    });
});

describe('Right', () => {
    describe('.map', () => {
        it('should return a Right with a value being a result of the provided function', () => {
            const a = Right("Foo");
            assert.strictEqual(a.map(addBang).map(addBang).val, "Foo!!");
        });
    });
});