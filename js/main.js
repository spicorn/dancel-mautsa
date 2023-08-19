/*function openOverlay() {
	document.getElementById("overlay").style.display = "block";
  }
  function closeOverlay() {
	document.getElementById("overlay").style.display = "none";
  }
  document.getElementById("open-overlay").addEventListener("click", openOverlay);
  document.getElementById("overlay").addEventListener("click", closeOverlay);*/

//loading page starts//

// Get the loading page element
const loadingPage = document.getElementById('loading-page');

// Wait for the page to fully load
window.addEventListener('load', function() {
  // Delay the display of the loading page for 1 second
  setTimeout(function() {
    // Remove the loading page
    loadingPage.remove();
  }, 5000);
});

//loading page ends//


const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.display = 'block';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.style.display = 'none';
    menuOpen = false;
  }
});
