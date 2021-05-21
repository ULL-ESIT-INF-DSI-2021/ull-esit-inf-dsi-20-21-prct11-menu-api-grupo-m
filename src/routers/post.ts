import * as express from 'express';
import {Ingredient, IngredientInterface} from '../models/Ingredient';
import {Dish, DishInterface} from '../models/Dish';
import {Menu} from '../models/Menu';
import {setPredominantGroup} from '../utils/dish/setPredominantGroup';

export const postRouter = express.Router();

/**
 * Post Ingredient Router
 */
postRouter.post('/ingredients', async (req, res) => {
    const ingredient = new Ingredient(req.body);

    try {
        await ingredient.save();
        res.status(201).send(ingredient);
    } catch (error) {
        res.status(400).send(error);
    }
});

/**
 * Post Dishes Router
 */
postRouter.post('/courses', async (req, res) => {
    const {name, type, ingredients, quantity} = req.body;
    const arrayIngredients: IngredientInterface[] = [];
    let ingredient;
    for (let i=0; i<ingredients.length; i++) {
        const filter = ingredients[i]?{name: ingredients[i].toString()}:{};
        ingredient = await Ingredient.findOne(filter);
        if (!(ingredient  === null)) {
            arrayIngredients.push(ingredient);
        }
    }

    const predominantGroup = setPredominantGroup(arrayIngredients);

    const dish = new Dish({
        "name": name,
        "type": type,
        "ingredients": arrayIngredients,
        "quantity": quantity,
        "predominantGroup": predominantGroup
    });

    try {
        await dish.save();
        res.status(201).send(dish);
    } catch (error) {
        res.status(400).send(error);
    }
});

/**
 * Post Dishes Router
 */

 postRouter.post('/menus', async (req, res) => {
    const {name, price, dishes, nutritionalValue, listGroup} = req.body;
    const arraydishes: DishInterface[] = [];
    let dish;
    for (let i = 0; i < dishes.length; i++) {
        const filter = dishes[i]?{name: dishes[i].toString()}:{};
        dish = await Dish.findOne(filter);
        if (!(dish  === null)) {
            arraydishes.push(dish);
        }
    }

    const menu = new Menu({
        "name": name,
        "price": price,
        "dishes": arraydishes,
        "nutritionalValue": nutritionalValue,
        "listGroup": listGroup,
    });

    try {
        await menu.save();
        res.status(201).send(menu);
    } catch (error) {
        res.status(400).send(error);
    }
});
