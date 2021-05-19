import * as express from 'express';
import {Ingredient} from '../models/Ingredient';
// import {Dish} from '../models/Dish';

export const getRouter = express.Router();

/**
 * Ingredients Get Router
 */
getRouter.get('/ingredients', async (req, res) => {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    try {
        const ingredients = await Ingredient.find(filter);

        if (ingredients.length !== 0) {
            return res.send(ingredients);
        }
        return res.status(404).send();
    } catch (error) {
        return res.status(500).send();
    }
});

getRouter.get('/ingredients/:id', async (req, res) => {
    try {
        const ingredient = await Ingredient.findById(req.params.id);

        if(!ingredient) {
            return res.status(404).send();
        }
        return res.send(ingredient);
    } catch(error) {
        return res.status(500).send(0);
    }
});

/**
 * Dishes Get Router
 */
/*
getRouter.get('/courses', async (req, res) => {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    try {
        const dishes = await Dish.find(filter);

        if (dishes.length !== 0) {
            return res.send(dishes);
        }
        return res.status(404).send();
    } catch (error) {
        return res.status(500).send();
    }
});


getRouter.get('/courses/:id', async (req, res) => {
    try {
        const dishes = await Dish.findById(req.params.id);

        if(!dishes) {
            return res.status(404).send();
        }
        return res.send(dishes);
    } catch(error) {
        return res.status(500).send(0);
    }
});

*/