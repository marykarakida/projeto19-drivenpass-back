import Joi from 'joi';

const newNoteSchema = Joi.object({
    title: Joi.string().trim().max(50).required(),
    note: Joi.string().trim().max(1000).required(),
});

export default newNoteSchema;
