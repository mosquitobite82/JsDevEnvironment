import 'mocha';
import {assert, expect} from 'chai';
import { Container, _Container } from "./container";

describe('Container', () => {
    it('should instantiate with or without new keyword', () => {
        var c = Container(1);
        assert.instanceOf(c, _Container);
    });
});

describe('Container.map', () => {
    let double = (x) => x * 2;

    it('should apply given function to value and wrap it in a container', () => {
        let c = Container(2);
        let result = c.map(double);
        expect(result.val).to.equal(4);
    });
});