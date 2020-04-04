import {IO, runIO} from "./io";
import {map} from './map';
import {expect} from 'chai';

const welcomeTo = function(name){
    return "welcome: " + name;
};

describe('io', () => {
    const getEmail = IO(function getAddress(){ return "johannes@email.com"; });
    const msgIO = map(welcomeTo, getEmail);

    const log = console.log;
    const incr = (a) => a + 1;
    const double = (a) => a * 2;

    it('should blabla', () => {
        const result = runIO(msgIO);
        expect(result).to.be.below(10);
    });
});
