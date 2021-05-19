import { Document, Schema } from 'mongoose';
export interface IngredientInterface extends Document {
    name: string;
    origin: string;
    group: 'group1' | 'group2' | 'group3' | 'group4' | 'group5';
    lipids: number;
    carbohydrates: number;
    proteins: number;
    kcalories: number;
    price: number;
}
export declare const IngredientSchema: Schema<Document<any, any>, import("mongoose").Model<any, any, any>, undefined>;
export declare const Ingredient: import("mongoose").Model<IngredientInterface, {}, {}>;
