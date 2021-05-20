import {Document, Schema, model} from 'mongoose';
import {IngredientInterface} from './Ingredient';

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
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
      unique: true,
      required: true,
    }
  ],
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