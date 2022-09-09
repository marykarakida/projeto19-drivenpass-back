import Joi from 'joi';

const newWifiSchema = Joi.object({
    title: Joi.string().trim().required(),
    networkName: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
});

export default newWifiSchema;
