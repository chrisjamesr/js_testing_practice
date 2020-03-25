const assert = {
    equal(actual, expected) {
        if(actual !== expected){
            throw new Error(`Expected ${actual} to equal ${expected}`)
        }
    }
}

const test = function(testTitle, callback){
    try{
        
        callback();
        console.log(`Passed: ${testTitle}`);

    } catch(error) {
        throw error;

        console.error(`Failed: ${testTitle}`);
    }
}

module.exports = {
    assert, test
}