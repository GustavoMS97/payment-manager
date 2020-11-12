exports.findPaymentRecordFactory = ({ PaymentRecord } = {}) => {
  return {
    findPaymentRecord: async () => {
      try {
        const paymentRecord = await PaymentRecord.find();
        return { paymentRecord };
      } catch (findPaymentRecordError) {
        console.log(findPaymentRecordError);
        throw new Error('Não foi possivel buscar o registro de pagamento!');
      }
    },
  };
};
