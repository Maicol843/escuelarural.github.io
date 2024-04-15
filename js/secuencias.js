function resetTable() {
    // Obtener la tabla principal
    var table = document.querySelector('table');

    // Obtener todos los elementos de entrada dentro de la tabla principal y restablecer sus valores
    var inputs = table.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.value = '';
    });
}


function addRow() {
    // Obtener la tabla actual
    var table = document.querySelector("table");

    // Obtener el número de la última fila
    var lastRowNumber = parseInt(
        table.rows[table.rows.length - 1].cells[0].textContent
    );

    // Crear una nueva fila con el número continuo
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = lastRowNumber + 1;
    cell2.innerHTML = '<input type="text">';
}

function deleteRow() {
    // Obtener la tabla actual
    var table = document.querySelector("table");

    // Verificar si hay al menos dos filas para mantener al menos una fila
    if (table.rows.length > 1) {
        // Eliminar la última fila
        table.deleteRow(table.rows.length - 1);
    } else {
        alert(
            "No se puede eliminar más filas. Debe haber al menos una fila en la tabla."
        );
    }
}

function acceptModal() {
    var selectMaterias = document.getElementById("selectMaterias");
    var selectedOption =
        selectMaterias.options[selectMaterias.selectedIndex].value;

    // Realizar acciones según la selección
    if (selectedOption === "materia36") {

        // Añadir un título para las tablas de "Materia de 36 horas"
        var h3Title = document.createElement("h3");
        h3Title.textContent = "MATERIAS DE 36 HS.";
        document.getElementById("tablesContainer").appendChild(h3Title);

        // Clonar la tabla con thead "Matemáticas"
        cloneTableWithHeader("1) Matemáticas");

        // Clonar la tabla con thead "Educación Física" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("2) Educación Física", 2);

        // Clonar la tabla con thead "Inglés" y copiar desde el tercer input
        cloneTableWithHeaderAndCopy("3) Inglés", 3);

        // Clonar la tabla con thead "Lengua" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("4) Lengua", 4);

        // Clonar la tabla con thead "Geografía" y copiar desde el tercer input
        cloneTableWithHeaderAndCopy("5) Geografía", 5);

        // Clonar la tabla con thead "Biología" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("6) Biología", 6);

        // Clonar la tabla con thead "Sistemas Agroambientales" y copiar desde el tercer input
        cloneTableWithHeaderAndCopy("7) Sist. Agroambientales", 7);

        // Clonar la tabla con thead "Historia" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("8) Historia", 8);

        // Clonar la tabla con thead "Ética" y copiar desde el tercer input
        cloneTableWithHeaderAndCopy("9) Ética", 9);

        // Clonar la tabla con thead "Química" y copiar desde el tercer input
        cloneTableWithHeaderAndCopy("10) Química", 10);

    }

    if (selectedOption === "materia18LM") {

        // Añadir un título para las tablas de "Materia de 18 horas L-M"
        var h3Title = document.createElement("h3");
        h3Title.textContent = "MATERIAS DE 18 HS. L - M";
        document.getElementById("tablesContainer").appendChild(h3Title);

        // Clonar la tabla con thead "Tecnología"
        cloneTableWithHeader("11) Tecnología");

        // Clonar la tabla con thead "Artes" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("12) Artes", 2);

        // Clonar la tabla con thead "Música" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("13) Música", 3);

        // Clonar la tabla con thead "Teatro" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("14) Teatro", 4);

        // Clonar la tabla con thead "Danza" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("15) Danza", 5);
    }

    if (selectedOption === "materia18MJV") {

        // Añadir un título para las tablas de "Materia de 18 horas M - J - V"
        var h3Title = document.createElement("h3");
        h3Title.textContent = "MATERIAS DE 18 HS. M - J - V";
        document.getElementById("tablesContainer").appendChild(h3Title);

        // Clonar la tabla con thead "Ética Agroambiental"
        cloneTableWithHeader("1) Ética Agroambiental");

        // Clonar la tabla con thead "Seguridad e Higiene" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("2) Seguridad e Higiene", 2);

        // Clonar la tabla con thead "Física" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("3) Física", 3);

        // Clonar la tabla con thead "Psicología" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("4) Psicología", 4);

        // Clonar la tabla con thead "Economía" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("5) Economía", 5);

        // Clonar la tabla con thead "Biotecnología" y copiar desde el segundo input
        cloneTableWithHeaderAndCopy("6) Biotecnología", 6);
    }
}

function cloneTableWithHeader(headerText) {
    // Obtener la tabla actual
    var table = document.querySelector("table");

    // Clonar la tabla
    var clonedTable = table.cloneNode(true);

    // Agregar un thead con el texto especificado
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.setAttribute("colspan", "2"); // Colspan 2 para abarcar ambas columnas
    th.textContent = headerText;
    tr.appendChild(th);
    thead.appendChild(tr);

    // Insertar el thead al inicio de la tabla clonada
    clonedTable.insertBefore(thead, clonedTable.firstChild);

    // Agregar la tabla clonada debajo de la original
    table.parentNode.appendChild(clonedTable);

    // Agregar la tabla clonada al contenedor
    document.getElementById("tablesContainer").appendChild(clonedTable);
}

function cloneTableWithHeaderAndCopy(headerText, startIndex) {
    // Obtener la tabla actual
    var table = document.querySelector("table");

    // Clonar la tabla
    var clonedTable = table.cloneNode(true);

    // Agregar un thead con el texto especificado
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.setAttribute("colspan", "2"); // Colspan 2 para abarcar ambas columnas
    th.textContent = headerText;
    tr.appendChild(th);
    thead.appendChild(tr);

    // Insertar el thead al inicio de la tabla clonada
    clonedTable.insertBefore(thead, clonedTable.firstChild);

    // Obtener las filas a partir del índice especificado
    var rows = clonedTable.querySelectorAll("tbody tr");
    var rowCount = rows.length;

    // Crear un array temporal con las filas existentes
    var tempRows = Array.from(rows);

    // Limpiar el tbody de la tabla clonada
    clonedTable.querySelector("tbody").innerHTML = "";

    // Agregar las filas al tbody de la tabla clonada, comenzando desde el número 2 y terminando en el número 1
    for (var i = 1; i <= rowCount; i++) {
        var rowIndex = (i + startIndex - 2) % rowCount;
        clonedTable
            .querySelector("tbody")
            .appendChild(tempRows[rowIndex].cloneNode(true));
    }

    // Agregar la tabla clonada debajo de la original
    table.parentNode.appendChild(clonedTable);

    // Agregar la tabla clonada al contenedor
    document.getElementById("tablesContainer").appendChild(clonedTable);
}

function deleteSavedTables() {
    // Obtener el contenedor de las tablas clonadas
    var tablesContainer = document.getElementById('tablesContainer');

    // Eliminar todas las tablas clonadas
    tablesContainer.innerHTML = '';
}

function descargarTablas() {
    const tabla = document.getElementById("tablesContainer");

    // Utilizar html2canvas para capturar la tabla como imagen
    html2canvas(tabla).then(function (canvas) {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "Secuencias.png";

        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
    });
}