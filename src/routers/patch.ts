import * as express from 'express';
import {Ingredient} from '../models/Ingredient';
import {Dish} from '../models/Dish';

export const patchRouter = express.Router();

patchRouter.patch('/ingredients', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }

    const allowedUpdates = ['name', 'origin', 'group', 
    'lipids', 'carbohydrates', 'proteins',
    'kcalories', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted.'
        });
    }

    try {
        const ingredient = await Ingredient.findOneAndUpdate({
            name: req.query.name.toString()
        }, req.body, {
                new: true,
                runValidators: true,
        });

        if (!ingredient) {
             return res.status(404).send();
        }

        return res.send(ingredient);
    } catch (error) {
        return res.status(400).send(error)
    }
});

patchRouter.patch('./ingredient:id', async (req, res) => {
    const allowedUpdates = ['name', 'origin', 'group', 
    'lipids', 'carbohydrates', 'proteins',
    'kcalories', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = 
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if(!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted',
        })
    }

    try {
        const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!ingredient) {
            return res.status(404).send();
        }

        return res.send(ingredient);
    } catch (error) {
        return res.status(400).send();
    }
});


////////////////////////////////////////////////////////////////////////////////////////////////


patchRouter.patch('/courses', async (req, res) => {
    if (!req.query.name) {
        return res.status(400).send({
            error: 'A name must be provided',
        });
    }

    const allowedUpdates = ['name', 'type', 'ingredients', 
    'predominantGroup', 'nutritionalValue', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted.'
        });
    }

    try {
        const dish = await Dish.findOneAndUpdate({
            name: req.query.name.toString()
        }, req.body, {
                new: true,
                runValidators: true,
        });

        if (!dish) {
             return res.status(404).send();
        }

        return res.send(dish);
    } catch (error) {
        return res.status(400).send(error)
    }
});

patchRouter.patch('./courses:id', async (req, res) => {
    const allowedUpdates = ['name', 'type', 'ingredients', 
    'predominantGroup', 'nutritionalValue', 'price'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = 
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if(!isValidUpdate) {
        return res.status(400).send({
            error: 'Update is not permitted',
        })
    }

    try {
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!dish) {
            return res.status(404).send();
        }
        return res.send(dish);
    } catch (error) {
        return res.status(400).send();
    }
});
