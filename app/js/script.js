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







document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.toggle-strikethrough');

    // Función para cargar el estado desde localStorage
    function loadState() {
        links.forEach(link => {
            const parent = link.closest('.containertematw');
            const textContainer = parent.querySelector('.textotematw');
            const checkbox = parent.querySelector('.checkboxtw');
            const stateKey = parent.dataset.stateKey;

            // Verifica si hay un estado guardado en localStorage
            const isChecked = localStorage.getItem(stateKey);
            if (isChecked === 'true') {
                textContainer.classList.add('striked');
                checkbox.classList.add('checked');
            }
        });
    }

    // Función para guardar el estado en localStorage
    function saveState(stateKey, isChecked) {
        localStorage.setItem(stateKey, isChecked);
    }

    // Carga el estado al cargar la página
    loadState();

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Encuentra los elementos a modificar
            const parent = this.closest('.containertematw');
            const textContainer = parent.querySelector('.textotematw');
            const checkbox = parent.querySelector('.checkboxtw');
            const stateKey = parent.dataset.stateKey;

            // Alterna el estado visual
            const isStriked = textContainer.classList.toggle('striked');
            checkbox.classList.toggle('checked');

            // Guarda el estado en localStorage
            saveState(stateKey, isStriked);
        });
    });
});
