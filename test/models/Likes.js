import Likes from '../../src/js/models/Likes';
var expect = require('chai').expect;
require('mock-local-storage');

global.window = {};
window.localStorage = global.localStorage;

describe('#addLike()', function () {
    afterEach(() => {
        localStorage.clear();
        // remove callback
        localStorage.itemInsertionCallback = null;
    });

    context('test with mock localStorage', function () {
        it('should add a Like object to the array', function () {
            let likes = new Likes();
            likes.addLike(1, 'a', 'b', 'c');
            const length = JSON.parse(localStorage.getItem('likes')).length;

            expect(length).to.equal(1);
        })
    })
})

describe('#deleteLike()', function () {
    afterEach(() => {
        localStorage.clear();
        // remove callback
        localStorage.itemInsertionCallback = null;
    });

    context('test with mock localStorage', function () {
        it('should delete a chosen Like object in the array', function () {
            let likes = new Likes();
            likes.addLike(1, 'a', 'b', 'c');
            likes.deleteLike(1);
            const length = JSON.parse(localStorage.getItem('likes')).length;

            expect(length).to.equal(0);
        })

        it('should not delete a Like object in the array', function () {
            let likes = new Likes();
            likes.addLike(1, 'a', 'b', 'c');
            likes.deleteLike(2);
            const length = JSON.parse(localStorage.getItem('likes')).length;

            expect(length).to.equal(1);
        })
    })

})

describe('#isLiked()', function () {
    context('test if an object is liked', function () {
        it('should return true', function () {
            let likes = new Likes();
            likes.addLike(1, 'a', 'b', 'c');

            expect(likes.isLiked(1)).to.be.true;
        })

        it('should return false', function () {
            let likes = new Likes();
            likes.addLike(1, 'a', 'b', 'c');

            expect(likes.isLiked(2)).to.be.false;
        })
    })
})

describe('#getNumLikes()', function () {
    context('test if it returns correct number of objects in the array', function () {
        it('should return 3', function () {
            let likes = new Likes();
            likes.addLike(1, 'a', 'b', 'c');
            likes.addLike(2, 'a', 'b', 'c');
            likes.addLike(3, 'a', 'b', 'c');

            expect(likes.getNumLikes()).to.equal(3);
        })

    })
})

describe('#readStorage()', function () {
    afterEach(() => {
        localStorage.clear();
        // remove callback
        localStorage.itemInsertionCallback = null;
    });

    context('test if Likes object syncs with localStorage', function () {
        it('should return 1', function () {
            let likes = new Likes();
            localStorage.setItem('likes', JSON.stringify([{ id: 1, title: 'a', author: 'b', img: 'c' }]));
            likes.readStorage();

            expect(likes.getNumLikes()).to.equal(1);
        })
    })
})