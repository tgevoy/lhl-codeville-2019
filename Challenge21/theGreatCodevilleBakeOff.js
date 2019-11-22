/*
We need to complete a function called chooseRecipe(), which will receive three parameters:

An array of ingredients in stock at Bakery A
An array of ingredients in stock at Bakery B
An array of recipe objects. Each recipe has a name property(string) and an ingredient
property(array)

We are limiting our search to two ingredient recipes. We want to find a recipe that
utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

Note: In the tests there will always be a single correct answer, and you will NOT need
to consider special cases. For example, you do NOT need to worry about cases where one
bakery has BOTH the ingredients for a recipe.
*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let allBakeryIngredients = [...bakeryA, ...bakeryB];
  let recipeToMake = "";

  for (const recipe of recipes) {
    if (
      allBakeryIngredients.includes(recipe.ingredients[0]) &&
      allBakeryIngredients.includes(recipe.ingredients[1])
    ) {
      recipeToMake = recipe.name;
    }
  }

  return recipeToMake;
};
