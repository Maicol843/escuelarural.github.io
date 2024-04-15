let botonesInsertados = [];
let tablasGuardadas = [];
let tablaActual = null;
var selectedButton = null;

function selectButton(button) {
    if (selectedButton) {
        selectedButton.classList.remove('btn-primary');
        selectedButton.classList.add('btn-secondary');
    }

    selectedButton = button;
    selectedButton.classList.remove('btn-secondary');
    selectedButton.classList.add('btn-primary');
}

function insertButton(cell) {
    if (selectedButton) {
        cell.innerHTML = selectedButton.outerHTML;
        cell.classList.add('selected-cell');
    }
}

function removeLastButton() {
    var cells = document.querySelectorAll('.selected-cell');
    var lastCell = cells[cells.length - 1];

    if (lastCell) {
        lastCell.innerHTML = '';
        lastCell.classList.remove('selected-cell');
    }
}

function saveTable() {
    var tableCopy = document.getElementById('weeklyTable').cloneNode(true);

    var subjectName = prompt('Ingrese el nombre de la materia:');
    if (subjectName === null || subjectName === '') {
        alert('El nombre de la materia no puede estar vacío. La tabla no se guardará.');
        return;
    }

    var subjectHeader = tableCopy.querySelector('#subjectName');
    subjectHeader.innerHTML = subjectName;

    var tableContainer = document.querySelector('.container #tablasGeneradas');
    tableContainer.appendChild(tableCopy);
    tableCopy.querySelectorAll('.selected-cell').forEach(function (cell) {
        cell.classList.remove('selected-cell');
        cell.classList.add('disabled-cell');
    });
    selectedButton = null;
}

function resetTable() {
    var currentTable = document.getElementById('weeklyTable');
    var tableCells = currentTable.querySelectorAll('tbody td');
    tableCells.forEach(function (cell) {
        if (cell.cellIndex !== 0) {
            cell.innerHTML = '';
            cell.classList.remove('selected-cell', 'disabled-cell');
        }
    });
}

function resetTablas() {
    var tables = document.querySelectorAll('#tablasGeneradas');
    tables.forEach(function(table) {
        table.remove();
    });
}

function descargarTabla() {
    const tabla = document.getElementById("tablaItinerancias");

    // Utilizar html2canvas para capturar la tabla como imagen
    html2canvas(tabla).then(function (canvas) {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "Itinerancias.png";

        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
    });
}