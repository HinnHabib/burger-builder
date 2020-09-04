// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.log("Login");
  return cy
    .request({
      method: "POST",
      url: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${Cypress.env(
        "FIREBASE_KEY"
      )}`,
      body: {
        email: "someone@fake.com",
        password: "123123",
        returnSecureToken: true,
      },
    })
    .then(({ body }) => {
      cy.window({ log: false }).then((win) => {
        return win.store.dispatch({
          type: "AUTH_SUCCESS",
          idToken: body.idToken,
          userId: body.userId,
        });
      });
    });
});
