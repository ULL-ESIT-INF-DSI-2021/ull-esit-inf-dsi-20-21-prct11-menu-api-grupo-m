import {Document, Schema, model} from 'mongoose';

export interface IngredientInterface extends Document {
    name: string,
    origin: string,
    group: 'group1' | 'group2' | 'group3' | 'group4' | 'group5',
    lipids: number,
    carbohydrates: number,
    proteins: number,
    kcalories: number,
    price: number,
}

export const IngredientSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Z]/)) {
              throw new Error('Ingredient name must start with a capital letter');
            }
        },
    },
    origin: {
        type: String,
        required: true,
        trim: true,
    },
    group: {
        type: String,
        required: true,
        trim: true,
        default: 'group1',
        enum: ['group1', 'group2', 'group3', 'group4' ,'group5'],
    },
    lipids: {
        type: Number,
        required: true,
    },
    carbohydrates: {
        type: Number,
        required: true,
    },
    proteins: {
        type: Number,
        required: true,
    },
    kcalories: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

export const Ingredient = model<IngredientInterface>('Ingredient', IngredientSchema);
