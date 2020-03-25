const assert = require('assert');
const { findUserById, findUserByEmail } = require('../async');

describe('the async tests', () => {

    describe('the findUserById function', () => {
        it('should return found user data by id & checks promise is resolved correctly', () => {
            // returns promise -> checks for data errors and avoids unhandled promise rejection errors associated w/done function
            return findUserById(1).then(result => {
                
                assert.equal(result.user.name, 'chris');

            });
        });

        it('should return found user data by id', (done) => {
            // calls done on promise return 
            findUserById(1).then(result => {
            
                assert.equal(result.user.name, 'chris');

                done()

            });
        });

        it('should throw an error if user was not found', () => {
            return findUserById(1000).catch(error => {
            
                assert.equal(error.message, `User with id: 1000 was not found`)
       
            });
        });
    });

    describe('the findUserByEmail function', () => {
        it('should return found user data by email', () => {

            return findUserByEmail('zack@email.com').then(result => {
                
                assert.equal(result.user.name, 'zack');

            })
        })
    });
});