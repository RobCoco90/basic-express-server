import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

/* eslint-disable */
app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}!`),
);