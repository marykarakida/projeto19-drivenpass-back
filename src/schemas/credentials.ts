import Joi from 'joi';

const newCredentialSchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
});

export default newCredentialSchema;
