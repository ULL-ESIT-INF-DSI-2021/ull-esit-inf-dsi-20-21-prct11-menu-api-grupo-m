import * as express from 'express';
import {Ingredient, IngredientInterface} from '../models/Ingredient';
import {Dish, DishInterface} from '../models/Dish';
import {Menu} from '../models/Menu';
import {setPredominantGroup} from '../utils/dish/setPredominantGroup';
import {setNutriValue} from '../utils/dish/setNutriValue';
import {setPrice} from '../utils/dish/setPrice';
import {setTotalPrice} from '../utils/menu/setTotalPrice';
import {setNutritionalMenu} from '../utils/menu/setNutritionalMenu';
import {setListGroup} from '../utils/menu/setListGroup';


export const postRouter = express.Router();

/**
 * Post Ingredient Router
 */
postRouter.post('/ingredients', async (req, res) => {
    const {name, origin, group, lipids, 
           carbohydrates, proteins, kcalories, price} = req.body

    const ingredient = new Ingredient({
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

    const predominantGroup = setPredominantGroup(arrayIngredients, quantity);
    const nutriValue = setNutriValue(arrayIngredients, quantity);
    const price = setPrice(arrayIngredients, quantity);

    const dish = new Dish({
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
    } catch (error) {
        res.status(400).send(error);
    }
});

/**
 * Post Dishes Router
 */

 postRouter.post('/menus', async (req, res) => {
    const {name, dishes} = req.body;
    const arrayDishes: DishInterface[] = [];
    let dish;
    for (let i = 0; i < dishes.length; i++) {
        const filter = dishes[i]?{name: dishes[i].toString()}:{};
        dish = await Dish.findOne(filter);
        if (!(dish  === null)) {
            arrayDishes.push(dish);
        }
    }

    const price = setTotalPrice(arrayDishes);
    const nutritionalValue = setNutritionalMenu(arrayDishes);
    const listGroup = setListGroup(arrayDishes);

    const menu = new Menu({
        "name": name,
        "price": price,
        "dishes": arrayDishes,
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
