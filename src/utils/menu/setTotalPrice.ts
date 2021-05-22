import {DishInterface} from '../../models/Dish';

export function setTotalPrice(dishList: DishInterface[]): number {
  let totalPrice: number = 0;
  for (let i: number = 0; i < dishList.length; i++) {
    totalPrice += dishList[i].price;
  }
  return totalPrice;
}