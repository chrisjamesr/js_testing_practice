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

        it('should throw an error if user was not found', async () => {
            try {

                await findUserById(1000)
                assert.fail('EXPECTED_ERROR');

            } catch (error) {

                assert.equal(error.message, `User with id: 1000 was not found`)
       
            }
        });

        it('should return user found by id', async () => {
            const result = await findUserById(1);
            assert.equal(result.user.name, 'chris');

        });
    });

    describe('the findUserByEmail function', () => {
        it('should return found user data by email', () => {

            return findUserByEmail('zack@email.com').then(result => {
                
                assert.equal(result.user.name, 'zack');

            })
        })
        
        it('should return user found by email', async () => {
        
            const result = await findUserByEmail('kelly@email.com');

            assert.equal(result.user.id, '6'); 
            assert.equal(result.user.email, 'kelly@email.com'); 
        
        });

        it('should return an error if no user found by email', async () => { 
            // const result = await findUserByEmail('steve@email.com').catch(error => {
            //     assert.equal(error.message, 'User with email: steve@email.com was not found'); 
            // });

            try {

                await findUserByEmail('steve@email.com')
                assert.fail('EXPECTED_ERROR');
            } catch (error) {

                assert.equal(error.message, 'User with email: steve@email.com was not found'); 

            }

        });
    });
});