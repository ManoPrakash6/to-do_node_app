"use strict";
var nconf = require('nconf');

nconf.env().argv().file('config.json');
