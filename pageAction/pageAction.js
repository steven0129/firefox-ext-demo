browser.tabs.onUpdated.addListener(tabId => {
    browser.pageAction.setTitle({
        tabId: tabId,
        title: "my action"
    })

    browser.pageAction.show(tabId)
    browser.pageAction.setPopup({
        tabId: tabId,
        popup: "hello.html"
    })
})