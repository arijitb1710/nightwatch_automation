module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .useXpath()
        .click('//*[@id="tsf"]/div[2]/div[3]/center/inpu[1]')
        .useCss()
        .assert.containsText('#main', 'Night Watch')
        .pause(1000)
        .end();
    }
  };