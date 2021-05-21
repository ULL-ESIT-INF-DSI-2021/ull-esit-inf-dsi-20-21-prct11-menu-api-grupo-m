import {IngredientInterface} from '../../models/Ingredient';

export function setNutriValue(ingredientList: IngredientInterface[]): number {
  let totalNutri: number = 0;
  ingredientList.forEach((ingredient) => {
    totalNutri += ingredient.lipids + ingredient.carbohydrates + ingredient.proteins + ingredient.kcalories;
  });
  return totalNutri;
}