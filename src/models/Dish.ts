import {Document, Schema, model} from 'mongoose';
import {IngredientInterface, IngredientSchema} from './Ingredient';

export interface DishInterface extends Document {
  name: string,
  type: 'starter' | 'first' | 'second' | 'dessert',
  ingredients: IngredientInterface[],
  quantity: number[],
  predominantGroup: 'group1' | 'group2' | 'group3' | 'group4' | 'group5',
  nutritionalValue: number,
  price: number,
}

export const DishSchema = new Schema({
  name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: (value: string) => {
          if (!value.match(/^[A-Z]/)) {
            throw new Error('Dish title must start with a capital letter');
          }
      },
  },
  type: {
      type: String,
      trim: true,
      default: 'starter',
      required: true,
      enum: ['starter', 'first', 'second', 'dessert'],
  },
  ingredients: {
      type: [IngredientSchema],
      required: true,
  },
  quantity: [
    {
      type: Number,
      required: true,
    }
  ],
  predominantGroup: {
    type: String,
    trim: true,
    required: false,
    default: 'group1',
    enum: ['group1', 'group2', 'group3', 'group4' ,'group5'],
  },
  nutritionalValue: {
    type: Number,
    required: false,
  },
  price: {
      type: Number,
      required: false,
  },
});

export const Dish = model<DishInterface>('Dish', DishSchema);