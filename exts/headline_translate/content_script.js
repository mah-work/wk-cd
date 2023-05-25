// Listen for a message from the popup menu
chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === 'replaceContent') {
    const inputField = document.getElementById('YOUR_INPUT_ID');
    const selectedOption = message.selectedOption;

    // Replace input field content based on selected option
    if (selectedOption === 'Most Popular') {
      inputField.value = 'Replacement text for Most Popular';
    } else if (selectedOption === 'Cele mai populare') {
      inputField.value = 'Replacement text for Cele mai populare';
    }
  }
});
