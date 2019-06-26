//jshint esversion:8

(async () => {
    const src = chrome.extension.getURL('lib/wordsCounter.js');
    const counter = await import(src);


  let words = counter.count(document.body);


  let time = Math.round(words/25)/10;



  //alert(time);

  chrome.runtime.sendMessage({
  message: 'show-badge',
  data: {count: time},
});


 })();
// $('*').filter(function()
// {
//     if(($(this).text().lenght>0)&&($(this).text().lenght<100))
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }).each(function()
// {
//     alert($(this).text());
// });
// //   console.log(words);
