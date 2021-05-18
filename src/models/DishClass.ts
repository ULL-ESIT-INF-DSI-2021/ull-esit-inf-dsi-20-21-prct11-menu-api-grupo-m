import {Ingredient, typeIngredient} from './Ingredient';
export enum typeDish {starter, first, second, dessert};
/**
 * Class that points out the characteristics of each dish
 */
export class Dish {
  private predominantGroup: typeIngredient;
  private dishPrice: number;
  /**
   * Constructor of the class
   * @param nameDish Name/identifier of the dish
   * @param ingredientList Dish ingredients
   * @param nutritionalValue Composition of the dish
   * @param dishPrice Total price in order of ingredients,
   * price and quantity
   */
  constructor(
    private nameDish: string,
    private ingredientList: [Ingredient, number][],
    private nutritionalValue: number,
    private type: typeDish,
  ) {
      this.predominantGroup = typeIngredient.group1;
      this.dishPrice = 0;
      this.setPredominantGroup();
      this.setPrice();
    }

/**
 * Method that returns the name of the current dish
 * @return Name of the dish
 */
 public getName() {
    return this.nameDish;
  }

/**
 * Method that returns the listo of ingredients of the current dish
 * @return List of ingredients that conforms the dish
 */
 public getIngredientList() {
    return this.ingredientList;
  }

  /**
 * Method that returns the type of dish we are talking about
 * @return Dish type
 */
 public getType() {
    return this.type;
  }

/**
 * Method that states the predominant group of ingredients for each dish
 */
 public setPredominantGroup() {
    const countGroup1: [number, string] = [0, 'group1'];
    const countGroup2: [number, string] = [0, 'group2'];
    const countGroup3: [number, string] = [0, 'group3'];
    const countGroup4: [number, string] = [0, 'group4'];
    const countGroup5: [number, string] = [0, 'group5'];
    this.ingredientList.forEach((ingredient) => {
      const i: number = ingredient[0].getGroup();
      switch (i) {
        case typeIngredient.group1:
          countGroup1[0]++;
          break;
        case typeIngredient.group2:
          countGroup2[0]++;
          break;
        case typeIngredient.group3:
          countGroup3[0]++;
          break;
        case typeIngredient.group4:
          countGroup4[0]++;
          break;
        case typeIngredient.group5:
          countGroup5[0]++;
          break;
      }
    });

    const vec = [countGroup1, countGroup2, countGroup3, countGroup4,
      countGroup5];
    vec.sort(function(a, b) {
      return a[0] - b[0];
    });
    switch (vec[vec.length - 1][1]) {
      case 'group1':
        this.predominantGroup = typeIngredient.group1;
        break;
      case 'group2':
        this.predominantGroup = typeIngredient.group2;
        break;
      case 'group3':
        this.predominantGroup = typeIngredient.group3;
        break;
      case 'group4':
        this.predominantGroup = typeIngredient.group4;
        break;
      case 'group5':
        this.predominantGroup = typeIngredient.group5;
        break;
    }
  }

/**
 * Method that returns the predominant group of ingredients for each dish
 * @return Predominant group of a dish (variable predominantGroup)
 */

 public getPredominantGroup() {
    return this.predominantGroup;
  }

/**
 * Methos that sets the price of a dish
 */
 public setPrice() {
    this.dishPrice = 0;
    this.ingredientList.forEach((ingredient) => {
      const ingredientPrice =
      (ingredient[0].getPrice() * ingredient[1]) / 1000; // Regla de 3
      this.dishPrice = this.dishPrice + ingredientPrice;
    });
  }

/**
 * Method that returns the price of a dish
 * @return Price of the dish (variable dishPrice)
 */
 public getPrice() {
    return this.dishPrice;
  }

/**
 * Method that returns the nutritional value of the current dish
 * @return List of ingredients that form the dish (variable ingredientList)
 */
 public getNutritionalValue() {
    return this.nutritionalValue;
  }

/**
 * Method that prints/shows the list of ingredientes of the current dish
 * @return List of ingredients that form the dish (variable ingredientList)
 */
 public print() {
    console.log("\n\t" + this.nameDish + ": ");
    this.ingredientList.forEach((ingredient, i) => {
      if (i+1 == this.ingredientList.length ) {
        ingredient[0].print();
        console.log(".");
      } else {
        ingredient[0].print();
        console.log(", ");
      }
    });
  }
}


