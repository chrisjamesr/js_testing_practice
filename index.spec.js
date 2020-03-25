const assert = require('assert');
const { add } = require('./index');

describe("The 'add' function tests", function(){

    it('Should return 11 for arguments 5 and 6', function (){
        
        const actual = add(5, 6);
        const expected = 11;

        assert.equal(actual, expected);

    })

    it('Should throw an error if not given arguments', function () {
        
        assert.throws( () => {
            add(1,2 ); 
        });

    })
})