
// replace specific code in the URL 
$("img.photo").each(function(){this.src=this.src.replace("pictures","images")});

// console testing
console.log($("img.photo").map((i,img)=>img.src).get())

// --- chat version ---
// Get the current URL
var currentUrl = window.location.href;

// Define the word to be replaced and its replacement
var wordToReplace = 'images';
var replacementWord = 'picture';

// Replace the word in the URL path
var updatedUrl = currentUrl.replace('/' + wordToReplace + '/', '/' + replacementWord + '/');

// Redirect to the updated URL
window.location.href = updatedUrl;

/*
In this script, we first retrieve the current URL using window.location.href. 
Then, we define the word we want to replace (images) and its replacement (picture). 
The replace() method is used to replace the word in the URL path with the desired replacement.
Finally, we update the URL by assigning the modified URL to window.location.href, which will cause the browser to redirect to the updated URL.
*/

