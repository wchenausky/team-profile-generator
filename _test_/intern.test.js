const Int = require('../lib/intern');

describe ('intern', () => {
    describe('Initialization', () => {
    it('it should return an objext containing a "job" property of Intern', () => {
        const intObj = new Int('Gary', 12, 'Gary@gmail.com', 'UCF');

        expect(intObj.name).toEqual('Gary')
        expect(intbj.id).toEqual('12')
        expect(intObj.email).toEqual('Gary@gmail.com')
        expect(intObj.school).toEqual('UCF')

    })
})
});