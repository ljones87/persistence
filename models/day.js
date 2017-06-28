var Sequelize = require('sequelize');
var db = require('./_db');

const Day = db.define('day', {
    number: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
});

module.exports = Day

