import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const JoiPassword = Joi.extend(joiPasswordExtendCore);

export const newUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: JoiPassword.string().min(8).max(24).minOfSpecialCharacters(1).minOfLowercase(1).minOfUppercase(1).minOfNumeric(1).required(),
});

export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
