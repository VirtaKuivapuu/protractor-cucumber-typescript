import { $ } from 'protractor';
import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';


defineSupportCode(function ({ When }) {
    When(/^I navigate to (.*?)$/, async (text) => {
    	let linkid: string = "a[id="+text+"]";
    	let alink = $(linkid);
        await alink.click();
    });
})