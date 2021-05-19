"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const DishClass_1 = require("./DishClass");
/**
 * Class that states the elements that form a menu
 * @param nameMenu Menu name/identifier
 * @param priceMenu Menu price
 * @param dishesMenu Menu dishes
 * @param nutriValue Menu nutritional value
 * @param typeMenu Menu type
**/
class Menu {
    /**
    * Constructor of the class
    * @param name Name/identifier of the dish
    * @param dish1 First dish
    * @param dish2 Second dish
    * @param dish3 Third dish
    * @param restDish All the following possible dishes
    */
    constructor(name, dish1, dish2, dish3, ...restDish) {
        this.nameMenu = '';
        this.priceMenu = 0;
        this.nutriValue = 0;
        this.typeMenu = new Set();
        this.nameMenu = name;
        this.dishesMenu = restDish;
        this.dishesMenu.push(dish1);
        this.dishesMenu.push(dish2);
        this.dishesMenu.push(dish3);
        let countStar = 0;
        let countFirst = 0;
        let countSeco = 0;
        let countDes = 0;
        let countGlo = 0;
        this.dishesMenu.forEach((dish) => {
            switch (dish.getType()) {
                case DishClass_1.typeDish.starter:
                    countStar++;
                    break;
                case DishClass_1.typeDish.first:
                    countFirst++;
                    break;
                case DishClass_1.typeDish.second:
                    countSeco++;
                    break;
                case DishClass_1.typeDish.dessert:
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
    getName() {
        return this.nameMenu;
    }
    /**
    * Method that returns the dishes of the menu
    * @return Dishes of the current menu
    */
    getDishes() {
        return this.dishesMenu;
    }
    /**
    * Method that calculates the total amount or price of the menu from the
    prices of each dish
    */
    calculateTotalMoney() {
        this.dishesMenu.forEach((dish) => {
            this.priceMenu += dish.getPrice();
        });
    }
    /**
    * Method that returns the total amount or price of the menu calculated
    from the prices of each dish
    * @return Menu price
    */
    getTotalMoney() {
        return this.priceMenu;
    }
    /**
    * Method that calculates the nutritional value of the menu
    */
    calculateNutriValue() {
        this.dishesMenu.forEach((dish) => {
            this.nutriValue += dish.getNutritionalValue();
        });
    }
    /**
    * Method that returns the nutritional value of the menu
    * @return Menu nutritional value
    */
    getNutriValue() {
        return this.nutriValue;
    }
    /**
    * Method that sets the type of the most used cathegory in the menu
    */
    setTypeMenu() {
        this.dishesMenu.forEach((dish) => {
            this.typeMenu.add(dish.getPredominantGroup());
        });
    }
    /**
    * Method that gets the type of the most used cathegory in the menu
    * @return Menu type
    */
    getTypeMenu() {
        return this.typeMenu;
    }
    /**
    * Method that prints the menu (the dishes)
    */
    printMenu() {
        console.log("\nMenú " + this.nameMenu + ":");
        this.dishesMenu.forEach((dishes) => {
            dishes.print();
        });
        console.log("".padEnd(20, "-"));
    }
    /**
  * Method that adds a dish to a menu
  */
    addDish(newDish) {
        this.dishesMenu.push(newDish);
    }
}
exports.Menu = Menu;
//# sourceMappingURL=MenuClass.js.map