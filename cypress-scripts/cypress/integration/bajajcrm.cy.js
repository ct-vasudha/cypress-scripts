describe('crm',()=>{
    
    it('testsuite',()=>{
        cy.visit('https://php8-bajaj-crm.cartradeexchange.com/')
        cy.get('#txt_usr').type('devteam@cartrade.com')
        cy.get('#txt_pwd').type('Sek123!@#')
        cy.wait(6000)
        cy.get('#submit_btn').click({force:true})
        cy.get('#otp1').type('1')
        cy.get('#otp2').type('2')
        cy.get('#otp3').type('3')
        cy.get('#otp4').type('4')
        cy.get('#otp5').type('5')
        cy.get('#otp6').type('6')
        cy.wait(10000)
        cy.get('#submit_btn2').click({force:true})
        cy.get('.login_blk > .row > :nth-child(2) > .btn').click({force:true})
        
        
            
        cy.get('#source_name').type('DSE')
        cy.get('.d-flex > .btn-primary').click({force:true})
        cy.get(':nth-child(1) > :nth-child(2) > .list-unstyled > :nth-child(1) > .text-black').should('contain','DSE')
        cy.get('#source_name').clear().type('D2C')
        cy.get('.d-flex > .btn-primary').click({force:true})
        cy.get(':nth-child(1) > :nth-child(2) > .list-unstyled > :nth-child(1) > .text-black').should('contain','D2C')
        cy.get('#source_name').clear().type('abc')
        cy.get('.d-flex > .btn-primary').click({force:true})
        cy.get('.inrow_clr > :nth-child(1) > :nth-child(1)').should('not.exist')
        cy.get('#source_name').clear().clear().type('dse')
       
        
        cy.get('#dealer_name').type('GRAND MOTORS')
        cy.get('.d-flex > .btn-primary').click({force:true})
            //   cy.get('.inrow_clr > :nth-child(1) > :nth-child(1)').invoke('text').then((text) => {
            //     cy.log('Actual Text:', text);
                    
            //});
        cy.get('.inrow_clr > :nth-child(1) > :nth-child(1)')
        .should('have.text','\n\t\t\t\t\t\t\t\t\tDealer Id: 12137\n\t\t\t\t\t\t\t\t\tBranch Code: 12137 \n\t\t\t\t\t\t\t\t\tDealer name : GRAND MOTORS\n\t\t\t\t\t\t\t\t\tBranch name: GRAND MOTORS(12137)\n\t\t\t\t\t\t\t\t')
        cy.get('#dealer_name').clear().type('Sai Service')
        cy.get('.d-flex > .btn-primary').click({force:true})
            //   cy.get('.inrow_clr > :nth-child(1) > :nth-child(1)').invoke('text').then((text) => {
            //     cy.log('Actual Text:', text);
                    
            //});
        cy.get('.inrow_clr > :nth-child(1) > :nth-child(1)')
        .should('have.text','\n\t\t\t\t\t\t\t\t\tDealer Id: 12390\n\t\t\t\t\t\t\t\t\tBranch Code: 12390 \n\t\t\t\t\t\t\t\t\tDealer name : Sai Service Pvt. Ltd\n\t\t\t\t\t\t\t\t\tBranch name: KTM Wakdewadi\n\t\t\t\t\t\t\t\t')
        cy.get('#mobile_no').type('9454666655')
        cy.get('.d-flex > .btn-primary').click({force:true})
        cy.get('.nav-item > .nav-link').should('have.text','All\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t(1)\n\t\t\t\t\t\t\t\t\t\t')
        cy.get('.onhvr > :nth-child(4) > .list-unstyled > :nth-child(2) > .cursor').should('have.text','9454666655')
        cy.get('.form-group > .d-flex > :nth-child(2)').click({force:true})
        cy.get('#cust_name').type('pavani')
        cy.get('.d-flex > .btn-primary').click({force:true})
        cy.wait(2000)
        //var x; 
  

    //     cy.get('.nav-item > .nav-link').invoke("text").then((text) => {
    //         x = cy.log(text)

    // }) 
    // cy.get(':nth-child(3) > .btn').click(navclick())
    // var b = x/10;
    // function navclick(){
        
    //     for (var i =0 ; i < b ; i++) {
    //         cy.get('.inrow_clr > :nth-child(1) > :nth-child(4) > .list-unstyled > .text-black').should('have.text','asdf')
    //         cy.get(':nth-child(10) > :nth-child(4) > .list-unstyled > .text-black').should('contain','pavani')
    //         cy.wait(2000)
    //         }

    // }
    
    // function recursiveAction(index) {
    //     if (index < x) {
    //       // Perform your action on the element, e.g., click
    //       cy.get('.element-selector').eq(index).click();
    //       cy.get('.inrow_clr > :nth-child(1) > :nth-child(4) > .list-unstyled > .text-black').contains('pavani')
      
    //       // Call the function recursively for the next element
    //       recursiveAction(index + 1);
    //     }
    //   }
      
    //   // Start the recursion
    //   recursiveAction(0);
     

    
     })

})