//jshint esversion:8

(async () => {
  const src = chrome.extension.getURL('lib/wordsCounter.js');
  const counter = await import(src);


  let words = counter.count(document.body);

  let time = Math.round(words/25)/10;

  chrome.runtime.sendMessage({
  message: 'show-badge',
  data: {count: time},
});


 })();
