const assert = require('assert');
const { findUserById, findUserByEmail } = require('../async');

describe('the async tests', () => {

    describe('the findUserById function', () => {
        it.only('should return found user data by id & checks promise is resolved correctly', () => {
            // returns promise -> checks for data errors and avoids unhandled promise rejection errors associated w/done function
            return findUserById(1).then(result => {
                
                console.log('@@ ===> ', result);

                assert.equal(result.user.name, 'chris');

            });
        });

        it.only('should return found user data by id', (done) => {
            // calls done on promise return 
            findUserById(1).then(result => {
                
                console.log('@@ ===> done....', result);

                assert.equal(result.user.name, 'chris');

                done()

            });
        });
    });

    describe('the findUserByEmail function', () => {
        it.only('should return found user data by email', () => {

            return findUserByEmail('zack@email.com').then(result => {
                console.log('working...done...', result);
                assert.equal(result.user.name, 'zack');
            })
        })
    });
});