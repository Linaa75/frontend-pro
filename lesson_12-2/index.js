function div() {
    const container = document.getElementById('btn-container');

    container.onclick = (event) => {
        if (event.target.tagName === 'BUTTON') {
            alert(`The button is clicked: ${event.target.textContent}`);
        }
    }
}

div();