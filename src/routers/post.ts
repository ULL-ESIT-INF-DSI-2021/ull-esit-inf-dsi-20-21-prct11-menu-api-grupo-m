import * as express from 'express';
import {Ingredient} from '../models/Ingredient';
// import {Dish} from '../models/Dish';

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
