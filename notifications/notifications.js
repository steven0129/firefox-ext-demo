var cakeNotification = "cake-notification"

var CAKE_INTERVAL = 0.1;

browser.alarms.create("", {periodInMinutes: CAKE_INTERVAL});

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(cakeNotification, {
    "type": "basic",
    "iconUrl": browser.extension.getURL("icons/cake.jpg"),
    "title": "Time for cake!",
    "message": "Something something cake"
  });
});

browser.browserAction.onClicked.addListener(()=> {
  var clearing = browser.notifications.clear(cakeNotification);
  clearing.then(() => {
    console.log("cleared");
  });
});