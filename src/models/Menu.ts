import {Document, Schema, model} from 'mongoose';
import {DishInterface, DishSchema} from './Dish';

interface MenuInterface extends Document {
  name: string,
  price: number,
  dishes: DishInterface[],
  nutritionalValue: number,
  listGroup: ('group1' | 'group2' | 'group3' | 'group4' | 'group5')[],
}

const MenuSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
        if (!value.match(/^[A-Z]/)) {
          throw new Error('Menu title must start with a capital letter');
        }
        else if ((!value.match(/[A-Za-z]/)) || (!value.match(/\s/))) {
            throw new Error('Menu title must have only letters or spaces.');
        }
    },
  },
  price: {
    type: Number,
    required: true,
  },

  dishes: {
    type: [DishSchema],
    requiered: true,
  },

  nutritionalValue: {
    type: Number,
    required: true,
  },

  listGroup: {
    type: [String],
    required: true,
    enum: ['group1', 'group2', 'group3', 'group4' ,'group5'],
  },

});

export const Menu = model<MenuInterface>('Menu', MenuSchema);
