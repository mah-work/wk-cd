document.addEventListener('DOMContentLoaded', function () {
  const replaceButton = document.getElementById('replaceButton');

  // Handle replace button click event
  replaceButton.addEventListener('click', function () {
    const selectElement = document.getElementById('options');
    const selectedOption = selectElement.value;

    // Send a message to the content script with the selected option
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'replaceContent',
        selectedOption: selectedOption
      });
    });
  });
});
