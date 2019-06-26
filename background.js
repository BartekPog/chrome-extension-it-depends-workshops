//jshint esversion:8

(() => {
  chrome.runtime.onMessage.addListener(
    (request) => {
      const {
        message,
        data
      } = request;

      switch (message) {

        case 'show-badge':
          const count = data.count;
          showBadge(count);
          break;
      }
    });

  function showBadge(count) {
    let text = '';
    text = count > 999 ? `999+` : count.toString();

    color = getColor(count);


    chrome.browserAction.setBadgeBackgroundColor({color: color});
    chrome.browserAction.setBadgeText({text});
  }

  function getColor(count){
    if(count>15)
      return "#ed1c1c";

    let r,g,b;

    r = Math.floor(count*255/15);
    g = 40;
    b = Math.floor((15-count)*255/15);

    return "#"+r.toString(16)+g.toString(16)+b.toString(16);
  }

})();
