import {MongoClient, ServerApiVersion} from 'mongodb';

const loadQuizzes = async () => {
  const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  try {
    const database = client.db('economic-quiz-app');
    const quizzes = await database.collection('quizzes').find().toArray();

    return quizzes;
  } finally {
    await client.close();
  }
};

export default loadQuizzes;
