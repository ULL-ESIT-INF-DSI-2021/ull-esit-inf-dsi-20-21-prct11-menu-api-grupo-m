export declare enum typeIngredient {
    group1 = 0,
    group2 = 1,
    group3 = 2,
    group4 = 3,
    group5 = 4
}
export declare type MacroNutrient = [string, number];
/**
 * Class that points out the characteristics of each ingredient
 */
export declare class Ingredient {
    private name;
    private origin;
    private group;
    private lipids;
    private carbohydrates;
    private proteins;
    private kcalories;
    private price;
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
    constructor(name: string, origin: string, group: typeIngredient, lipids: number, carbohydrates: number, proteins: number, kcalories: number, price: number);
    /**
    * Method that returns the ingredient group
    */
    getGroup(): typeIngredient;
    /**
    * Method that returns the price of the ingredient (kg)
    */
    getPrice(): number;
    /**
    * Method that prints the ingredient name
    */
    print(): void;
    /**
    * Method that prints all the characteristics of the ingredient
    */
    printIngredient(): void;
}
