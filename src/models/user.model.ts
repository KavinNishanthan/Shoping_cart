// Importing packages
import { Schema, model } from 'mongoose';

// Importing interfaces
import { IUser, IOrderHistory } from '../interfaces/models.interface';

const orderHistorySchema = new Schema<IOrderHistory>(
  {
    orderId: { type: String, require: true },
    items: [
      {
        name: { type: String, required: true },
        count: { type: Number, required: true }
      }
    ],
    totalCost: { type: Number, required: true },
    orderDateTime: { type: Date, required: true }
  },
  { _id: false }
);

const schema = new Schema<IUser>(
  {
    userId: {
      type: String,
      required: true
    },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, default: '' },
    orders: { type: [orderHistorySchema], default: [] }
  },
  { timestamps: true }
);

export default model<IUser>('user', schema);
