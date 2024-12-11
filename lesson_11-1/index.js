function createTable(rows, cols) {
    const table = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= cols; j++) {
            const cell = document.createElement('td');
            cell.style.border = '1px dashed #ccc';
            cell.style.padding = '10px';
            cell.style.textAlign = 'center';
            cell.style.color = '#fff';

            cell.innerText = i * j;

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

createTable(10, 10);


