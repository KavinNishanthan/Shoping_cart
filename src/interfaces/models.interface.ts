interface IOrderHistory {
  orderId: String;
  items: {
    name: string;
    count: number;
  }[];
  totalCost: number;
  orderDateTime: Date;
}

interface IUser {
  userId?: string;
  username: string;
  email: string;
  password: string;
  address?: string;
  orders?: IOrderHistory[];
  createdAt?: Date;
  updateAt?: Date;
}

export { IUser, IOrderHistory };
