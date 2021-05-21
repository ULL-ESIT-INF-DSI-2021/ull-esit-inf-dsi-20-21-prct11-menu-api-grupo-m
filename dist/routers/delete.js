"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRouter = void 0;
const express = __importStar(require("express"));
const Ingredient_1 = require("../models/Ingredient");
const Dish_1 = require("../models/Dish");
const Menu_1 = require("../models/Menu");
exports.deleteRouter = express.Router();
/**
 * Ingredients Delete Router
 */
exports.deleteRouter.delete('/ingredients', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }
    try {
        const ingredient = await Ingredient_1.Ingredient.findOneAndDelete({
            name: req.query.name.toString(),
        });
        if (!ingredient) {
            return res.status(404).send();
        }
        return res.send(ingredient);
    }
    catch (error) {
        return res.status(400).send();
    }
});
exports.deleteRouter.delete('/ingredients/:id', async (req, res) => {
    try {
        const ingredient = await Ingredient_1.Ingredient.findByIdAndDelete(req.params.id);
        if (!ingredient) {
            return res.status(404).send();
        }
        return res.send(ingredient);
    }
    catch (error) {
        return res.status(400).send();
    }
});
/**
 * Dishes Delete Router
 */
exports.deleteRouter.delete('/courses', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }
    try {
        const dish = await Dish_1.Dish.findOneAndDelete({
            name: req.query.name.toString(),
        });
        if (!dish) {
            return res.status(404).send();
        }
        return res.send(dish);
    }
    catch (error) {
        return res.status(400).send();
    }
});
exports.deleteRouter.delete('/courses/:id', async (req, res) => {
    try {
        const dish = await Dish_1.Dish.findByIdAndDelete(req.params.id);
        if (!dish) {
            return res.status(404).send();
        }
        return res.send(dish);
    }
    catch (error) {
        return res.status(400).send();
    }
});
/**
 * Menu Delete Router
 */
exports.deleteRouter.delete('/menus', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }
    try {
        const menu = await Menu_1.Menu.findOneAndDelete({
            name: req.query.name.toString(),
        });
        if (!menu) {
            return res.status(404).send();
        }
        return res.send(menu);
    }
    catch (error) {
        return res.status(400).send();
    }
});
exports.deleteRouter.delete('/menus/:id', async (req, res) => {
    try {
        const menu = await Menu_1.Menu.findByIdAndDelete(req.params.id);
        if (!menu) {
            return res.status(404).send();
        }
        return res.send(menu);
    }
    catch (error) {
        return res.status(400).send();
    }
});
//# sourceMappingURL=delete.js.map