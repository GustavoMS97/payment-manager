exports.EVENT_TYPES = Object.freeze({
  PURCHASE: 1,
  SERVICES: 2,
  EMPLOYEEPAYMENT: 3,
  REPLACEMENT: 4,
});

exports.STATE_TYPES = Object.freeze({
  OPEN: 1,
  CANCELED: 2,
  SETTLED: 3,
  SUBSTITUTED: 4,
});

exports.ACCOUNT_TYPES = Object.freeze({
  PAY: 1,
  RECEIVE: 2,
});

exports.MOVING_TYPES = Object.freeze({
  OPENING: 1,
  SETTLEMENT_TOTAL: 2,
  SETTLEMENT_PARTIAL: 3,
  CANCELLATION: 4,
  REPLACEMENT: 5,
});
