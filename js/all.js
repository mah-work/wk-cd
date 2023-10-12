document.write('Hello World');

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

//insert before x function
    const parentWo = document.querySelector('.woocommerce-products-header');
    const noticeWrapperWo = document.querySelector('.button-pushbar');
    const orderingWo = document.querySelector('#category-page-popular');
    
    if (window.innerWidth <= 1024) {
        parentWo.insertBefore(orderingWo, noticeWrapperWo);
    }

//discount snipet
%{{ item.price | pct item.list_price }}%

//add custom css for a specific page only Liquid
{%assign cartSlider = 'cart-others-also-bought'%}
{%if content.id == cartSlider%}
    <style></style>
{%endif%}

{% if (products.length + categories.length + pages.length) == 0 %}
<div class="clerk_instant_search_noresults">
  No results for: <b>{{ query }}</b>... 
</div>
{% endif %}

//toggle slide up filter button

let isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
  const filterButton = document.createElement("button");
  filterButton.textContent = "Filter";
  filterButton.id = "filterButton";
  let isButtonClicked = false; // Flag to track if the button has been clicked

  const clerkSearchFilters = document.getElementById("clerk-search-filters");
  const clerkFacets = document.querySelector(
    ".clerk-design-component-bQip3ePy"
  );

  if (clerkFacets && clerkFacets.nextSibling) {
    clerkSearchFilters.insertBefore(filterButton, clerkFacets.nextSibling);

    filterButton.addEventListener("click", function () {
      if (!isButtonClicked) {
        // Check if the button has already been clicked
        isButtonClicked = true; // Set the flag to indicate button click

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const facetsContainer = document.createElement("div");
        facetsContainer.classList.add("facets-container");

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = "&times;";

        const facets = document.querySelector(".clerk-facets").cloneNode(true);
        facets.classList.add("overlay-facets");

        const pElement = document.createElement("p");
        pElement.textContent = "This is the additional paragraph.";

        facetsContainer.appendChild(pElement);
        facetsContainer.appendChild(closeButton);
        facetsContainer.appendChild(facets);

        overlay.appendChild(facetsContainer);
        document.body.appendChild(overlay);

        closeButton.addEventListener("click", function () {
          if (overlay.parentNode === document.body) {
            document.body.removeChild(overlay);
            isButtonClicked = false; // Reset the flag when the toggle is completed
          }
        });

        document.addEventListener("click", function (event) {
          if (
            !overlay.contains(event.target) &&
            event.target !== filterButton
          ) {
            if (overlay.parentNode === document.body) {
              document.body.removeChild(overlay);
              isButtonClicked = false; // Reset the flag when the toggle is completed
            }
          }
        });
      }
    });
  } else {
    console.error(
      "Unable to find clerk-search-filters or clerk-design-component-bQip3ePy elements."
    );
  }
} else {
  console.log("Window too big");
}

// css 
/*
 @media screen and (max-width: 768px) {
  .clerk-facets {
    display: none;
  }
}

.overlay .overlay-facets {
  display: block;
}
.overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: slideUp 0.3s ease-in-out forwards;
  border-radius: 8px 8px 0 0;
}

@keyframes slideUp {
  0% {
    height: 0;
  }

  100% {
    height: 60%;
  }
}

.facets-container {
  border-radius: 8px 8px 0 0;
  background-color: lightblue;
  padding: 20px;
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0 auto;
}

.close-button {
  position: absolute;
  top: -10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
}

.close-button:hover {
  color: #333;
}

#filterButton {
  background: #fff;
  width: 100%;
  border: 1px solid #009661;
  padding: 6px;
  color: #4a545b;
  font-size: .875rem;
  line-height: 34px;
  border-radius: 3px;
  -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
#filterButton:hover {
  background-color: #eee;
  color: #009661;
  cursor: pointer;
}
*/

// html 
/*
<div id="clerk-search-filters">
  <div id="bQip3ePy" class="clerk-design-component-bQip3ePy ">
    <p>Zu "topro tablett" wurden "5" Produkte gefunden</p>
  </div>
  <div class="clerk-facets">
    <p>Facets</p>
  </div>
</div>
*/
 
 
 
 // filter slider

$(document).ready(function() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $("#filterButton").click(function() {
      $("#clerk-search-filters").toggle().css("animation-name", "slideIn");
    });

    $(".icon.icon-x.icon-md, .clerk-facet-name").click(function() {
      $("#clerk-search-filters").css("animation-name", "slideOut");
      setTimeout(function() {
        $("#clerk-search-filters").hide();
      }, 300);
    });

    $("#clerk-search-filters").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
      if (e.originalEvent.animationName === "slideOut") {
        $("#clerk-search-filters").hide();
      }
    });
  }
});


var closeButton = document.querySelector('.drawer__close-button');
var searchContainer = document.querySelector('.clerk-instant-search-container');

function openSearchContainer() {
  console.log('button click');
  searchContainer.style.transform = 'translateX(0)';
  
  // Remove the event listener after it has been triggered
  document.removeEventListener('click', openSearchContainer);
}

document.addEventListener('click', openSearchContainer);

closeButton.addEventListener('click', function() {
  searchContainer.style.transform = 'translateX(-100%)';
});


const hitsDivided = {{ hits }} / 40;
const pageSize = Math.ceil(hitsDivided); // Round up to the nearest whole number

const titleSearch = document.querySelector('.clerk-design-component-zJly4LMD');

// Clear existing content
titleSearch.innerHTML = '';

for (let i = 0; i < pageSize; i++) {
  const currentPage = i + 1;
  const buttonPagination = document.createElement('button');
  const buttonPgText = document.createTextNode(currentPage);
  buttonPagination.appendChild(buttonPgText);
  buttonPagination.setAttribute('onclick', `Clerk('content', '#clerk-search', 'more', 5);`);

  titleSearch.appendChild(buttonPagination);
}


function insertSpanInDeepestElement(selector, dataTemplate) {
  var hostSlider = document.querySelector(selector);

  if (hostSlider) {
    var innerMostDiv = hostSlider.querySelector('.column_attr.mfn-inline-editor.clearfix');

    if (innerMostDiv) {
      var newSpan = document.createElement('span');
      newSpan.className = 'clerk';
      newSpan.setAttribute('data-template', dataTemplate);
      innerMostDiv.appendChild(newSpan);
    }
  }
}

if (window.location.href === 'https://orientalnotes.nl/') {
  insertSpanInDeepestElement('.clerk_slider_visitor', '@home-page-visitor-complementary');
  insertSpanInDeepestElement('.clerk_slider_trending', '@home-page-trending');
  insertSpanInDeepestElement('.clerk_slider_popular', '@home-page-popular');
}
