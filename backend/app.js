import cors from 'cors';
import express from 'express';

import {CORS_OPTIONS} from './constants/cors.js';
import {SERVER} from './constants/server.js';
import quizRouter from './routers/quizRouter.js';

const app = express();

app.use(cors(CORS_OPTIONS));
app.use('/quizzes', quizRouter);

app.get('/healthz', (_request, response) => {
  response.send('OK');
});

const server = app.listen(SERVER.PORT, () => {
  console.log(`repository: https://github.com/economic-quiz-app/economic-quiz`);
  console.log(`Server is running on ${SERVER.HOST}:${SERVER.PORT}`);
  console.log(`url: https://quiz-api-jpp7.onrender.com`);
  console.log('web: https://economic-quiz.netlify.app');
});

server.on('error', error => {
  console.error('Server error:', error);
});
