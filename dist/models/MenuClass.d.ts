import { Dish } from './DishClass';
import { typeIngredient } from './IngredientClass';
/**
 * Class that states the elements that form a menu
 * @param nameMenu Menu name/identifier
 * @param priceMenu Menu price
 * @param dishesMenu Menu dishes
 * @param nutriValue Menu nutritional value
 * @param typeMenu Menu type
**/
export declare class Menu {
    private nameMenu;
    private priceMenu;
    private dishesMenu;
    private nutriValue;
    private typeMenu;
    /**
    * Constructor of the class
    * @param name Name/identifier of the dish
    * @param dish1 First dish
    * @param dish2 Second dish
    * @param dish3 Third dish
    * @param restDish All the following possible dishes
    */
    constructor(name: string, dish1: Dish, dish2: Dish, dish3: Dish, ...restDish: Dish[]);
    /**
   * Method that returns the name/identifier of the menu
   * @return Name/identifier
   */
    getName(): string;
    /**
    * Method that returns the dishes of the menu
    * @return Dishes of the current menu
    */
    getDishes(): Dish[];
    /**
    * Method that calculates the total amount or price of the menu from the
    prices of each dish
    */
    calculateTotalMoney(): void;
    /**
    * Method that returns the total amount or price of the menu calculated
    from the prices of each dish
    * @return Menu price
    */
    getTotalMoney(): number;
    /**
    * Method that calculates the nutritional value of the menu
    */
    calculateNutriValue(): void;
    /**
    * Method that returns the nutritional value of the menu
    * @return Menu nutritional value
    */
    getNutriValue(): number;
    /**
    * Method that sets the type of the most used cathegory in the menu
    */
    setTypeMenu(): void;
    /**
    * Method that gets the type of the most used cathegory in the menu
    * @return Menu type
    */
    getTypeMenu(): Set<typeIngredient>;
    /**
    * Method that prints the menu (the dishes)
    */
    printMenu(): void;
    /**
  * Method that adds a dish to a menu
  */
    addDish(newDish: Dish): void;
}
