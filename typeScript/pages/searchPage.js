"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchPageObject {
    constructor() {
        this.searchTextBox = protractor_1.$("input[name='q']");
        this.searchButton = protractor_1.$("button[name='btnG']");
    }
}
exports.SearchPageObject = SearchPageObject;
