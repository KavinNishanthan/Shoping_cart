//Importing Mongoose
import mongoose from 'mongoose';

/**
 * @createdBy Kaviya
 * @createdAt 2024-04-01
 * @description This function is used to handle MongoDB Connection
 */

const connect = async () => {
  try {
    mongoose.set('strictQuery', false);
    const res = await mongoose.connect(process.env.MONGOURI || '');
    console.log('Mongodb connected');
    return res;
  } catch (err) {
    console.log('Mongodb Error:', err);
  }
};

export default connect;
