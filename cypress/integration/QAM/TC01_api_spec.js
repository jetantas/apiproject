describe('API Testing', () => {
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')
    it ('GET - read', () => {
        cy.request('GET', '/employees').then((response) => {
            cy.expect(response).to.have.property('status', 200)
            cy.expect(response.body).not.to.be.null
            cy.expect(response.body.data).to.have.length(24)
        })
    })
    
    it ('POST - create', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST', '/create', item) 
        .its('body')
        .its('data')
        .should('include', {name:'test'})
    })

    it ('PUT - update', () => {
        const item = {"name":"test1"}
        cy.request('PUT', '/update/1', item).its('status').should('eq', 200)
    })
    
    it ('DELETE - delete', () => {
        const item = {"name":"test1"}
        cy.request('DELETE', '/delete/1', item).its('status').should('eq', 200)
    })
})