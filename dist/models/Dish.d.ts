import { Document, Schema } from 'mongoose';
import { IngredientInterface } from './Ingredient';
export interface DishInterface extends Document {
    name: string;
    type: 'starter' | 'first' | 'second' | 'dessert';
    ingredients: IngredientInterface[];
    quantity: number[];
    predominantGroup: 'group1' | 'group2' | 'group3' | 'group4' | 'group5';
    nutritionalValue: number;
    price: number;
}
export declare const DishSchema: Schema<Document<any, any>, import("mongoose").Model<any, any, any>, undefined>;
export declare const Dish: import("mongoose").Model<DishInterface, {}, {}>;
