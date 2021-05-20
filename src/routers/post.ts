import * as express from 'express';
import {Ingredient, IngredientInterface} from '../models/Ingredient';
import {Dish} from '../models/Dish';

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


/////////////////////////////////////////////////////////////////
/**
 * Post Dishes Router
 */
postRouter.post('/courses', async (req, res) => {

    const { name, type, ingredients, quantity } = req.body;
    const arrayIngredients: IngredientInterface[] = [];
    for(let i=0; i<ingredients.length; i++){
        let filter = ingredients[i]?{name: ingredients[i].toString()}:{};
        let ingredient = await Ingredient.findOne(filter);
        if (!(ingredient  === null)) {
            arrayIngredients.push(ingredient);
        }
    }

    const dish = new Dish({
        "name": name,
        "type": type,
        "ingredients": arrayIngredients,
        "quantity": quantity
    })

    try {
        await dish.save();
        res.status(201).send(dish);
    } catch (error) {
        res.status(400).send(error);
    }
});

