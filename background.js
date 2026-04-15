// Background service worker for cookie manager
chrome.runtime.onInstalled.addListener(() => {
    console.log('Cookie Manager Pro installed');
    
    // Initialize default language preference
    chrome.storage.local.get(['language'], (result) => {
        if (!result.language) {
            chrome.storage.local.set({ language: 'en' });
        }
    });
});

// Optional: Listen for cookie changes
chrome.cookies.onChanged.addListener((changeInfo) => {
    console.log('Cookie changed:', changeInfo);
});