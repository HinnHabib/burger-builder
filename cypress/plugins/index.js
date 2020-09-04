/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const axios = require("axios");
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {
    "clear:db": async () => {
      const key = config.env.FIREBASE_KEY;
      return axios
        .post(
          `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`,
          {
            email: "someone@fake.com",
            password: "123123",
            returnSecureToken: true,
          }
        )
        .then((resp) => {
          const idToken = resp.data.idToken;
          return axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${key}`,
            { idToken: idToken }
          );
        })
        .then(() => {
          return { res: "delete success" };
        })
        .catch((error) => {
          return error;
        });
    },
  });
};
