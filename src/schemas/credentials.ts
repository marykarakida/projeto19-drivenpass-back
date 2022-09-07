import Joi from 'joi';

const newCredentialSchema = Joi.object({
    title: Joi.string().trim().required(),
    url: Joi.string().trim().uri().required(),
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
});

export default newCredentialSchema;
