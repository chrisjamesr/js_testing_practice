const assert = require('assert');
const { add } = require('./index');

// let arr = process.argv.slice(2,4).length ? process.argv.slice(2,4) : [5,6];
// let [num1, num2] = arr.map(x=> parseInt(x));
// console.log(num1, num2);
console.log("first test");


    let [num1, num2] = [5,6]

    const actual = add(num1, num2);
    const expected = 11;

    assert.equal(actual, expected);

console.log("end of first test");

console.log("Second test: Test add function throws an error if no arguments are passed");

    assert.throws( () => {
        add(1,2); 
    })

console.log("end of second test");


console.log("successfully run all tests");
// if (actual !== expectation) {
//     throw new Error('The add function did not return 11 when adding 5 and 6')
// } else return true