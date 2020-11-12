exports.createPaymentRecordFactory = ({ PaymentRecord } = {}) => {
  return {
    createPaymentRecord: async ({
      internalNumber,
      documentSupport,
      originalValue,
      paidValue,
      dueDate,
      event,
      state,
      accountType,
    } = {}) => {
      try {
        const paymentRecord = await PaymentRecord.create({
          internalNumber,
          documentSupport,
          originalValue,
          paidValue,
          dueDate,
          event,
          state,
          accountType,
        });
        return { paymentRecord };
      } catch (createPaymentRecordError) {
        console.log(createPaymentRecordError);
        throw new Error('Não foi possivel criar o registro de pagamento!');
      }
    },
  };
};
