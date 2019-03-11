
arr = new Array('webdriver', '__driver_evaluate', '__webdriver_evaluate', '__selenium_evaluate', '__fxdriver_evaluate', '__driver_unwrapped', '__webdriver_unwrapped', '__selenium_unwrapped', '__fxdriver_unwrapped', '_Selenium_IDE_Recorder', '_selenium', 'calledSelenium', '_WEBDRIVER_ELEM_CACHE', 'ChromeDriverw', 'driver-evaluate', 'webdriver-evaluate', 'selenium-evaluate', 'webdriverCommand', 'webdriver-evaluate-response', '__webdriverFunc', '__webdriver_script_fn', '__$webdriverAsyncExecutor', '__lastWatirAlert', '__lastWatirConfirm', '__lastWatirPrompt', '$chrome_asyncScriptInfo', '$cdc_asdjflasutopfhvcZLmcfl_')
    for (var i=0; i<arr.length; i++){
        Object.defineProperty(navigator, arr[i], {
              get: () => false
          })
}


window.navigator.chrome = {
    runtime: {},
    loadTimes: {},
    app: {},
    runtime: {},
    embeddedSearch: {},
    webstore: {},
    // etc.
};

Object.defineProperty(navigator, 'languages', {
    get: () => ['en-US', 'en']
});


Object.defineProperty(navigator, 'plugins', {
    get: () => [1, 2, 3, 4, 5,6],
});


