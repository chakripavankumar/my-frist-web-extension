chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.includes("instagram.com")) {
        return { redirectUrl: "https://app.100xdevs.com/" };
      }
    },
    { urls: ["*://*.instagram.com/*"] },
    ["blocking"]
  );
  