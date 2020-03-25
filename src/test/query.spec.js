const assert = require('assert');

const {parse, stringify} = require('../query');

describe('The query package', function() {
    
    describe('The parse function', function (){
        it('Should return an object of all query parameters when a query string is passed to it.', function() {

            const query = '?by=chris-r&popular=true&category=nodejs';
            
            const actual = parse(query);

            const expectation = {
                by: 'chris-r', 
                popular: "true", 
                category: 'nodejs'
            };
            
            assert.deepEqual(actual,expectation)
            
        });
    });

    describe('The stringify function', function(){
        it('Should return a properly formatted query string when given an object query parameters', function() {
            const object = {
                by: 'chris-r', 
                popular: "true", 
                category: 'nodejs'
            };
            const actual = stringify(object);
            const expectation = 'by=chris-r&popular=true&category=nodejs';
            
            assert.equal(actual, expectation);
        });
    });

});
