import * as express from 'express';
import {Ingredient} from '../models/Ingredient';


export const deleteRouter = express.Router();

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