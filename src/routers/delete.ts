import * as express from 'express';
import {Ingredient} from '../models/Ingredient';
import {Dish} from '../models/Dish';

export const deleteRouter = express.Router();

/**
 * Ingredients Delete Router
 */
deleteRouter.delete('./Ingredient', async (req, res) => {
    if(!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }

    try {
        const ingredient = await Ingredient.findOneAndDelete({
            name: req.query.name.toString()
        });

        if(!ingredient) {
            return res.status(404).send();
        }
        return res.send(ingredient);
    } catch (error) {
        return res.status(400).send();
    }
});

deleteRouter.delete('/ingredients/:id', async (req, res) => {
    try {
        const ingredient = await Ingredient.findByIdAndDelete(req.params.id);
        
        if(!ingredient) {
            return res.status(404).send();
        }
        return res.send(ingredient);
    } catch (error) {
        return res.status(400).send();
    }
});

/**
 * Dishes Delete Router
 */

 deleteRouter.delete('./courses', async (req, res) => {
    if(!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }

    try {
        const dish = await Dish.findOneAndDelete({
            name: req.query.name.toString()
        });

        if(!dish) {
            return res.status(404).send();
        }
        return res.send(dish);
    } catch (error) {
        return res.status(400).send();
    }
});

deleteRouter.delete('/courses/:id', async (req, res) => {
    try {
        const dish = await Dish.findByIdAndDelete(req.params.id);
        
        if(!dish) {
            return res.status(404).send();
        }
        return res.send(dish);
    } catch (error) {
        return res.status(400).send();
    }
});