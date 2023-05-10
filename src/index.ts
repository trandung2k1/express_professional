import dotenv from 'dotenv';
dotenv.config();
import express, { Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import requestLimiter, { RequestCustom } from './middlewares/limitRequest';
import requestIp from 'request-ip';
import { mkdirp } from 'mkdirp';
import bodyParser from 'body-parser';
import mongoSanitize from 'express-mongo-sanitize';
import('./db/multiple.mongodb');
import fs from 'fs';
import routes from './routes';
const port: number = +process.env.PORT! || 4000;
const isProduction = process.env.NODE_ENV === 'production';
mkdirp.sync('src/logs');
const accessLogStream = fs.createWriteStream(__dirname + '/logs/logger.log', {
    flags: 'a',
});
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(isProduction ? morgan('combined', { stream: accessLogStream }) : morgan('tiny'));
app.use(requestIp.mw());
app.use(requestLimiter);
app.get('/', (req: RequestCustom, res: Response) => {
    console.log(req.clientIp);
    return res.status(200).json({
        message: 'Welcome to the server 👋👋',
    });
});
routes(app);
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
}).on('error', (error: Error) => {
    console.log(error);
    process.exit(1);
});
