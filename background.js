// Background service worker for Cookie Manager Pro
// Shows cookie count for the CURRENTLY ACTIVE tab's domain (not total)

let currentDomain = null;

// Helper: get domain from URL
function getDomainFromUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (e) {
    return null;
  }
}

// Helper: get cookies for a specific domain
async function getCookiesForDomain(domain) {
  if (!domain) return [];
  const allCookies = await chrome.cookies.getAll({});
  return allCookies.filter(cookie => {
    const cookieDomain = cookie.domain;
    if (cookieDomain.startsWith('.')) {
      return domain === cookieDomain.substring(1) || domain.endsWith(cookieDomain);
    } else {
      return domain === cookieDomain;
    }
  });
}

// Update badge with cookie count for the current domain
async function updateBadgeForCurrentTab() {
  try {
    // Get the active tab in the current window
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) {
      // No valid tab, clear badge or show 0?
      chrome.action.setBadgeText({ text: '' });
      return;
    }

    const domain = getDomainFromUrl(tab.url);
    if (!domain || tab.url.startsWith('chrome://') || tab.url.startsWith('brave://') || tab.url.startsWith('about:')) {
      // Internal browser page – cannot access cookies
      chrome.action.setBadgeText({ text: '' });
      return;
    }

    currentDomain = domain;
    const cookies = await getCookiesForDomain(domain);
    const count = cookies.length;

    const badgeText = count > 999 ? '999+' : count.toString();
    chrome.action.setBadgeText({ text: badgeText });
    chrome.action.setBadgeBackgroundColor({ color: '#FF9800' }); // Orange
    if (count === 0) {
      chrome.action.setBadgeBackgroundColor({ color: '#9E9E9E' }); // Gray for zero
    }
  } catch (error) {
    console.error('Failed to update badge:', error);
  }
}

// Listen for tab activation (user switches tabs)
chrome.tabs.onActivated.addListener(() => {
  updateBadgeForCurrentTab();
});

// Listen for tab URL changes (navigation within same tab)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url || changeInfo.status === 'complete') {
    updateBadgeForCurrentTab();
  }
});

// Listen for cookie changes, but only if they belong to the current domain
chrome.cookies.onChanged.addListener((changeInfo) => {
  if (!currentDomain) {
    // No current domain yet, maybe update anyway
    updateBadgeForCurrentTab();
    return;
  }

  const cookieDomain = changeInfo.cookie.domain;
  let matches = false;
  if (cookieDomain.startsWith('.')) {
    matches = currentDomain === cookieDomain.substring(1) || currentDomain.endsWith(cookieDomain);
  } else {
    matches = currentDomain === cookieDomain;
  }

  if (matches) {
    updateBadgeForCurrentTab();
  }
});

// Initial update when extension is installed or browser starts
chrome.runtime.onInstalled.addListener(() => {
  console.log('Cookie Manager Pro installed');
  chrome.storage.local.get(['language'], (result) => {
    if (!result.language) {
      chrome.storage.local.set({ language: 'en' });
    }
  });
  updateBadgeForCurrentTab();
});

chrome.runtime.onStartup.addListener(() => {
  updateBadgeForCurrentTab();
});

// Optional: periodic refresh every 10 seconds to catch any edge cases
setInterval(() => {
  updateBadgeForCurrentTab();
}, 10000);