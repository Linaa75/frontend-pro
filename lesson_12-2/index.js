function div() {
    const container = document.getElementById('btn-container');

    container.onclick = (event) => {
        if (event.target.closest('button')) {
            alert(`The button is clicked: ${event.target.textContent}`);
        }
    }
}

div();

