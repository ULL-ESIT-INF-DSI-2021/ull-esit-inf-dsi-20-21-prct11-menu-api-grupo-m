"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = exports.IngredientSchema = void 0;
const mongoose_1 = require("mongoose");
exports.IngredientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (value) => {
            if (!value.match(/^[A-Z]/)) {
                throw new Error('Ingredient title must start with a capital letter');
            }
            else if ((!value.match(/[A-Za-z]/)) || (!value.match(/\s/))) {
                throw new Error('Ingredient title must have only letters or spaces.');
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
        trim: true,
        default: 'group1',
        enum: ['group1', 'group2', 'group3', 'group4', 'group5'],
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
exports.Ingredient = mongoose_1.model('Ingredient', exports.IngredientSchema);
//# sourceMappingURL=Ingredient.js.map