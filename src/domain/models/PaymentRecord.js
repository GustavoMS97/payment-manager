const { EVENT_PAY_TYPES, EVENT_RECEIVE_TYPES, STATE_TYPES, ACCOUNT_TYPES, ACCOUNT_TYPE } = require('../../constants');

/**
 * @param {{ mongoose: import('mongoose') }} param
 */
exports.PaymentRecordFactory = ({ mongoose } = {}) => {
  const PaymentRecordSchema = new mongoose.Schema({
    internalNumber: { type: mongoose.Schema.Types.ObjectId, required: true, index: { unique: true } },
    documentSupport: {
      type: String,
      required: true,
    },
    originalValue: { type: Number, required: true },
    paidValue: { type: Number },
    dueDate: { type: Date, required: true },
    accountType: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return ACCOUNT_TYPES.map((a) => a).includes(v);
        },
      },
    },
    event: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return EVENT_PAY_TYPES.map((a) => a).includes(v) || EVENT_RECEIVE_TYPES.map((a) => a).includes(v);
        },
      },
    },
    state: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return STATE_TYPES.map((a) => a).includes(v);
        },
      },
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }).index({ internalNumber: 1 });
  const PaymentRecord = mongoose.model('PaymentRecord', PaymentRecordSchema);

  return { PaymentRecord };
};
