"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// mongodb+srv://nutrition-app:nutritionappDSI@cluster0.y08gf.mongodb.net/nutrition-app?retryWrites=true&w=majority
const mongodb_url = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/nutrition-app';
mongoose_1.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('Connection to MongoDB server established');
}).catch(() => {
    console.log('Unnable to connect to MongoDB server');
});
//# sourceMappingURL=mongoose.js.map