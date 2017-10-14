function restoreMostRecent(sessionInfos) {
    if (!sessionInfos.length) {
        console.log("No sessions found")
        return;
    }
    let sessionInfo = sessionInfos[0];
    if (sessionInfo.tab) {
        browser.sessions.restore(sessionInfo.tab.sessionId);
    } else {
        browser.sessions.restore(sessionInfo.window.sessionId);
    }
}

function onError(error) {
    console.log(error);
}

browser.browserAction.onClicked.addListener(function () {
    var gettingSessions = browser.sessions.getRecentlyClosed({
        maxResults: 1
    });
    gettingSessions.then(restoreMostRecent, onError);
});