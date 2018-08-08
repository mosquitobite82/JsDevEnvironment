// File isn't transpiled, use ES5

// Babel transpile before tests run
require('babel-register')();
// Disable Webpack features that mocha doesnt understand
require.extensions['.css'] = function() {};
