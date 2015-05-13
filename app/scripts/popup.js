'use strict';

console.log('\'Allo \'Allo! Popup');

function getBuild() {
  // console.log(document)
}

document.getElementById('textfield').value = "boom";

chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  if (tabs.length > 0) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: "gimme"
    }, function (response) {
      document.getElementById('textfield').value = JSON.stringify(response);
    });
  }
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   alert("POW");
//   document.getElementById('textfield').value = JSON.parse(request); // (request, sender, sendResponse);
// });

// document.getElementById('get-build').addEventListener('click', getBuild);
