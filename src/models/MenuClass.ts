import {typeDish, Dish} from './Dish';
import {typeIngredient} from './Ingredient';

/**
 * Class that states the elements that form a menu
 * @param nameMenu Menu name/identifier
 * @param priceMenu Menu price
 * @param dishesMenu Menu dishes
 * @param nutriValue Menu nutritional value
 * @param typeMenu Menu type
**/
export class Menu {
  private nameMenu: string = '';
  private priceMenu: number = 0;
  private dishesMenu: Dish[];
  private nutriValue: number = 0;
  private typeMenu: Set<typeIngredient> = new Set();

  /**
  * Constructor of the class
  * @param name Name/identifier of the dish
  * @param dish1 First dish
  * @param dish2 Second dish
  * @param dish3 Third dish
  * @param restDish All the following possible dishes
  */
  constructor(name:string, dish1: Dish, dish2: Dish, dish3: Dish,
    ...restDish: Dish[]) {
      this.nameMenu = name;
      this.dishesMenu = restDish;
      this.dishesMenu.push(dish1);
      this.dishesMenu.push(dish2);
      this.dishesMenu.push(dish3);

      let countStar: number = 0;
      let countFirst: number = 0;
      let countSeco: number = 0;
      let countDes: number = 0;
      let countGlo: number = 0;

      this.dishesMenu.forEach((dish) => {
        switch (dish.getType()) {
          case typeDish.starter:
            countStar++;
            break;
          case typeDish.first:
            countFirst++;
            break;
          case typeDish.second:
            countSeco++;
            break;
          case typeDish.dessert:
            countDes++;
            break;
        }
      });
      if (countStar >= 1) {
        countGlo++;
      }
      if (countFirst >= 1) {
        countGlo++;
      }
      if (countSeco >= 1) {
        countGlo++;
      }
      if (countDes >= 1) {
        countGlo++;
      }
      if (countGlo < 3) {
        console.log('WARNING: El menu debe tener un plato de cada tipo o,' +
        'de al menos tres');
      }
      this.calculateTotalMoney();
      this.calculateNutriValue();
      this.setTypeMenu();
  }

  /**
 * Method that returns the name/identifier of the menu
 * @return Name/identifier
 */
public getName(): string {
    return this.nameMenu;
  }

/**
* Method that returns the dishes of the menu
* @return Dishes of the current menu
*/
public getDishes(): Dish[] {
    return this.dishesMenu;
  }

/**
* Method that calculates the total amount or price of the menu from the
prices of each dish
*/
public calculateTotalMoney() {
    this.dishesMenu.forEach((dish) => {
      this.priceMenu += dish.getPrice();
    });
  }

/**
* Method that returns the total amount or price of the menu calculated
from the prices of each dish
* @return Menu price
*/
public getTotalMoney(): number {
    return this.priceMenu;
  }

/**
* Method that calculates the nutritional value of the menu
*/
public calculateNutriValue() {
    this.dishesMenu.forEach((dish) => {
      this.nutriValue += dish.getNutritionalValue();
    });
  }

/**
* Method that returns the nutritional value of the menu
* @return Menu nutritional value
*/
public getNutriValue(): number {
    return this.nutriValue;
  }

/**
* Method that sets the type of the most used cathegory in the menu
*/
public setTypeMenu() {
    this.dishesMenu.forEach((dish) => {
      this.typeMenu.add(dish.getPredominantGroup());
    });
  }

/**
* Method that gets the type of the most used cathegory in the menu
* @return Menu type
*/
public getTypeMenu(): Set<typeIngredient> {
    return this.typeMenu;
  }

/**
* Method that prints the menu (the dishes)
*/
public printMenu() {
    console.log("\nMenú " + this.nameMenu + ":");
    this.dishesMenu.forEach((dishes) => {
      dishes.print();
    });
    console.log("".padEnd(20, "-"));
  }

  /**
* Method that adds a dish to a menu
*/
public addDish(newDish: Dish) {
    this.dishesMenu.push(newDish);
  }
}
