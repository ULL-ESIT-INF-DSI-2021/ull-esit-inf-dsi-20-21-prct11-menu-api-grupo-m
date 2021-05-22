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
exports.postRouter = void 0;
const express = __importStar(require("express"));
const Ingredient_1 = require("../models/Ingredient");
const Dish_1 = require("../models/Dish");
const Menu_1 = require("../models/Menu");
const setPredominantGroup_1 = require("../utils/dish/setPredominantGroup");
const setNutriValue_1 = require("../utils/dish/setNutriValue");
const setPrice_1 = require("../utils/dish/setPrice");
const setTotalPrice_1 = require("../utils/menu/setTotalPrice");
const setNutritionalMenu_1 = require("../utils/menu/setNutritionalMenu");
const setListGroup_1 = require("../utils/menu/setListGroup");
exports.postRouter = express.Router();
/**
 * Post Ingredient Router
 */
exports.postRouter.post('/ingredients', async (req, res) => {
    const { name, origin, group, lipids, carbohydrates, proteins, kcalories, price } = req.body;
    const ingredient = new Ingredient_1.Ingredient({
        "name": name,
        "origin": origin,
        "group": group,
        "lipids": lipids,
        "carbohydrates": carbohydrates,
        "proteins": proteins,
        "kcalories": kcalories,
        "price": price
    });
    try {
        await ingredient.save();
        res.status(201).send(ingredient);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
/**
 * Post Dishes Router
 */
exports.postRouter.post('/courses', async (req, res) => {
    const { name, type, ingredients, quantity } = req.body;
    const arrayIngredients = [];
    let ingredient;
    for (let i = 0; i < ingredients.length; i++) {
        const filter = ingredients[i] ? { name: ingredients[i].toString() } : {};
        ingredient = await Ingredient_1.Ingredient.findOne(filter);
        if (!(ingredient === null)) {
            arrayIngredients.push(ingredient);
        }
    }
    const predominantGroup = setPredominantGroup_1.setPredominantGroup(arrayIngredients, quantity);
    const nutriValue = setNutriValue_1.setNutriValue(arrayIngredients, quantity);
    const price = setPrice_1.setPrice(arrayIngredients, quantity);
    const dish = new Dish_1.Dish({
        "name": name,
        "type": type,
        "ingredients": arrayIngredients,
        "quantity": quantity,
        "predominantGroup": predominantGroup,
        "nutritionalValue": nutriValue,
        "price": price
    });
    try {
        await dish.save();
        res.status(201).send(dish);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
/**
 * Post Dishes Router
 */
exports.postRouter.post('/menus', async (req, res) => {
    const { name, dishes } = req.body;
    const arrayDishes = [];
    let dish;
    for (let i = 0; i < dishes.length; i++) {
        const filter = dishes[i] ? { name: dishes[i].toString() } : {};
        dish = await Dish_1.Dish.findOne(filter);
        if (!(dish === null)) {
            arrayDishes.push(dish);
        }
    }
    const price = setTotalPrice_1.setTotalPrice(arrayDishes);
    const nutritionalValue = setNutritionalMenu_1.setNutritionalMenu(arrayDishes);
    const listGroup = setListGroup_1.setListGroup(arrayDishes);
    const menu = new Menu_1.Menu({
        "name": name,
        "price": price,
        "dishes": arrayDishes,
        "nutritionalValue": nutritionalValue,
        "listGroup": listGroup,
    });
    try {
        await menu.save();
        res.status(201).send(menu);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
//# sourceMappingURL=post.js.map