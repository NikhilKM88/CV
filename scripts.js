// This script can be used to add interactivity
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});


// Get the popup element
const popup = document.getElementById('imagePopup');
const popupImage = document.getElementById('popupImage');
const profilePhoto = document.getElementById('openPopup');
const closeButton = document.getElementsByClassName('close')[0];

// When the user clicks on the profile photo, open the popup
profilePhoto.onclick = function() {
    popup.style.display = 'flex'; // Show the popup
    popupImage.src = 'profile.jfif'; // Set the source of the popup image
}

// When the user clicks on the close button, close the popup
closeButton.onclick = function() {
    popup.style.display = 'none'; // Hide the popup
}

// When the user clicks anywhere outside of the popup content, close the popup
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
}
