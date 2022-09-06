import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/router';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(router);

const PORT: number = +process.env.PORT || 4000;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server running on PORT', PORT);
});
