import { ObjectSchema } from 'joi';

import newCardSchema from './cards';
import newCredentialSchema from './credentials';
import newNoteSchema from './notes';
import { newUserSchema, userSchema } from './users';

const schemas: { [key: string]: ObjectSchema } = {
    newCardSchema,
    newCredentialSchema,
    newNoteSchema,
    newUserSchema,
    userSchema,
};

export default schemas;
