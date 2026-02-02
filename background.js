chrome.runtime.onInstalled.addListener(() => {
  setInterval(() => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "eyepic.png",
      title: "Eye Comfort Reminder",
      message: "Look 20 feet away for 20 seconds to relax your eyes."
    });
  }, 20 * 60 * 1000);
});
