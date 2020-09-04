describe("Auth Page", () => {
  before(() => {
    cy.task("clear:db");
  });
  it("should be able to sign up a new account", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy='toolbar'] [data-cy='/auth']").click();
    cy.location("pathname").should("eq", "/auth");
    // cy.get("[data-cy='auth-switch']").click();
    cy.get("input[name=email]").type("someone@fake.com");
    cy.get("input[name=password]").type("123123");
    cy.contains("SUBMIT").click();
    cy.location("pathname").should("eq", "/");
  });

  it("should login sucessfully", () => {
    expect(true).eq(false);
  });
});
