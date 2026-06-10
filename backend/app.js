import cors from 'cors';
import express from 'express';

import {SERVER} from './constants/server.js';
import quizRouter from './routers/quizRouter.js';

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173', 'https://economic-quiz-seven.vercel.app'],
  methods: 'GET'
};

app.use(cors(corsOptions));
app.use('/quizzes', quizRouter);

app.get('/healthz', (_request, response) => {
  response.send('OK');
});

const server = app.listen(SERVER.PORT, () => {
  console.log(`Server is running on ${SERVER.HOST}:${SERVER.PORT}`);
});

server.on('error', error => {
  console.error('Server error:', error);
});
