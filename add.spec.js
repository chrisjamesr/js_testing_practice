// Simple testing library example
const {add} = require('./index');
const {test, assert} = require('./lib');

test('the add funciton adds two numbers', function() {
    const actual = add(3,4);
    const expected = 9;
    assert.equal(actual, expected);
})