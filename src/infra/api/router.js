/* eslint-disable no-unused-vars */
exports.routerFactory = ({ findPaymentRecordRoute, createPaymentRecordRoute } = {}) => {
  return {
    /**
     * @param {{ app: import('express').Express() }} app
     */
    apiRouter: ({ app }) => {
      app.get('/paymentRecord', findPaymentRecordRoute);
      app.post('/paymentRecord', createPaymentRecordRoute);
      app.use((error, req, res, next) => {
        return res.status(500).send({ message: error.message });
      });
    },
  };
};
