export enum typeIngredient { group1, group2, group3, group4, group5 };
export type MacroNutrient = [string, number];
// group1: meat, fish, eggs, tofu, dry fruits, seeds and pulse
// group2: vegetables and leafy vegetable
// group3: milk
// group4: cereals
// group5: fruit

/**
 * Class that points out the characteristics of each ingredient
 */
export class Ingredient {
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

  constructor(
        private name: string,
        private origin: string,
        private group: typeIngredient,
        private lipids: number,
        private carbohydrates: number,
        private proteins: number,
        private kcalories: number,
        private price: number,
    ) {}
    /**
    * Method that returns the ingredient group
    */
public getGroup() {
        return this.group;
    }
    /**
    * Method that returns the price of the ingredient (kg)
    */
public getPrice() {
        return this.price;
    }
    /**
    * Method that prints the ingredient name
    */
public print() {
        console.log(this.name);
    }
    /**
    * Method that prints all the characteristics of the ingredient
    */
public printIngredient() {
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
