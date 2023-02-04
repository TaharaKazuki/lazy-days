import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import jwt from 'express-jwt';

import { User as UserType } from '../../shared/types';

dotenv.config();
if (!process.env.EXPRESS_SECRET) {
  console.info('EXPRESS_SECRET must be defined in .env\nEXITING');
  process.exit(-1);
}

declare global {
  namespace Express {
    interface Request {
      auth?: UserType;
    }
  }
}

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

/* ---------- middleware ---------- */

// use middleware to server static image
app.use(express.static('public'));

// middleware for parsing json body
app.use(json());

app.use(
  '/user/:id',
  jwt({
    secret: process.env.EXPRESS_SECRET || 'NOT SO SECRET',
    algorithms: ['HS256'],
    requestProperty: 'auth',
  }),
);
