"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = exports.DishSchema = void 0;
const mongoose_1 = require("mongoose");
const Ingredient_1 = require("./Ingredient");
exports.DishSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: (value) => {
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
    ingredients: [
        {
            type: [Ingredient_1.IngredientSchema],
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
        enum: ['group1', 'group2', 'group3', 'group4', 'group5'],
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
exports.Dish = mongoose_1.model('Dish', exports.DishSchema);
//# sourceMappingURL=Dish.js.map