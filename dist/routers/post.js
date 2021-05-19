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
// import {Dish} from '../models/Dish';
exports.postRouter = express.Router();
/**
 * Post Ingredient Router
 */
exports.postRouter.post('/ingredients', async (req, res) => {
    const ingredient = new Ingredient_1.Ingredient(req.body);
    try {
        await ingredient.save();
        res.status(201).send(ingredient);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
/////////////////////////////////////////////////////////////////
/**
 * Post Dishes Router
 */
/*postRouter.post('/courses', async (req, res) => {
    const dish = new Dish(req.body);

    try {
        await dish.save();
        res.status(201).send(dish);
    } catch (error) {
        res.status(400).send(error);
    }
});
*/
//# sourceMappingURL=post.js.map