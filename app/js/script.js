// Select all cards
const cards = document.querySelectorAll('.publi-card');

// Check localStorage for clicked cards
cards.forEach(card => {
    const id = card.getAttribute('data-id');
    if (localStorage.getItem(`card-${id}`) === 'clicked') {
        card.classList.add('clicked');
    }

    // Add click event listener to each card
    card.addEventListener('click', function() {
        // Toggle clicked state
        card.classList.toggle('clicked');

        // Store the state in localStorage
        if (card.classList.contains('clicked')) {
            localStorage.setItem(`card-${id}`, 'clicked');

            // Open the associated link from data-link attribute
            const link = card.getAttribute('data-link');
            window.open(link, '_blank'); // Open in a new tab
        } else {
            localStorage.removeItem(`card-${id}`);
        }
    });
});
