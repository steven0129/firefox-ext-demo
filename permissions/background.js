browser.browserAction.onClicked.addListener(() => {
  console.log(browser.runtime.getURL('page.html'))
  browser.tabs.create({
    url: browser.runtime.getURL("page.html")
  });
});