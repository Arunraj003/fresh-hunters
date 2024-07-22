function filterCards() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    console.log(`Search input: ${searchInput}`);
    console.log(`Number of cards: ${cards.length}`);

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardText = card.innerText.toLowerCase();

        console.log(`Card ${i} text: ${cardText}`);

        if (cardText.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
