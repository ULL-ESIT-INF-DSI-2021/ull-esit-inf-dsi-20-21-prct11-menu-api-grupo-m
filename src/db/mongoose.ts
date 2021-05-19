import {connect} from 'mongoose';

// mongodb+srv://nutrition-app:nutritionappDSI@cluster0.y08gf.mongodb.net/nutrition-app?retryWrites=true&w=majority

const mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost:27017/nutrition-app';

connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connection to MongoDB server established');
}).catch(() => {
  console.log('Unnable to connect to MongoDB server');
});