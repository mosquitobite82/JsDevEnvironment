import './index.css'; // Not Mocha compatible, Will be disabled during test
import numeral from 'numeral';

const val = numeral(1000).format('$0,0.00');

console.log(`Wow! ${val} dollars!`); // eslint-disable-line no-console
