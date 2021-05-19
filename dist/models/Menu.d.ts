import { Document } from 'mongoose';
import { DishInterface } from './Dish';
interface MenuInterface extends Document {
    name: string;
    price: number;
    dishes: DishInterface[];
    nutritionalValue: number;
    listGroup: ('group1' | 'group2' | 'group3' | 'group4' | 'group5')[];
}
export declare const Menu: import("mongoose").Model<MenuInterface, {}, {}>;
export {};
