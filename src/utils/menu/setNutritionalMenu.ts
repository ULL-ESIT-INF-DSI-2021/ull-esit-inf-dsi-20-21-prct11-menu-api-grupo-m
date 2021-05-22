import {DishInterface} from '../../models/Dish';

export function setNutritionalMenu(dishList: DishInterface[]): number {
  let totalNutri: number = 0;
  dishList.forEach((dish) => {
    totalNutri += dish.nutritionalValue;
  });
  return totalNutri;
}