"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = exports.DishSchema = void 0;
const mongoose_1 = require("mongoose");
const Ingredient_1 = require("./Ingredient");
exports.DishSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (value) => {
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
        type: [[Ingredient_1.IngredientSchema, Number]],
        required: true,
    },
    predominantGroup: {
        type: String,
        trim: true,
        required: true,
        default: 'group1',
        enum: ['group1', 'group2', 'group3', 'group4', 'group5'],
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
exports.Dish = mongoose_1.model('Dish', exports.DishSchema);
//# sourceMappingURL=Dish.js.map