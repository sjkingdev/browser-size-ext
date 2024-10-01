document.addEventListener('DOMContentLoaded', () => {
    const widthSpan = document.getElementById('width');
    const heightSpan = document.getElementById('height');
  
    // Get the active tab and then execute the script
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: () => {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      }, (results) => {
        if (results && results[0]) {
          const {width, height} = results[0].result;
          widthSpan.textContent = width;
          heightSpan.textContent = height;
        }
      });
    });
  })