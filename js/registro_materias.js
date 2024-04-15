let selectedButton = null;

function selectButton(button) {
    selectedButton = button;
}

function placeButton(cell) {
    if (selectedButton !== null) {
        const button = document.createElement('button');
        button.className = 'button';
        button.style.backgroundColor = window.getComputedStyle(selectedButton).getPropertyValue('background-color');
        button.textContent = selectedButton.textContent;
        cell.innerHTML = '';
        cell.appendChild(button);
        // Guardar en localStorage
        saveToLocalStorage();
        selectedButton = null;
    }
}

function saveToLocalStorage() {
    const tableCells = document.querySelectorAll('.cell');
    const data = {};
    tableCells.forEach((cell, index) => {
        const button = cell.querySelector('.button');
        data[index] = button ? { color: button.style.backgroundColor, text: button.textContent } : null;
    });
    localStorage.setItem('itineranciasData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('itineranciasData'));
    if (data) {
        const tableCells = document.querySelectorAll('.cell');
        tableCells.forEach((cell, index) => {
            const buttonData = data[index];
            if (buttonData) {
                const button = document.createElement('button');
                button.className = 'button';
                button.style.backgroundColor = buttonData.color;
                button.textContent = buttonData.text;
                cell.appendChild(button);
            }
        });
    }
}

// Cargar datos del localStorage al cargar la página
loadFromLocalStorage();

function reestablecer() {
    localStorage.removeItem('itineranciasData');
    location.reload();
}

function eliminar() {
    const tableCells = document.querySelectorAll('.cell');
    let lastButtonIndex = -1;
    tableCells.forEach((cell, index) => {
        const button = cell.querySelector('.button');
        if (button) {
            lastButtonIndex = index;
        }
    });
    if (lastButtonIndex >= 0) {
        tableCells[lastButtonIndex].innerHTML = '';
        saveToLocalStorage();
    }
}

function descargar() {
    const table = document.querySelector('table');
    html2canvas(table).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'itinerancias_table.png';
        link.click();
    });
}