const { MOVING_TYPES } = require('../../constants');

/**
 * @param {{ mongoose: import('mongoose') }} param
 */
exports.MovementFactory = ({ mongoose } = {}) => {
  const MovementSchema = new mongoose.Schema({
    paymentRecord: { type: mongoose.Schema.Types.ObjectId, required: true, index: { unique: true } },
    movingDate: { type: Date, required: true },
    movingType: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return MOVING_TYPES.map((a) => a).includes(v);
        },
      },
    },
    movingValue: {
      originalValue: { type: Number, required: true },
      interest: { type: Number, require: true },
      trafficTicket: { type: Number, required: true },
    },
    transaction: {
      type: String,
      required: true,
      index: { unique: true },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }).index({ paymentRecord: 1, transaction: 1 });
  const Movement = mongoose.model('Movement', MovementSchema);

  return { Movement };
};
