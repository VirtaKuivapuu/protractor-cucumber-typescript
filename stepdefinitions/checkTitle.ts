import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Then }) {
    Then('I check page title is {stringInDoubleQuotes}', async(stringInDoubleQuotes) => {
         await expect(browser.getTitle()).to.eventually.equal(stringInDoubleQuotes); 
    })
})