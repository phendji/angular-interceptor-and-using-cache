'use strict';

const srvHelper = require('../serverHelper.js');
const environment = require('../apiUrl.js');

module.exports = app => {
  app.post(`${environment.URL.API_WITHOUT_TOKEN.NAME_APP_LOGIN_URL}`, (req, res) => {
    setTimeout(srvHelper.checkIfUserExist, app.settings.latencies.login, res, req.body, `./server/api/login/bdd-login.json`);
  });
};
