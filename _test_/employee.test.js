const employee = require('../lib/employee')

describe('employee', () => {
    describe('Intialization', () => {
    it('it should return an object containing a "job" property of Employee', () => {
        const empObj = new employee('Bob', 10, 'Bob@yahoo.com');

        expect(empObj.name).toEqual('Bob')
        expect(empObj.id).toEqual('10')
        expect(empObj.email).toEqual('Bob@yahoo.com')
    })
})
});