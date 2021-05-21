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
exports.getRouter = void 0;
const express = __importStar(require("express"));
const Ingredient_1 = require("../models/Ingredient");
const Dish_1 = require("../models/Dish");
const Menu_1 = require("../models/Menu");
exports.getRouter = express.Router();
/**
 * Ingredients Get Router
 */
exports.getRouter.get('/ingredients', async (req, res) => {
    const filter = req.query.name ? { name: req.query.name.toString() } : {};
    try {
        const ingredients = await Ingredient_1.Ingredient.find(filter);
        if (ingredients.length !== 0) {
            return res.send(ingredients);
        }
        return res.status(404).send();
    }
    catch (error) {
        return res.status(500).send();
    }
});
exports.getRouter.get('/ingredients/:id', async (req, res) => {
    try {
        const ingredient = await Ingredient_1.Ingredient.findById(req.params.id);
        if (!ingredient) {
            return res.status(404).send();
        }
        return res.send(ingredient);
    }
    catch (error) {
        return res.status(500).send(0);
    }
});
/**
 * Dishes Get Router
 */
exports.getRouter.get('/courses', async (req, res) => {
    const filter = req.query.name ? { name: req.query.name.toString() } : {};
    try {
        const dishes = await Dish_1.Dish.find(filter);
        if (dishes.length !== 0) {
            return res.send(dishes);
        }
        return res.status(404).send();
    }
    catch (error) {
        return res.status(500).send();
    }
});
exports.getRouter.get('/courses/:id', async (req, res) => {
    try {
        const dishes = await Dish_1.Dish.findById(req.params.id);
        if (!dishes) {
            return res.status(404).send();
        }
        return res.send(dishes);
    }
    catch (error) {
        return res.status(500).send(0);
    }
});
/**
 * Menus Get Router
 */
exports.getRouter.get('/menus', async (req, res) => {
    const filter = req.query.name ? { name: req.query.name.toString() } : {};
    try {
        const menu = await Menu_1.Menu.find(filter);
        if (menu.length !== 0) {
            return res.send(menu);
        }
        return res.status(404).send();
    }
    catch (error) {
        return res.status(500).send();
    }
});
exports.getRouter.get('/menus/:id', async (req, res) => {
    try {
        const menu = await Menu_1.Menu.findById(req.params.id);
        if (!menu) {
            return res.status(404).send();
        }
        return res.send(menu);
    }
    catch (error) {
        return res.status(500).send(0);
    }
});
//# sourceMappingURL=get.js.map