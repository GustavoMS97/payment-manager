const { EVENT_TYPES, STATE_TYPES, ACCOUNT_TYPES } = require('../../constants');

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
    event: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return EVENT_TYPES.map((a) => a.id).includes(v);
        },
      },
    },
    state: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return STATE_TYPES.map((a) => a.id).includes(v);
        },
      },
    },
    accountType: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return ACCOUNT_TYPES.map((a) => a.id).includes(v);
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
