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

        it('Should return an object: {number: 3} when ?number=3 is passed into it', function (){
            assert.deepEqual(parse('number=3'), {
                number:3
            });  
        });
        
              
    });

    describe('The stringify function', function(){
        it('Should return a properly formatted query string when given an object query parameters', function() {
            const object = {
                by: 'chris-r', 
                sort: "popular", 
                category: 'nodejs'
            };
            const actual = stringify(object);
            const expectation = 'by=chris-r&sort=popular&category=nodejs';
            
            assert.equal(actual, expectation);
        });

        it('Should return a simple query string from a single key value pair', function () {

            assert.deepEqual(stringify( {test: true}), 'test=true' );
        });

        it('Eliminates all undefined and null values', ()=> {
            const queryObject = {
                by: 'chris-r',
                popular: undefined,
                unanswered: null
            };
            
            assert.equal(stringify(queryObject), 'by=chris-r');
        });  

    });

});

