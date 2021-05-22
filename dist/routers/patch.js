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
exports.patchRouter = void 0;
const express = __importStar(require("express"));
const Ingredient_1 = require("../models/Ingredient");
const Dish_1 = require("../models/Dish");
const Menu_1 = require("../models/Menu");
exports.patchRouter = express.Router();
/**
 * Patch Ingredient Router
 */
exports.patchRouter.patch('/ingredients', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }
    const allowedUpdates = ['name', 'origin', 'group',
        'lipids', 'carbohydrates', 'proteins',
        'kcalories', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted.',
        });
    }
    try {
        const ingredient = await Ingredient_1.Ingredient.findOneAndUpdate({
            name: req.query.name.toString(),
        }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!ingredient) {
            return res.status(404).send();
        }
        return res.send(ingredient);
    }
    catch (error) {
        return res.status(400).send(error);
    }
});
exports.patchRouter.patch('./ingredient:id', async (req, res) => {
    const allowedUpdates = ['name', 'origin', 'group',
        'lipids', 'carbohydrates', 'proteins',
        'kcalories', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted',
        });
    }
    try {
        const ingredient = await Ingredient_1.Ingredient.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
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
/**
 * Patch Dishes Router
 */
exports.patchRouter.patch('/courses', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }
    const allowedUpdates = ['name', 'type', 'ingredients',
        'quantity', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted.',
        });
    }
    try {
        const dish = await Dish_1.Dish.findOneAndUpdate({
            name: req.query.name.toString(),
        }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!dish) {
            return res.status(404).send();
        }
        return res.send(dish);
    }
    catch (error) {
        return res.status(400).send(error);
    }
});
exports.patchRouter.patch('./courses:id', async (req, res) => {
    const allowedUpdates = ['name', 'type', 'ingredients',
        'quantity', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted',
        });
    }
    try {
        const dish = await Dish_1.Dish.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
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
/**
 * Patch Menus Router
 */
exports.patchRouter.patch('/menus', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }
    const allowedUpdates = ['name', 'price', 'dishes',
        'nutritionalValue', 'listGroup'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted.',
        });
    }
    try {
        const menu = await Menu_1.Menu.findOneAndUpdate({
            name: req.query.name.toString(),
        }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!menu) {
            return res.status(404).send();
        }
        return res.send(menu);
    }
    catch (error) {
        return res.status(400).send(error);
    }
});
exports.patchRouter.patch('./menus:id', async (req, res) => {
    const allowedUpdates = ['name', 'price', 'dishes',
        'nutritionalValue', 'listGroup'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted',
        });
    }
    try {
        const menu = await Menu_1.Menu.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
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
//# sourceMappingURL=patch.js.map