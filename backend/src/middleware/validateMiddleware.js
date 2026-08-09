import { ZodError } from 'zod';
import { errorResponse } from '../utils/js/response.js';
import { MESSAGES } from '../constants/js/messages.js';
import { STATUS_CODES } from '../constants/js/statusCodes.js';

export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return errorResponse(
          res,
          MESSAGES.VALIDATION_ERROR,
          STATUS_CODES.BAD_REQUEST,
          error.errors.map((err) => err.message)
        );
      }
      return errorResponse(res, error.message, STATUS_CODES.BAD_REQUEST);
    }
  };
};

export const validateQuery = (schema) => {
  return (req, res, next) => {
    try {
      const validatedData = schema.parse(req.query);
      req.query = validatedData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return errorResponse(
          res,
          MESSAGES.VALIDATION_ERROR,
          STATUS_CODES.BAD_REQUEST,
          error.errors.map((err) => err.message)
        );
      }
      return errorResponse(res, error.message, STATUS_CODES.BAD_REQUEST);
    }
  };
};

export const validateParams = (schema) => {
  return (req, res, next) => {
    try {
      const validatedData = schema.parse(req.params);
      req.params = validatedData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return errorResponse(
          res,
          MESSAGES.VALIDATION_ERROR,
          STATUS_CODES.BAD_REQUEST,
          error.errors.map((err) => err.message)
        );
      }
      return errorResponse(res, error.message, STATUS_CODES.BAD_REQUEST);
    }
  };
};