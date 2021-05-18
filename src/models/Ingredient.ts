import {Document, Schema, model} from 'mongoose';

interface IngredientInterface extends Document {
    name: string,
    origin: string,
    group: 'group1' | 'group2' | 'group3' | 'group4' | 'group5',
    lipids: number,
    carbohydrates: number,
    proteins: number,
    kcalories: number,
    price: number
}

const IngredientSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Z]/)) {
              throw new Error('Note title must start with a capital letter');
            }
            else if ((!value.match(/[A-Za-z]/) || (!value.match(/\s/)) {
                throw new Error('Note title must have only letters or spaces.');
            }

            !value.match(/^[A-Z]/)
            !validator.isAlphanumeric(value)
    }
})
