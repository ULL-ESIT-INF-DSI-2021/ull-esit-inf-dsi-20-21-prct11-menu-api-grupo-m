import {IngredientInterface} from '../../models/Ingredient';

export function setNutriValue(ingredientList: IngredientInterface[], quantity: any[]): number {
  let totalNutri: number = 0;
  ingredientList.forEach((ingredient, i) => {
    totalNutri += (ingredient.lipids + ingredient.carbohydrates + ingredient.proteins + ingredient.kcalories) * quantity[i];
  });
  return totalNutri;
}