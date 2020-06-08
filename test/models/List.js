var expect = require('chai').expect;
import List from '../../src/js/models/List.js';

describe('#addItem()', function () {
    context('test if item is added to the array', function () {
        it('should add an item to the array', function () {
            let list = new List();
            list.addItem(1, 'a', 'b');

            expect(list.items.length).to.equal(1);
        })
    })
})


describe('#deleteItem()', function () {
    context('test if item is deleted in the array', function () {
        it('should delete an item in the array', function () {
            let list = new List();
            list.addItem(1, 'a', 'b');
            list.deleteItem(1)

            expect(list.items.length).to.equal(0);
        })
    })
})

describe('#updateCount()', function () {
    context('test if count is updated in the array', function () {
        it('should update the count of an item in the array', function () {
            let list = new List();
            list.addItem(1, 'a', 'b');
            let id = list.items[0].id;
            list.updateCount(id, 3)

            expect(list.items[0].count).to.equal(3);
        })
    })
})