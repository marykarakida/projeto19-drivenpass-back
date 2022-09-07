import Joi from 'joi';

const newNoteSchema = Joi.object({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required(),
});

export default newNoteSchema;
