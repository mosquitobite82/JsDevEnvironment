import 'mocha';
import {expect} from 'chai';
import { Container } from "./container";

describe('Container.map', () => {
    let double = (x) => x * 2;

    it('should apply given function to value and wrap it in a container', () => {
        let c = Container(2);
        let result = c.map(double);
        expect(result.val).to.equal(4);
    });
});