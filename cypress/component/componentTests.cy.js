import Problem1 from '../../src/components/problems/Problem1'
import Problem2 from '../../src/components/problems/Problem2'
import {capitals} from "../../src/components/util/arrays";
import Problem3 from '../../src/components/problems/Problem3'
import Problem4 from '../../src/components/problems/Problem4'
import Problem5 from '../../src/components/problems/Problem5'
describe('component tests', () => {
  describe('problem1',()=>{
    beforeEach(()=>{
      cy.mount(<Problem1 />)
    })

    it('should import all the required components',()=>{
      let button,overlay,tooltip
      try {
        button = require('react-bootstrap/Button')
        overlay = require('react-bootstrap/Overlay')
        tooltip = require('react-bootstrap/Tooltip')
      } finally {
        expect(button !== undefined).to.equal(true, 'should import related library')
        expect(overlay !== undefined).to.equal(true, 'should import related library')
        expect(tooltip !== undefined).to.equal(true, 'should import related library')
      }
    })

    it('should include css file in App.js',()=>{
      cy.readFile('./src/App.js').then((content)=>{
        expect(content).to.include("import 'bootstrap/dist/css/bootstrap.min.css'")
      })
    })

    it('should click the button and have the tooltip',()=>{
      cy.get('#overlay-example').should(e=>{
        expect(e.length).to.equal(0,'The tooltip should not exist before clicking the button')
      })
      cy.get('button').click()
      .then(()=>{
        cy.get('#overlay-example').should(e=>{
          expect(e.length).to.equal(1,'The tooltip should exist after clicking the button')
        })
      })
    })
  })

  it('problem2',()=>{
    cy.mount(<Problem2 />)
    const testarr=[7,15,32]
    testarr.forEach(num=>{
      cy.get('h3').should(e=>{
        expect(e.length).to.equal(0,'should not have h3 content before the mouse moving into each span')
      })
      cy.get(`span:nth-child(${num})`).trigger('mouseover')
      .then(()=>{
        cy.get('h3').should(e=>{
          expect(e.length).to.equal(1,'should have h3 content after the mouse moving into each span')
          expect(e.text()).to.contain(`${capitals[num-1].name}: ${capitals[num-1].capital}`,`should display ${capitals[num-1].name}: ${capitals[num-1].capital} in h3 element`)
        })
      })
      .then(()=>{
        cy.get(`span:nth-child(${num})`).trigger('mouseout')
      })
      .then(()=>{
        cy.get('h3').should(e=>{
          expect(e.length).to.equal(0,'should not have h3 content before the mouse moving into each span')
        })
      })
    })

  })

  describe('problem3',()=>{
    beforeEach(()=>{
      cy.mount(<Problem3 />)
    })

    it('should start with the default message, and reflect that it has an odd number of words',()=>{
      cy.get('textarea').should(e=>{
        expect(e.text()).to.contain('Type your message here and look at the feedback')
        expect(e.attr('class')).to.equal('input-odd','expect to have the odd style')
      })
      cy.get('div > div:nth-child(2) > div').should(e=>{
        expect(e.text()).to.contain('An odd number of words')
        expect(e.attr('class')).to.equal('feedback-odd')
      })
    })

    it('should set the correct odd and even class to the textarea and feedback div',()=>{
      const testText=['Test Even','Test Test Odd']
      testText.forEach(ele=>{
        const wordCount=ele.split(' ').filter(String).length
        const isEven=wordCount%2===0
        cy.get('textarea').clear().type(ele)
        .then(()=>{
          cy.get('textarea').should(e=>{
            if(isEven) expect(e.attr('class')).to.equal('input-even',`expect the textarea to have input-${isEven?'even':'odd'} style when there is only one word in the textarea`)
            else expect(e.attr('class')).to.equal('input-odd',`expect the textarea to have input-${isEven?'even':'odd'} style when there is only one word in the textarea`)
          })
          cy.get('div > div:nth-child(2) > div').should(e=>{
            if(isEven){
              expect(e.text()).to.contain('An even number of words')
              expect(e.attr('class')).to.equal('feedback-even',`expect the feedback div to have feedback-${isEven?'even':'odd'} style when there is only one word in the textarea`)
            }
            else{
              expect(e.text()).to.contain('An odd number of words')
              expect(e.attr('class')).to.equal('feedback-odd',`expect the feedback div to have feedback-${isEven?'even':'odd'} style when there is only one word in the textarea`)
            }
          })
        })
      })
    })

    it('when there is one word in the textarea',()=>{
      cy.get('textarea').clear().type('test')
      .then(()=>{
        cy.get('textarea').should(e=>{
          expect(e.attr('class')).to.equal('input-odd','expect the textarea to have "input-odd" style when there is only one word in the textarea')
        })
        cy.get('div > div:nth-child(2) > div').should(e=>{
          expect(e.text()).to.contain('One word','expect the feedback div to display "one word" when there is only one word in the textarea')
          expect(e.attr('class')).to.equal('feedback-odd','expect the feedback div to have "feedback-odd" style when there is only one word in the textarea')
        })
      })
    })

    it('when there is no word in the textarea',()=>{
      cy.get('textarea').clear()
      .then(()=>{
        cy.get('textarea').should(e=>{
          expect(e.attr('class')).to.equal('input-even','expect the textarea to have "input-even" style when there is no word in the textarea')
        })
        cy.get('div > div:nth-child(2) > div').should(e=>{
          expect(e.text()).to.contain('No Words','expect the feedback div to display "No words" when there is no word in the textarea')
          expect(e.attr('class')).to.equal('feedback-even','expect the feedback div to have "feedback-even" when there is no word in the textarea')
        })
      })
    })
  })

  describe('problem4',()=>{
    beforeEach(()=>{
      cy.mount(<Problem4 />)
    })

    it('the submit button should not work until the two password fields match, and the password is at least 7 characters long',()=>{
      cy.get('button').should('be.disabled')
    })

    it("the submit button should not work when the password is less than 7 characters long",()=>{
      cy.get('input:nth-child(3)').type('test1')
      .then(()=>{
        cy.get('input:nth-child(5)').type('test1')
      })
      .then(()=>{
        cy.get('button').should('be.disabled')
      })
    })

    it("the submit button should not work when the two password fields don't match",()=>{
      cy.get('input:nth-child(3)').type('testtest')
      .then(()=>{
        cy.get('input:nth-child(5)').type('test2test')
      })
      .then(()=>{
        cy.get('button').should('be.disabled')
      })
    })

    it("the submit button should only work when the two password fields match, and the password is at least 7 characters long",()=>{
      cy.get('input:nth-child(3)').type('testtest')
      .then(()=>{
        cy.get('input:nth-child(5)').type('testtest')
      })
      .then(()=>{
        cy.get('button').should('not.be.disabled')
      })
    })
  })

  describe('problem5', () => {
    let response = [
      {
        body: {
          image:
            'https://yesno.wtf/assets/yes/10-271c872c91cd72c1e38e72d2f8eda676.gif',
          answer: 'yes',
        },
      },
      {
        body: {
          image:
            'https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif',
          answer: 'yes',
        },
      },
      {
        body: {
          image:
            'https://yesno.wtf/assets/no/15-7446b1035f784986609f456e15d30a5b.gif',
          answer: 'no',
        },
      },
    ]
    let ele = response[Math.floor(Math.random() * response.length)]
    beforeEach(() => {
      cy.mount(<Problem5 />)
      cy.intercept('GET', 'https://yesno.wtf/api', (req) => {
        req.reply(ele)
      }).as('request')
    })

    it('should have an image and the answer showing up after clicking the button', () => {
      cy.get('button').click()
      .then(() => {
        cy.wait('@request').then(() => {
          cy.get('div.col.col-sm-8 > img').should((img) => {
            expect(img.attr('src')).to.equal(ele.body.image,'expect the image url should be equal to the image fron yesorno.wtf')
          })
          cy.get(' div.col.col-sm-8 > h3').should((e) => {
            expect(e.text()).to.equal(ele.body.answer,'expect the image url should be equal to the answer fron yesorno.wtf')
          })
        })
      })
    })

    it('should count yes or no after clicking the button', () => {
      let yesCount = 0
      let noCount = 0
      for (let i = 0; i < 3; i++) {
        cy.get('button').click()
        .then(() => {
          cy.wait('@request').then(() => {
            if (ele.body.answer === 'yes') {
              yesCount++
            } else {
              noCount++
            }
            cy.get('div.col.col-sm-4 > h3:nth-child(2)').should((e) => {
              let count = Number(e.text().replace(/\D/g, ''))
              expect(count).to.equal(yesCount)
            })
            .then(() => {
              cy.get('div.col.col-sm-4 > h3:nth-child(3)').should((e) => {
                let count = Number(e.text().replace(/\D/g, ''))
                expect(count).to.equal(noCount)
              })
              .then(() => {
                ele =
                  response[Math.floor(Math.random() * response.length)]
              })
            })
          })
        })
      }
    })
  })
})
