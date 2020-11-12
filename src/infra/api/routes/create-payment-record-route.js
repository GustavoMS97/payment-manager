const joi = require('joi');
var mongoose = require('mongoose');

exports.createPaymentRecordRouteFactory = ({ createPaymentRecord } = {}) => {
  return {
    createPaymentRecordRoute: async (req, res, next) => {
      try {
        const { value: reqBodyValues, error: envVarsValidationError } = joi
          .object()
          .keys({
            documentSupport: joi.string().required(),
            originalValue: joi.number().required(),
            paidValue: joi.number().required(),
            dueDate: joi.date().required(),
            event: joi.number(),
            state: joi.number(),
            accountType: joi.number(),
          })
          .required()
          .validate(req.body);
        if (envVarsValidationError) {
          throw envVarsValidationError;
        }
        const { documentSupport, originalValue, paidValue, dueDate, event, state, accountType } = reqBodyValues;
        const { paymentRecord } = await createPaymentRecord({
          internalNumber: mongoose.Types.ObjectId(),
          documentSupport,
          originalValue,
          paidValue,
          dueDate,
          event,
          state,
          accountType,
        });
        return res.status(201).send({ paymentRecord });
      } catch (createPaymentRecordRouteError) {
        console.log(createPaymentRecordRouteError);
        next(createPaymentRecordRouteError);
      }
    },
  };
};
