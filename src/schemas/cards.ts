import Joi from 'joi';

const newCardSchema = Joi.object({
    title: Joi.string().required(),
    number: Joi.string()
        .regex(/^[0-9\s-]*$/)
        .required()
        .messages({
            'string.pattern.base': '"number" must be a numeric string with or without hyphens/white spaces',
        }),
    cardHolderName: Joi.string()
        .regex(/^[A-Z']*$/)
        .required()
        .messages({
            'string.pattern.base': '"cardHolderName" must be all capital case',
        }),
    expirationDate: Joi.string()
        .trim()
        .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)
        .required()
        .messages({
            'string.pattern.base': '"expirationDate" must be a valida date with MM/YY pattern',
        }),
    securityCode: Joi.string().required(),
    password: Joi.string().required(),
    isVirtual: Joi.boolean().strict().required(),
    type: Joi.string().valid('credit', 'debit', 'both').required(),
});

export default newCardSchema;
