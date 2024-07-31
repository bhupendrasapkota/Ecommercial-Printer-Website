// Function to show/hide social networks for a specific card
const showSocial = (toggleCardId, socialCardId) => {
    const toggle = document.getElementById(toggleCardId),
        social = document.getElementById(socialCardId);

    toggle.addEventListener('click', () => {
        if (social.classList.contains('animation')) {
            social.classList.add('down-animation');

            setTimeout(() => {
                social.classList.remove('down-animation');
            }, 1000);
        }

        social.classList.toggle('animation');
    });
};

// Applying showSocial function to each card
showSocial('card-toggle-1', 'card-social-1');
showSocial('card-toggle-2', 'card-social-2');
showSocial('card-toggle-3', 'card-social-3');
showSocial('card-toggle-4', 'card-social-4');

//signin in footer
document.getElementById("signInLink").addEventListener("click", function() {
    window.location.href = "signin.html";
});
