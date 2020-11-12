exports.EVENT_PAY_TYPE = Object.freeze({
  PURCHASE: 1,
  SERVICES: 2,
  EMPLOYEEPAYMENT: 3,
  REPLACEMENT: 4,
});

exports.EVENT_PAY_TYPES = Object.values(this.EVENT_PAY_TYPE);

exports.EVENT_RECEIVE_TYPE = Object.freeze({
  SALES: 1,
  SERVICES: 2,
  REPLACEMENT_NEGOTIATION: 3,
  REPLACEMENT_CREDITCARD: 4,
});

exports.EVENT_RECEIVE_TYPES = Object.values(this.EVENT_RECEIVE_TYPE);

exports.STATE_TYPE = Object.freeze({
  OPEN: 1,
  CANCELED: 2,
  SETTLED: 3,
  SUBSTITUTED: 4,
});

exports.STATE_TYPES = Object.values(this.STATE_TYPE);

exports.ACCOUNT_TYPE = Object.freeze({
  PAY: 1,
  RECEIVE: 2,
});

exports.ACCOUNT_TYPES = Object.values(this.ACCOUNT_TYPE);

exports.MOVING_TYPE = Object.freeze({
  OPENING: 1,
  SETTLEMENT_TOTAL: 2,
  SETTLEMENT_PARTIAL: 3,
  CANCELLATION: 4,
  REPLACEMENT: 5,
});

exports.MOVING_TYPES = Object.values(this.MOVING_TYPE);
