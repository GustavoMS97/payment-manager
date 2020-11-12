const { loadEnvironment } = require('./infra/config/environment');

const { apiFactory } = require('./infra/api/api');

// Models (Data base)
const { connectToMongoose } = require('./infra/db/mongoose');
const { PaymentRecordFactory } = require('./domain/models/PaymentRecord');
const { MovementFactory } = require('./domain/models/Movement');

// Services

// Middlewares

// Routes

// Router
const { routerFactory } = require('./infra/api/router');

// Application
const application = async () => {
  try {
    const { ENV } = loadEnvironment();

    const { startApi } = apiFactory({ ENV });
    const { app } = await startApi();

    const { mongoose } = await connectToMongoose({ ENV });
    const { PaymentRecord } = PaymentRecordFactory({ mongoose });
    const { Movement } = MovementFactory({ mongoose });

    const { apiRouter } = routerFactory({});

    apiRouter({ app });
  } catch (applicationError) {
    console.log(applicationError);
    throw new Error('Erro na aplicação, terminando!');
  }
};

application();
