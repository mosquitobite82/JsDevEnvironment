import {expect} from 'chai';
import jsdom from'jsdom';
import fs from 'fs';

describe('Our First Test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

/* Async actions with callbacks, needs a 'done' param as below */
describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done(); // Async. Report results after action is done
      window.close();
    });
  });
});

