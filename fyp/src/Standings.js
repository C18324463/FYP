import React from 'react';
import SideNav from './SideNav';

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://ergast.com/api/f1/{{2022}}/{{1}}/driverStandings',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});