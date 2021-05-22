"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const mongoose_1 = require("mongoose");
const Dish_1 = require("./Dish");
const MenuSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
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
        type: [Dish_1.DishSchema],
        requiered: true,
    },
    nutritionalValue: {
        type: Number,
        required: true,
    },
    listGroup: {
        type: [String],
        required: true,
        enum: ['group1', 'group2', 'group3', 'group4', 'group5'],
    },
});
exports.Menu = mongoose_1.model('Menu', MenuSchema);
//# sourceMappingURL=Menu.js.map