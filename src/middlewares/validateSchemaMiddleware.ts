import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

import { CustomError } from '../middlewares/errorHandlerMiddleware';

function validateSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errorMessages = error.details.map((detail: { message: string }) => detail.message);
            throw CustomError('error_unprocessable_entity', errorMessages);
        }

        return next();
    };
}

export default validateSchema;
