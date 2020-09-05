describe("", () => {
  before(() => {
    cy.login();
  });
  it("Orders page list", () => {
    cy.server();
    cy.fixture("orders.json").as("orders");

    cy.route({
      method: "GET",
      url: "**/orders.json**",
      delay: 3000,
      //   response: "@orders",
    }).as("ordersRequest");
    cy.get('[data-cy="toolbar"]').within(() => {
      cy.get(' [data-cy="/orders"]').click();
    });

    cy.location("pathname").should("eq", "/orders");
    cy.get('[data-cy="loader"]');
    cy.get('[data-cy="order-item"]', { multiple: true }).should(
      "have.length.above",
      0
    );
  });
});
