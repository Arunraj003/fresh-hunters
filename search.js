function filterCards() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}

