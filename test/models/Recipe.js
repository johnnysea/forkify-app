import Recipe from '../../src/js/models/Recipe.js';
var expect = require('chai').expect;


describe('#getRecipe()', function () {
    context('test if https request works', function () {
        it('should create additional properties', async function () {
            let recipe = new Recipe(47746);
            await recipe.getRecipe();

            expect(recipe).to.eql({
                id: 47746,
                title: 'Best Pizza Dough Ever',
                author: '101 Cookbooks',
                img: 'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
                url: 'http://www.101cookbooks.com/archives/001199.html',
                ingredients: [
                    '4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled',
                    '1 3/4 (.44 ounce) teaspoons salt',
                    '1 teaspoon (.11 ounce) instant yeast',
                    '1/4 cup (2 ounces) olive oil (optional)',
                    '1 3/4 cups (14 ounces) water, ice cold (40F)',
                    'Semolina flour OR cornmeal for dusting'
                ]
            })
        })
    })
})

describe('#calcTime()', function () {
    context('test if it correctly calculates the time', function () {
        it('should equal to 30', async function () {
            let recipe = new Recipe(47746);
            await recipe.getRecipe();
            recipe.calcTime();

            expect(recipe.time).to.equal(30);
        })
    })
})

describe('#calcServings()', function () {
    context('test if it sets the default servings', function () {
        it('should equal to 4', async function () {
            let recipe = new Recipe(47746);
            await recipe.getRecipe();
            recipe.calcServings();

            expect(recipe.servings).to.equal(4);
        })
    })
})

describe('#updateServings()', function () {
    context('test if it updates the servings', function () {
        it('should equal to 5', async function () {
            let recipe = new Recipe(47746);
            await recipe.getRecipe();
            recipe.parseIngredients();
            recipe.calcServings();
            recipe.updateServings('inc');

            expect(recipe.servings).to.equal(5);
        });

        it('should equal to 3', async function () {
            let recipe = new Recipe(47746);
            await recipe.getRecipe();
            recipe.parseIngredients();
            recipe.calcServings();
            recipe.updateServings('dec');

            expect(recipe.servings).to.equal(3);
        })
    })
})