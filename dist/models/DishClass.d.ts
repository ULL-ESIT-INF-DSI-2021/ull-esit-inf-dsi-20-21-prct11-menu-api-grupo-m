import { Ingredient, typeIngredient } from './IngredientClass';
export declare enum typeDish {
    starter = 0,
    first = 1,
    second = 2,
    dessert = 3
}
/**
 * Class that points out the characteristics of each dish
 */
export declare class Dish {
    private nameDish;
    private ingredientList;
    private nutritionalValue;
    private type;
    private predominantGroup;
    private dishPrice;
    /**
     * Constructor of the class
     * @param nameDish Name/identifier of the dish
     * @param ingredientList Dish ingredients
     * @param nutritionalValue Composition of the dish
     * @param dishPrice Total price in order of ingredients,
     * price and quantity
     */
    constructor(nameDish: string, ingredientList: [Ingredient, number][], nutritionalValue: number, type: typeDish);
    /**
     * Method that returns the name of the current dish
     * @return Name of the dish
     */
    getName(): string;
    /**
     * Method that returns the listo of ingredients of the current dish
     * @return List of ingredients that conforms the dish
     */
    getIngredientList(): [Ingredient, number][];
    /**
   * Method that returns the type of dish we are talking about
   * @return Dish type
   */
    getType(): typeDish;
    /**
     * Method that states the predominant group of ingredients for each dish
     */
    setPredominantGroup(): void;
    /**
     * Method that returns the predominant group of ingredients for each dish
     * @return Predominant group of a dish (variable predominantGroup)
     */
    getPredominantGroup(): typeIngredient;
    /**
     * Methos that sets the price of a dish
     */
    setPrice(): void;
    /**
     * Method that returns the price of a dish
     * @return Price of the dish (variable dishPrice)
     */
    getPrice(): number;
    /**
     * Method that returns the nutritional value of the current dish
     * @return List of ingredients that form the dish (variable ingredientList)
     */
    getNutritionalValue(): number;
    /**
     * Method that prints/shows the list of ingredientes of the current dish
     * @return List of ingredients that form the dish (variable ingredientList)
     */
    print(): void;
}
