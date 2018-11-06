const express = require('express');
const lodash = require('lodash');
const _ = require('lodash');

const app = express();

const PORT = process.env.PORT || 3232;
const MIN_VALUE = process.env.MIN_VALUE || 100;
const MAX_VALUE = process.env.MAX_VALUE || 1000;
const FAIL_RATE = process.env.FAIL_RATE || 0.2;

app.get('/reference/:refId', (req, res) => {
  if (!req.params.refId) {
    console.error('Missing refId');
    return res.status(400).json({});
  }
  return res.status(200).json({
    value: _.parseInt(_.random(MIN_VALUE * 100, MAX_VALUE * 100, true)) / 100
  });
});

app.get('/rate', (req, res) => {
  if (parseFloat(FAIL_RATE) > _.random(0, 1, true)) {
    console.error('Request failed!');
    return res.status(500).json({});
  }
  if (!_.has(req.query, 'from') || !_.has(req.query, 'to')) {
    console.error('Missing parameter!');
    return res.status(400).json({});
  }
  // For 4 decimals
  const factor = 1000;
  return res.status(200).json({
    value: _.parseInt(_.random(1 * factor, 10 * factor, true)) / factor
  });
});

app.listen(`${PORT}`, '0.0.0.0', () => {
  console.log(`App started on port ${PORT}`);
});
