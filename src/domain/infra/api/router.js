/* eslint-disable no-unused-vars */
exports.routerFactory = ({} = {}) => {
  return {
    /**
     * @param {{ app: import('express').Express() }} app
     */
    apiRouter: ({ app }) => {
      app.get('/teste', function () {
        console.log('ISSO AI BRASIL');
      });
      app.use((error, req, res, next) => {
        return res.status(500).send({ message: error.message });
      });
    },
  };
};
