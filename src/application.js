const { loadEnvironment } = require('./infra/config/environment');

const { apiFactory } = require('./infra/api/api');

// Models (Data base)
const { connectToMongoose } = require('./infra/db/mongoose');
const { PaymentRecordFactory } = require('./domain/models/PaymentRecord');
const { MovementFactory } = require('./domain/models/Movement');

// Services
const { findPaymentRecordFactory } = require('./domain/services/find-payment-record');
const { createPaymentRecordFactory } = require('./domain/services/create-payment-record');

// Middlewares

// Routes
const { findPaymentRecordRouteFactory } = require('./infra/api/routes/find-payment-record-route');
const { createPaymentRecordRouteFactory } = require('./infra/api/routes/create-payment-record-route');

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

    const { findPaymentRecord } = findPaymentRecordFactory({ PaymentRecord });
    const { createPaymentRecord } = createPaymentRecordFactory({ PaymentRecord });

    const { findPaymentRecordRoute } = findPaymentRecordRouteFactory({ findPaymentRecord });
    const { createPaymentRecordRoute } = createPaymentRecordRouteFactory({ createPaymentRecord });

    const { apiRouter } = routerFactory({
      findPaymentRecordRoute,
      createPaymentRecordRoute,
    });

    apiRouter({ app });
  } catch (applicationError) {
    console.log(applicationError);
    throw new Error('Erro na aplicação, terminando!');
  }
};

application();
