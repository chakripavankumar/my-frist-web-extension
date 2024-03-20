chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.includes("instagram.com")) {
        return { redirectUrl: "https://yourwebsite.com" };
      }
    },
    { urls: ["*://*.instagram.com/*"] },
    ["blocking"]
  );
  