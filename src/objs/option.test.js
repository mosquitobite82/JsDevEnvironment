import 'mocha';
import {assert} from 'chai';
import {Some, None} from './option';

const double = (nr) => {return nr * 2;};

describe('Some', () => {
    describe('.map', () => {
        it('should return a Some with a value being the result of the provided function', () => {
            const a = Some(10);
            assert.strictEqual(a.map(double).map(double).val, 40);
        });
    });
});

describe('None', () => {
    describe('.map', () => {
        it('should return a None with null', () => {
            const a = None(4);
            assert.strictEqual(a.map(double).map(double).val, null);
        });
    });
});