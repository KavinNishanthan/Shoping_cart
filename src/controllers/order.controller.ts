// Importing packges
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { generateUUID } from '../helpers/uuid.helper';

// Importing models
import userModel from '../models/user.model';

// Importing constants
import httpStatusConstant from '../constants/http-message.constant';
import responseMessageConstant from '../constants/response-message.constant';

/**
 * @createdBy
 * @createdAt 2024-4-14
 * @description This function is used to handle user register
 */

const handleOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items, totalCost } = req.body;

    const userValidation = Joi.object({
      userId: Joi.string().required(),
      items: Joi.array().required(),
      totalCost: Joi.number().required()
    });

    const { error } = userValidation.validate(req.body);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    const user = await userModel.findOne({ userId: userId });

    const orderId = generateUUID();

    const orderHistory = {
      orderId,
      items,
      totalCost,
      orderDateTime: new Date()
    };

    user?.orders?.push(orderHistory);

    await user?.save();

    res.status(HttpStatusCode.Created).json({
      status: httpStatusConstant.CREATED,
      code: HttpStatusCode.Created,
      message: responseMessageConstant.YOUR_ORDER_HAS_BEEN_PLACED_SUCCESSFULLY
    });
  } catch (err: any) {
    console.error('Error in Ordering:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError
    });
  }
};

/**
 * @createdBy
 * @createdAt 2024-4-14
 * @description This function is used to handle user register
 */

const fetchUserDetails = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const userValidation = Joi.object({
      userId: Joi.string().required()
    });

    const { error } = userValidation.validate(req.params);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    const user = await userModel.findOne({ userId: userId });

    return res.status(HttpStatusCode.Ok).json(user);
  } catch (err: any) {
    console.error('Error in Fetching User Details:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError
    });
  }
};

/**
 * @createdBy
 * @createdAt 2024-4-14
 * @description This function is used to handle user register
 */

const addAddress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const { address } = req.body;

    const userValidation = Joi.object({ userdId: Joi.string().required() });

    const { error } = userValidation.validate(req.params);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }
    const user: any = await userModel.findOne({ userId: userId });

    user.address = address;

    await user?.save();
  } catch (err: any) {
    console.error('Error in Fetching User Details:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError
    });
  }
};

export default {
  handleOrder,
  fetchUserDetails
};
