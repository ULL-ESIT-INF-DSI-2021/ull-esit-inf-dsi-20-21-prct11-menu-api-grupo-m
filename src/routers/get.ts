import * as express from 'express';
import {Ingredient} from '../models/Ingredient';

export const getRouter = express.Router();

getRouter.get('/ingredients', async (req, res) => {
    const filter = req.query.title?{name: req.query.title.toString()}:{};

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

