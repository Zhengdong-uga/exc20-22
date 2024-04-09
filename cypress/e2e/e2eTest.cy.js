// Monitor console warnings, errors, and logs
let consoleError;
let consoleWarning;
let consoleLog;


Cypress.on('window:before:load', (win) => {
  consoleError = cy.spy(win.console, 'error');
  consoleWarning = cy.spy(win.console, 'warn');
  consoleLog = cy.spy(win.console, 'log');
});
const DELAY = 1000;

describe('Basic Tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(`http://localhost:${Cypress.env('theport') || 3000}`)
  })
  it('has a title', () => {
    cy.get('h2').first().should('include.text', 'Problem 1')
  })

  it('confirm no errors when clicking problem 1 button', () => {
    cy.get('#Problem-1 > button').click()
  })

  it('confirm no errors when hovering problem 2 item', () => {
    cy.get('#Problem-2 > span:nth-child(3)').trigger('mouseover')
    cy.get('#Problem-2 h3').should('include.text', 'Alaska')
  })

  it('confirm no errors when typing in problem 3 textarea', () => {
    cy.get('#Problem-3 > div > div:nth-child(1) > textarea').type('more more more more');
  })

  it('confirm no errors when adding password and clicking button in Problem 4', () => {
    cy.get('#Problem-4 > input:nth-child(4)').type('blastword');
    cy.get('#Problem-4 > input:nth-child(6)').type('blastword');
    cy.get('#Problem-4 > button:not([disabled])').click();
  })

  it('confirm no errors when  clicking button in Problem 5', () => {
    cy.get('#Problem-5 > div > div.col.col-sm-4 > button').click();
  })

  afterEach(() => {
    // Confirm there are no console log/warning/errors after every test iteration.
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(DELAY).then(() => {
      /* eslint-disable no-unused-expressions */
      expect(consoleError, 'ERRORS FOUND IN YOUR CODE, CHECK THE JS CONSOLE').to.not.be.called;
      expect(consoleWarning, 'WARNINGS FOUND IN YOUR CODE, CHECK THE JS CONSOLE').to.not.be.called;
      expect(consoleLog, 'YOU SHOULD NOT HAVE console.log() IN YOUR SUBMITTED CODE').to.not.be.called;
    });
  });
})
