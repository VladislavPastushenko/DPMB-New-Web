import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import routes from "./routes";
const cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors({
    origin:[
        'http://127.0.0.1:8000',
        'http://localhost:8000',
        'http://mirror.aureeka.com:3000',
        'http://localhost:3000',
        'http://localhost',
        'https://localhost:443',
        'https://localhost',
        'http://mirror.aureeka.com',
        'https://mirror.aureeka.com',
        'http://aureeka.com',
        'https://aureeka.com',
        'https://aureeka.com:443',
        'https://www.aureeka.com',],
    methods:['GET','POST','PUT','DELETE'],
    credentials: true // enable set cookie
}));
app.options('*', cors());

routes(app);

export default app;
