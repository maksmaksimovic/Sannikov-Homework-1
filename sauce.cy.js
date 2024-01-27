context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/')
    cy.get('.btn-primary').contains('Customer Login').click();
    cy.get('#userSelect').select('Hermoine Granger');
    cy.get('.btn-default').click();
    cy.get('.ng-binding').should('text', 'Hermoine Granger1001 5096Dollar');
  })

  it('.accountSelect', () => {
    cy.get('#accountSelect').select('number:1003');
    cy.get('.ng-binding').should('text', 'Hermoine Granger1003 0Rupee');
  })

  it('.Transactions', () => {
    cy.get('.tab').contains('Transactions').click();
    cy.get('table.table-bordered.table-striped').should('exist');
  })
  it('.TransactionsReset', () => {
    cy.get('.tab').contains('Transactions').click();
    cy.get('.btn').contains('Reset').click();
    cy.get('table.table-bordered.table-striped tbody tr').should('not.exist');
  })
  it('.Deposit', () => {
    cy.get('.tab').contains('Deposit').click();
    cy.get('input[type="number"]').type('1000');
    cy.get('.btn-default').contains('Deposit').click();
    cy.get('span.error').should('be.visible');
    cy.get('span.error').should('contain.text', 'Deposit Successful');
  })
  it('.Withdrawl', () => {
    cy.get('.tab').contains('Withdrawl').click();
    cy.get('input[type="number"]').type('1000');
    cy.get('.btn-default').contains('Withdraw').click();
    cy.get('span.error').should('be.visible');
    cy.get('span.error').should('contain.text', 'Transaction successful');
  })
  it('.NewCustomer', () => {
    cy.get('.home').contains('Home').click();
    cy.get('.btn-primary').contains('Bank Manager Login').click();
    cy.get('.tab').contains('Add Customer').click();
    cy.get('input[ng-model="fName"]').type('John');
    cy.get('input[ng-model="lName"]').type('Doe');
    cy.get('input[ng-model="postCd"]').type('12345');
    cy.get('form[name="myForm"]').submit();
    cy.get('.home').contains('Home').click();
    cy.get('.btn-primary').contains('Customer Login').click();
    cy.get('#userSelect').select('John Doe');
    cy.get('.btn-default').click();
    cy.get('.fontBig.ng-binding').should('be.visible');
    cy.get('.fontBig.ng-binding').should('contain', 'John Doe');
  })
})