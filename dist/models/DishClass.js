"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = exports.typeDish = void 0;
const IngredientClass_1 = require("./IngredientClass");
var typeDish;
(function (typeDish) {
    typeDish[typeDish["starter"] = 0] = "starter";
    typeDish[typeDish["first"] = 1] = "first";
    typeDish[typeDish["second"] = 2] = "second";
    typeDish[typeDish["dessert"] = 3] = "dessert";
})(typeDish = exports.typeDish || (exports.typeDish = {}));
;
/**
 * Class that points out the characteristics of each dish
 */
class Dish {
    /**
     * Constructor of the class
     * @param nameDish Name/identifier of the dish
     * @param ingredientList Dish ingredients
     * @param nutritionalValue Composition of the dish
     * @param dishPrice Total price in order of ingredients,
     * price and quantity
     */
    constructor(nameDish, ingredientList, nutritionalValue, type) {
        this.nameDish = nameDish;
        this.ingredientList = ingredientList;
        this.nutritionalValue = nutritionalValue;
        this.type = type;
        this.predominantGroup = IngredientClass_1.typeIngredient.group1;
        this.dishPrice = 0;
        this.setPredominantGroup();
        this.setPrice();
    }
    /**
     * Method that returns the name of the current dish
     * @return Name of the dish
     */
    getName() {
        return this.nameDish;
    }
    /**
     * Method that returns the listo of ingredients of the current dish
     * @return List of ingredients that conforms the dish
     */
    getIngredientList() {
        return this.ingredientList;
    }
    /**
   * Method that returns the type of dish we are talking about
   * @return Dish type
   */
    getType() {
        return this.type;
    }
    /**
     * Method that states the predominant group of ingredients for each dish
     */
    setPredominantGroup() {
        const countGroup1 = [0, 'group1'];
        const countGroup2 = [0, 'group2'];
        const countGroup3 = [0, 'group3'];
        const countGroup4 = [0, 'group4'];
        const countGroup5 = [0, 'group5'];
        this.ingredientList.forEach((ingredient) => {
            const i = ingredient[0].getGroup();
            switch (i) {
                case IngredientClass_1.typeIngredient.group1:
                    countGroup1[0]++;
                    break;
                case IngredientClass_1.typeIngredient.group2:
                    countGroup2[0]++;
                    break;
                case IngredientClass_1.typeIngredient.group3:
                    countGroup3[0]++;
                    break;
                case IngredientClass_1.typeIngredient.group4:
                    countGroup4[0]++;
                    break;
                case IngredientClass_1.typeIngredient.group5:
                    countGroup5[0]++;
                    break;
            }
        });
        const vec = [countGroup1, countGroup2, countGroup3, countGroup4,
            countGroup5];
        vec.sort(function (a, b) {
            return a[0] - b[0];
        });
        switch (vec[vec.length - 1][1]) {
            case 'group1':
                this.predominantGroup = IngredientClass_1.typeIngredient.group1;
                break;
            case 'group2':
                this.predominantGroup = IngredientClass_1.typeIngredient.group2;
                break;
            case 'group3':
                this.predominantGroup = IngredientClass_1.typeIngredient.group3;
                break;
            case 'group4':
                this.predominantGroup = IngredientClass_1.typeIngredient.group4;
                break;
            case 'group5':
                this.predominantGroup = IngredientClass_1.typeIngredient.group5;
                break;
        }
    }
    /**
     * Method that returns the predominant group of ingredients for each dish
     * @return Predominant group of a dish (variable predominantGroup)
     */
    getPredominantGroup() {
        return this.predominantGroup;
    }
    /**
     * Methos that sets the price of a dish
     */
    setPrice() {
        this.dishPrice = 0;
        this.ingredientList.forEach((ingredient) => {
            const ingredientPrice = (ingredient[0].getPrice() * ingredient[1]) / 1000; // Regla de 3
            this.dishPrice = this.dishPrice + ingredientPrice;
        });
    }
    /**
     * Method that returns the price of a dish
     * @return Price of the dish (variable dishPrice)
     */
    getPrice() {
        return this.dishPrice;
    }
    /**
     * Method that returns the nutritional value of the current dish
     * @return List of ingredients that form the dish (variable ingredientList)
     */
    getNutritionalValue() {
        return this.nutritionalValue;
    }
    /**
     * Method that prints/shows the list of ingredientes of the current dish
     * @return List of ingredients that form the dish (variable ingredientList)
     */
    print() {
        console.log("\n\t" + this.nameDish + ": ");
        this.ingredientList.forEach((ingredient, i) => {
            if (i + 1 == this.ingredientList.length) {
                ingredient[0].print();
                console.log(".");
            }
            else {
                ingredient[0].print();
                console.log(", ");
            }
        });
    }
}
exports.Dish = Dish;
//# sourceMappingURL=DishClass.js.map