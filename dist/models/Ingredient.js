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