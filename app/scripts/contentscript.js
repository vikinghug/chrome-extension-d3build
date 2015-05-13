'use strict';

console.log('\'Allo \'Allo! Content script');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var activeContainer = document.querySelector('ul.skill-selection');
  var active = activeContainer.querySelectorAll('li.class-selected');

  var passiveContainer = document.querySelector('ul.passive-selection');
  var passive = passiveContainer.querySelectorAll('li.class-selected');

  var payload = {active: {}, passive: {}};

  // active skills
  [].forEach.call(active, function (li) {
    payload.active[""+li.dataset.slotId+""] = {
      skill: {
        name: li.querySelector('.skill').innerHTML,
        id: li.dataset.skillId
      },
      rune: {
        name: li.querySelector('.rune').innerHTML,
        id: li.dataset.runeId
      }
    };
  });

  // passive skills
  [].forEach.call(passive, function (li) {
    payload.passive[""+li.dataset.slotId+""] = {
      skill: {
        name: li.querySelector('.skill').innerHTML,
        id: li.dataset.skillId
      }
    };
  });

  sendResponse(payload);
});
