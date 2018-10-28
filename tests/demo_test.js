module.exports = {
    'Demo test Google1' : function (browser) {

      var google = browser.page.google_home_page();
      var searchBar=google.elements.searchBar.selector;
      var search_btn=google.elements.search_btn.selector;
      var data=require('../testdata/data.js');
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue(searchBar,data.custom_text)
        .useXpath()
        .click(search_btn)
        .useCss()
        .assert.containsText('#main', 'Night Watch')
        .pause(1000)
        .end();
    },

    'Demo test Google2' : function (browser) {

      var google = browser.page.google_home_page();
      var searchBar=google.elements.searchBar.selector;
      var search_btn=google.elements.search_btn.selector;
      var data=require('../testdata/data.js');
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue(searchBar,data.custom_text)
        .useXpath()
        .click(search_btn)
        .useCss()
        .assert.containsText('#main', 'Night Watch')
        .pause(1000)
        .end();
    },

    'Demo test Google3' : function (browser) {

      var google = browser.page.google_home_page();
      var searchBar=google.elements.searchBar.selector;
      var search_btn=google.elements.search_btn.selector;
      var data=require('../testdata/data.js');
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue(searchBar,data.custom_text)
        .useXpath()
        .click(search_btn)
        .useCss()
        .assert.containsText('#main', 'Night Watch')
        .pause(1000)
        .end();
    }
  };