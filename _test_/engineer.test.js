const Engin = require('../lib/engineer');

describe ('engineer', () => {
    describe('Initialization', () => {
    it('it should return an objext containing a "job" property of Engineer', () => {
        const enginObj = new Engin('Bill', 11, 'Bill@gmail.com', 'githubEngineer');

        expect(enginObj.name).toEqual('Bill')
        expect(enginObj.id).toEqual('11')
        expect(enginObj.email).toEqual('Bill@gmail.com')
        expect(enginObj.github).toEqual('githubEgineer')

    })
})
});