import Search from '../../src/js/models/Search.js';
var expect = require('chai').expect;

describe('#getResults()', function () {
    context('it tests if https request works', function () {
        it('should create additional property result', async function () {
            let search = new Search('pizza');
            await search.getResults();

            expect(search.result).not.be.undefined;
        })
    })
})