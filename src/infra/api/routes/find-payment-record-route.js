exports.findPaymentRecordRouteFactory = ({ findPaymentRecord } = {}) => {
  return {
    findPaymentRecordRoute: async (req, res, next) => {
      try {
        const { paymentRecord } = await findPaymentRecord();
        return res.status(200).send({ paymentRecord });
      } catch (findPaymentRecordRouteError) {
        console.log(findPaymentRecordRouteError);
        next(findPaymentRecordRouteError);
      }
    },
  };
};
