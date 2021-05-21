import {IngredientInterface} from '../../models/Ingredient';

export function setPrice(ingredientList: IngredientInterface[], quantity: any[]): number {
  let dishPrice: number = 0;
  for (let i: number = 0; i < ingredientList.length; i++) {
    const ingredientPrice =
    (ingredientList[i].price * quantity[i]) / 1000; // Regla de 3
    dishPrice = dishPrice + ingredientPrice;
  }
  return dishPrice;
}