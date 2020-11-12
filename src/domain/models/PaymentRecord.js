/**
 * @param {{ mongoose: import('mongoose') }} param
 */
exports.PaymentRecordFactory = ({ mongoose } = {}) => {
  const PaymentRecordSchema = new mongoose.Schema({
    internalNumber: { type: Object.id, uppercase: true, required: true, index: { unique: true } },
    DocumentSupport: {
      type: Date,
      default: Date.now,
    },
  }).index({ name: 1 });
  const PaymentRecord = mongoose.model('PaymentRecord', PaymentRecordSchema);

  return { PaymentRecord };
};
