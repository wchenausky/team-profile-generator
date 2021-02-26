const Man = require('../lib/manager');

describe ('Manager', () => {
    describe('Initialization', () => {
    it('it should return an objext containing a "job" property of Manager', () => {
        const manObj = new Man('Emily', 13, 'Emily@outlook.com', 'suite 8');

        expect(manObj.name).toEqual('Emily')
        expect(manObj.id).toEqual('13')
        expect(manObj.email).toEqual('Emily@outlook.com')
        expect(manObj.office).toEqual('suite 8')

    })
})
});