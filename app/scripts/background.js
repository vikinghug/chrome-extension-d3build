'use strict';

function init(tabId, changeInfo, tab) {
  chrome.pageAction.show(tabId);
}

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url && tab.url.indexOf('http://www.diablofans.com/builds/') === 0) {
    init(tabId, changeInfo, tab);
  }
});

console.log('\'Allo \'Allo! Event Page for Page Action');
