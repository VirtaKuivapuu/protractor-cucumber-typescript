import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';

defineSupportCode(function ({ Given }) {
    Given('I am on the zoo website', async() => {
         await browser.get('http://www.thetestroom.com/webapp/');
    });
})