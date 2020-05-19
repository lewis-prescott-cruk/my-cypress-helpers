/// <reference types="cypress" />

describe('Drag', () => {
    beforeEach(() => {
      cy.visit('https://react-beautiful-dnd.netlify.app/iframe.html?id=board--simple')
    })

    it('drag and drop', () => {
        cy.get('[data-rbd-drag-handle-draggable-id]')
        .eq(1).as('first').should('contain', 'id:2');
        cy.get('[data-rbd-drag-handle-draggable-id]').eq(2).should('contain', 'id:3');

        cy.get('@first')
        .focus()
        .trigger('keydown', { keyCode: 32})
        .get('@first')
        .trigger('keydown', { keyCode: 40, force: true })
        .wait(200)
        .trigger('keydown', {keyCode: 32, force: true});

        cy.get('[data-rbd-drag-handle-draggable-id]').eq(1).should('contain', 'id:3');

        cy.get('[data-rbd-drag-handle-draggable-id]').eq(2).should('contain', 'id:2');
    })
})