import {DishInterface} from '../../models/Dish';

export function setListGroup(dishList: DishInterface[]): string[] {
  let groupList: string[] = [];
  dishList.forEach((dish) => {
    groupList.push(dish.predominantGroup);
  });
  return groupList;
}