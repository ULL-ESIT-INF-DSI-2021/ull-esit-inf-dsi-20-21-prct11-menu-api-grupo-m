"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = exports.typeIngredient = void 0;
var typeIngredient;
(function (typeIngredient) {
    typeIngredient[typeIngredient["group1"] = 0] = "group1";
    typeIngredient[typeIngredient["group2"] = 1] = "group2";
    typeIngredient[typeIngredient["group3"] = 2] = "group3";
    typeIngredient[typeIngredient["group4"] = 3] = "group4";
    typeIngredient[typeIngredient["group5"] = 4] = "group5";
})(typeIngredient = exports.typeIngredient || (exports.typeIngredient = {}));
;
// group1: meat, fish, eggs, tofu, dry fruits, seeds and pulse
// group2: vegetables and leafy vegetable
// group3: milk
// group4: cereals
// group5: fruit
/**
 * Class that points out the characteristics of each ingredient
 */
class Ingredient {
    /**
     * Constructor of the class
     * @param name Name of the ingredient
     * @param origin Place where the ingredient is from
     * @param group Ingredient type/group
     * @param lipids Organic compounds that are fatty acids or
     * their derivatives
     * @param carbohydrates Sugars, starch, and cellulose
     * @param proteins Large molecules composed of one or
     * more long chains of amino acids
     * @param kcalories Kilocalories of the ingredient for 100g
     * @param price Ingredient cost for kg
     */
    constructor(name, origin, group, lipids, carbohydrates, proteins, kcalories, price) {
        this.name = name;
        this.origin = origin;
        this.group = group;
        this.lipids = lipids;
        this.carbohydrates = carbohydrates;
        this.proteins = proteins;
        this.kcalories = kcalories;
        this.price = price;
    }
    /**
    * Method that returns the ingredient group
    */
    getGroup() {
        return this.group;
    }
    /**
    * Method that returns the price of the ingredient (kg)
    */
    getPrice() {
        return this.price;
    }
    /**
    * Method that prints the ingredient name
    */
    print() {
        console.log(this.name);
    }
    /**
    * Method that prints all the characteristics of the ingredient
    */
    printIngredient() {
        console.log("\nIngrediente: " + this.name +
            "\n\tOrigen:" + this.origin +
            "\n\tGrupo:" + this.group +
            "\nValor Nutricional:" +
            "\n\tKilocalorías:" + this.kcalories +
            "\n\tGrasas:" + this.lipids +
            "\n\tHidratos de Carbono:" + this.carbohydrates +
            "\n\tProteínas:" + this.proteins +
            "\nPrecio: " + this.price);
    }
}
exports.Ingredient = Ingredient;
//# sourceMappingURL=IngredientClass.js.map