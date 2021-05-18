import {Document, Schema, model} from 'mongoose';
import {IngredientSchema, IngredientInterface} from './Ingredient';

export interface DishInterface extends Document {
  name: string,
  type: 'starter' | 'first' | 'second' | 'dessert',
  ingredients: [IngredientInterface, number][],
  predominantGroup: 'group1' | 'group2' | 'group3' | 'group4' | 'group5',
  nutritionalValue: number,
  price: number,
}

export const DishSchema = new Schema({
  name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validate: (value: string) => {
          if (!value.match(/^[A-Z]/)) {
            throw new Error('Dish title must start with a capital letter');
          }
          else if ((!value.match(/[A-Za-z]/)) || (!value.match(/\s/))) {
              throw new Error('Dish title must have only letters or spaces.');
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
    type: [[IngredientSchema, Number]],
    required: true,
  },
  predominantGroup: {
    type: String,
    trim: true,
    required: true,
    default: 'group1',
    enum: ['group1', 'group2', 'group3', 'group4' ,'group5'],
  },
  nutritionalValue: {
    type: Number,
    required: true,
  },
  price: {
      type: Number,
      required: true,
  },
});

export const Dish = model<DishInterface>('Dish', DishSchema);