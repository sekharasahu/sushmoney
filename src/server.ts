import express from 'express';
import { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app : Express = express();

app.use(require('./route/route'))

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})