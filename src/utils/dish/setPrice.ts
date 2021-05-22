import {IngredientInterface} from '../../models/Ingredient';

export function setPrice(ingredientList: IngredientInterface[], quantity: any[]): number {
  let dishPrice: number = 0;
  for (let i: number = 0; i < ingredientList.length; i++) {
    dishPrice += ingredientList[i].price * quantity[i]; // Regla de 3
  }
  return dishPrice;
}